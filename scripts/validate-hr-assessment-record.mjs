#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const [schemaArg, recordArg] = process.argv.slice(2);

if (!schemaArg || !recordArg) {
  console.error("Usage: node scripts/validate-hr-assessment-record.mjs <schema.json> <record.json>");
  process.exit(2);
}

const schemaPath = path.resolve(process.cwd(), schemaArg);
const recordPath = path.resolve(process.cwd(), recordArg);
const schema = JSON.parse(await fs.readFile(schemaPath, "utf8"));
const record = JSON.parse(await fs.readFile(recordPath, "utf8"));

const errors = [];

function typeOf(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (Number.isInteger(value)) return "integer";
  return typeof value;
}

function typeMatches(value, expected) {
  const actual = typeOf(value);
  if (expected === "number") return actual === "number" || actual === "integer";
  if (expected === "integer") return actual === "integer";
  return actual === expected;
}

function resolveRef(ref) {
  if (!ref.startsWith("#/")) {
    throw new Error(`Unsupported ref: ${ref}`);
  }
  return ref
    .slice(2)
    .split("/")
    .reduce((node, key) => node[key], schema);
}

function label(pathParts) {
  return pathParts.length ? pathParts.join(".") : "$";
}

function validate(value, node, pathParts = []) {
  if (!node || typeof node !== "object") return;
  if (node.$ref) {
    validate(value, resolveRef(node.$ref), pathParts);
    return;
  }

  if (node.const !== undefined && value !== node.const) {
    errors.push(`${label(pathParts)} must equal ${JSON.stringify(node.const)}`);
  }

  if (node.enum && !node.enum.includes(value)) {
    errors.push(`${label(pathParts)} must be one of ${node.enum.join(", ")}`);
  }

  if (node.type) {
    const allowedTypes = Array.isArray(node.type) ? node.type : [node.type];
    if (!allowedTypes.some((type) => typeMatches(value, type))) {
      errors.push(`${label(pathParts)} expected ${allowedTypes.join(" or ")}, got ${typeOf(value)}`);
      return;
    }
  }

  if (typeof value === "number") {
    if (node.minimum !== undefined && value < node.minimum) {
      errors.push(`${label(pathParts)} must be >= ${node.minimum}`);
    }
    if (node.maximum !== undefined && value > node.maximum) {
      errors.push(`${label(pathParts)} must be <= ${node.maximum}`);
    }
  }

  if (typeof value === "string") {
    if (node.pattern && !(new RegExp(node.pattern).test(value))) {
      errors.push(`${label(pathParts)} does not match ${node.pattern}`);
    }
    if (node.format === "date" && value && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      errors.push(`${label(pathParts)} must be yyyy-mm-dd`);
    }
    if (node.format === "date-time" && value && Number.isNaN(Date.parse(value))) {
      errors.push(`${label(pathParts)} must be date-time`);
    }
  }

  if (Array.isArray(value) && node.items) {
    value.forEach((item, index) => validate(item, node.items, [...pathParts, String(index)]));
  }

  if (value && typeof value === "object" && !Array.isArray(value)) {
    const properties = node.properties ?? {};
    for (const requiredKey of node.required ?? []) {
      if (!(requiredKey in value)) {
        errors.push(`${label(pathParts)} missing required key ${requiredKey}`);
      }
    }
    if (node.additionalProperties === false) {
      for (const key of Object.keys(value)) {
        if (!(key in properties)) {
          errors.push(`${label([...pathParts, key])} is not allowed`);
        }
      }
    }
    for (const [key, propertySchema] of Object.entries(properties)) {
      if (key in value) {
        validate(value[key], propertySchema, [...pathParts, key]);
      }
    }
  }
}

validate(record, schema);

if (errors.length) {
  console.error(JSON.stringify({
    status: "fail",
    schema: path.relative(process.cwd(), schemaPath).replaceAll(path.sep, "/"),
    record: path.relative(process.cwd(), recordPath).replaceAll(path.sep, "/"),
    errors
  }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  status: "pass",
  schema: path.relative(process.cwd(), schemaPath).replaceAll(path.sep, "/"),
  record: path.relative(process.cwd(), recordPath).replaceAll(path.sep, "/")
}, null, 2));
