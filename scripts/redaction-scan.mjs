#!/usr/bin/env node

import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);

function readArg(name, fallback = null) {
  const prefix = `${name}=`;
  const direct = args.find((arg) => arg.startsWith(prefix));
  if (direct) return direct.slice(prefix.length);
  const index = args.indexOf(name);
  if (index >= 0 && args[index + 1]) return args[index + 1];
  return fallback;
}

const root = path.resolve(readArg("--root", process.cwd()));
const writeTarget = readArg("--write", null);
const failOnMatch = !args.includes("--no-fail");

const ignoredDirectories = new Set([
  ".git",
  ".vercel",
  ".next",
  "node_modules",
  "dist",
  "build",
  ".cache"
]);

const ignoredFilePatterns = [
  /\.local\.md$/i,
  /package-lock\.json$/i,
  /pnpm-lock\.yaml$/i,
  /yarn\.lock$/i
];

const textExtensions = new Set([
  ".css",
  ".csv",
  ".html",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".svg",
  ".txt",
  ".xml",
  ".yml",
  ".yaml"
]);

const textFilenames = new Set(["robots.txt", "vercel.json", "README.md"]);

const checks = [
  {
    id: "email_address",
    severity: "restricted",
    pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
    reason: "Email addresses cannot be included in public artifacts."
  },
  {
    id: "taiwan_mobile_phone",
    severity: "restricted",
    pattern: /\b09\d{8}\b/g,
    reason: "Taiwan mobile phone numbers cannot be included in public artifacts."
  },
  {
    id: "taiwan_id_number_like",
    severity: "restricted",
    pattern: /\b[A-Z][12]\d{8}\b/g,
    reason: "Taiwan ID-like values cannot be included in public artifacts."
  },
  {
    id: "raw_gmail_url",
    severity: "internal",
    pattern: /https:\/\/mail\.google\.com\/[^\s"'<>]+/g,
    reason: "Mailbox URLs cannot be included in public artifacts."
  },
  {
    id: "local_windows_user_path",
    severity: "internal",
    pattern: /C:\\Users\\[^\s"'<>]+/g,
    reason: "Local machine paths cannot be included in public artifacts."
  },
  {
    id: "vercel_internal_identifier",
    severity: "internal",
    pattern: /\b(?:prj|team)_[A-Za-z0-9]+\b/g,
    reason: "Internal Vercel project or team identifiers should stay out of public artifacts."
  },
  {
    id: "secret_key_like",
    severity: "restricted",
    pattern: /\b(?:sk|pk)_(?:live|test)_[A-Za-z0-9]{12,}\b/g,
    reason: "Secret-like keys cannot be included in public artifacts."
  },
  {
    id: "salary_amount_context",
    severity: "restricted",
    pattern: /(?:薪資|時薪|月薪|報酬|工資|補貼|獎金).{0,24}(?:NT\$|新台幣|\$)?\s?\d{3,}(?:,\d{3})*/g,
    reason: "Salary or compensation amounts cannot be included in public artifacts."
  }
];

function shouldIgnoreFile(filePath) {
  const name = path.basename(filePath);
  if (ignoredFilePatterns.some((pattern) => pattern.test(name))) return true;
  const extension = path.extname(filePath);
  return !textExtensions.has(extension) && !textFilenames.has(name);
}

async function collectFiles(directory, output = []) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        await collectFiles(fullPath, output);
      }
      continue;
    }
    if (!entry.isFile()) continue;
    if (!shouldIgnoreFile(fullPath)) output.push(fullPath);
  }
  return output;
}

function excerpt(text, index, length) {
  const start = Math.max(0, index - 28);
  const end = Math.min(text.length, index + length + 28);
  return text.slice(start, end).replace(/\s+/g, " ").trim();
}

async function scanFile(filePath) {
  const fileStat = await stat(filePath);
  if (fileStat.size > 1_000_000) return [];
  const text = await readFile(filePath, "utf8");
  const relativePath = path.relative(root, filePath).replaceAll(path.sep, "/");
  const matches = [];
  for (const check of checks) {
    check.pattern.lastIndex = 0;
    for (const match of text.matchAll(check.pattern)) {
      matches.push({
        file: relativePath,
        check: check.id,
        severity: check.severity,
        reason: check.reason,
        excerpt: excerpt(text, match.index ?? 0, match[0].length)
      });
    }
  }
  return matches;
}

const files = await collectFiles(root);
const allMatches = [];
for (const file of files) {
  allMatches.push(...await scanFile(file));
}

const report = {
  schema_version: "0.6",
  generated_at: new Date().toISOString(),
  scanned_root: ".",
  scanned_files: files.length,
  status: allMatches.length === 0 ? "pass" : "fail",
  checks: checks.map(({ id, severity, reason }) => ({ id, severity, reason })),
  matches: allMatches
};

if (writeTarget) {
  const outputPath = path.resolve(root, writeTarget);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
}

console.log(JSON.stringify(report, null, 2));

if (failOnMatch && allMatches.length > 0) {
  process.exitCode = 1;
}
