#!/usr/bin/env node

import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const root = process.cwd();
const workboardDir = path.join(root, "workboards");

const csvSources = [
  ["Candidates", "hr-intel-workboard-candidates.v1.0.csv"],
  ["Trial_Tasks", "hr-intel-workboard-trial-tasks.v1.0.csv"],
  ["Feedback", "hr-intel-workboard-feedback.v1.0.csv"],
  ["Supervision", "hr-intel-workboard-supervision.v1.0.csv"],
  ["Field_Map", "hr-intel-workboard-field-map.v1.0.csv"]
];

const firstCsv = await fs.readFile(path.join(workboardDir, csvSources[0][1]), "utf8");
const workbook = await Workbook.fromCSV(firstCsv, { sheetName: csvSources[0][0] });

for (const [sheetName, fileName] of csvSources.slice(1)) {
  const csvText = await fs.readFile(path.join(workboardDir, fileName), "utf8");
  await workbook.fromCSV(csvText, { sheetName });
}

const dashboard = workbook.worksheets.add("Dashboard");
dashboard.showGridLines = false;
dashboard.getRange("A1:F1").merge();
dashboard.getRange("A1").values = [["HR Intel Workboard v1.0"]];
dashboard.getRange("A2:F2").merge();
dashboard.getRange("A2").values = [["Fictional content / research partner pilot using the v0.9 HR assessment schema."]];
dashboard.getRange("A4:B10").values = [
  ["Candidate", "Fictional Candidate C"],
  ["Role", "content_research"],
  ["Score", 4.17],
  ["Planning", "high"],
  ["Next", "trial_task"],
  ["Load", "medium"],
  ["Public export", "false"]
];
dashboard.getRange("D4:F9").values = [
  ["View", "Use", "Source tab"],
  ["Pipeline", "Stage and signal", "Candidates"],
  ["Trial", "Scope and proof", "Trial_Tasks"],
  ["Feedback", "Revision tracking", "Feedback"],
  ["Supervision", "Load and gates", "Supervision"],
  ["Field Map", "Notion / Sheets setup", "Field_Map"]
];
dashboard.getRange("A12:C15").values = [
  ["Safety rule", "Meaning", "Action"],
  ["Fictional only", "No real applicant or private workforce data.", "Use as template."],
  ["Human review", "Scores are planning signals only.", "Kevin reviews."],
  ["Public export false", "noindex is not privacy.", "Keep false by default."]
];

const styleBlocks = [
  ["Candidates", "A1:T1", "A1:T2"],
  ["Trial_Tasks", "A1:L1", "A1:L2"],
  ["Feedback", "A1:G1", "A1:G2"],
  ["Supervision", "A1:H1", "A1:H2"],
  ["Field_Map", "A1:I1", "A1:I22"]
];

for (const [sheetName, headerRange, bodyRange] of styleBlocks) {
  const sheet = workbook.worksheets.getItem(sheetName);
  sheet.showGridLines = false;
  sheet.freezePanes.freezeRows(1);
  sheet.getRange(headerRange).format = {
    fill: "#0F766E",
    font: { bold: true, color: "#FFFFFF" },
    wrapText: true
  };
  sheet.getRange(bodyRange).format = {
    borders: { preset: "all", style: "thin", color: "#D9E2E2" },
    wrapText: true
  };
  sheet.getRange(bodyRange).format.autofitRows();
}

const widthSettings = {
  Candidates: [
    ["A1:A20", 180],
    ["B1:C20", 150],
    ["D1:F20", 115],
    ["G1:J20", 120],
    ["K1:T20", 170]
  ],
  Trial_Tasks: [
    ["A1:C20", 170],
    ["D1:D20", 360],
    ["E1:H20", 230],
    ["I1:L20", 170]
  ],
  Feedback: [
    ["A1:A20", 180],
    ["B1:B20", 115],
    ["C1:C20", 420],
    ["D1:G20", 190]
  ],
  Supervision: [
    ["A1:B20", 180],
    ["C1:E20", 260],
    ["F1:H20", 260]
  ],
  Field_Map: [
    ["A1:A40", 140],
    ["B1:B40", 170],
    ["C1:C40", 260],
    ["D1:E40", 120],
    ["F1:G40", 190],
    ["H1:H40", 150],
    ["I1:I40", 260]
  ]
};

for (const [sheetName, settings] of Object.entries(widthSettings)) {
  const sheet = workbook.worksheets.getItem(sheetName);
  for (const [range, widthPx] of settings) {
    sheet.getRange(range).format.columnWidthPx = widthPx;
  }
}

dashboard.getRange("A1:F2").format = {
  fill: "#12343B",
  font: { bold: true, color: "#FFFFFF" },
  wrapText: true
};
dashboard.getRange("A1:A20").format.columnWidthPx = 140;
dashboard.getRange("B1:B20").format.columnWidthPx = 220;
dashboard.getRange("C1:C20").format.columnWidthPx = 130;
dashboard.getRange("D1:D20").format.columnWidthPx = 150;
dashboard.getRange("E1:E20").format.columnWidthPx = 180;
dashboard.getRange("F1:F20").format.columnWidthPx = 150;
dashboard.getRange("A4:B10").format = {
  borders: { preset: "all", style: "thin", color: "#D9E2E2" },
  wrapText: true
};
dashboard.getRange("D4:F9").format = {
  borders: { preset: "all", style: "thin", color: "#D9E2E2" },
  wrapText: true
};
dashboard.getRange("D4:F4").format = {
  fill: "#0F766E",
  font: { bold: true, color: "#FFFFFF" }
};
dashboard.getRange("A12:C15").format = {
  borders: { preset: "all", style: "thin", color: "#D9E2E2" },
  wrapText: true
};
dashboard.getRange("A12:C12").format = {
  fill: "#6B4E16",
  font: { bold: true, color: "#FFFFFF" }
};
dashboard.getRange("A1:F15").format.autofitRows();

const previewDir = path.join(os.tmpdir(), "hr-intel-workboard-v1.0-previews");
await fs.mkdir(previewDir, { recursive: true });
for (const [sheetName] of [["Dashboard"], ...csvSources]) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png"
  });
  await fs.writeFile(
    path.join(previewDir, `${sheetName}.png`),
    new Uint8Array(await preview.arrayBuffer())
  );
}

const outputPath = path.join(workboardDir, "hr-intel-workboard.v1.0.xlsx");
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);

const formulaErrors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "final formula error scan"
});

console.log(JSON.stringify({
  status: "ok",
  output: path.relative(root, outputPath).replaceAll(path.sep, "/"),
  preview_dir: previewDir,
  formula_error_scan: formulaErrors.ndjson
}, null, 2));

process.exit(0);
