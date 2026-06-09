# Governance Expansion Review Card v1.1

## Expansion

Add a weekly capability-map baseline, work-line CSV, update workflow, and visual map.

## Why Needed

Kevin wants a way to see all accumulated work as a visual capability map that can be refreshed weekly and used for planning, partner discussion, and future hiring structure.

## Owner Agents

- `workflow_designer`: weekly update structure.
- `doc_scribe`: work-line explanation cards.
- `risk_guardian`: public/private/restricted boundary.
- `engineering_reviewer`: artifact, redaction, and deployment verification.

## Trigger

Use when Kevin asks to update the capability map, review weekly work, explain current work lines, or plan future people structure.

## Should Not Do

- Do not include real candidate data.
- Do not include private messages, account identifiers, local paths, or restricted workflow records.
- Do not publish compensation amounts or private HR details.
- Do not connect to the real workforce-war-room without a private boundary review.
- Do not auto-push or deploy without Kevin approval.

## Proof

- `weekly/capability-map-baseline-v1.1.json`
- `weekly/capability-map-work-lines-v1.1.csv`
- `docs/weekly-capability-map-baseline-v1.1.md`
- `docs/weekly-capability-map-update-workflow-v1.1.md`
- `assets/weekly-capability-map-v1.1.svg`
- `reports/public-redaction-scan-report.v1.1.json`

## Source Of Truth

This public review repo is the source of truth for the public-safe capability map.

Private or restricted work must stay outside this repo until Kevin approves a separate private implementation.

## Approval Gates

| Gate | Required Before |
| --- | --- |
| Kevin approval | Any public site update. |
| Kevin approval | Git commit, push, or Vercel deployment. |
| Kevin approval | Importing real people or candidate records. |
| Kevin approval | Connecting to workforce-war-room. |
| Kevin approval | Creating native Notion or Google Sheets with real data. |

## No-op Rule

If the weekly source scan finds no reliable new public-safe material, produce a verified no-op and do not regenerate the map.

## Classification

Local public-review workflow asset. Not global yet. Not autonomous HR automation. Not a private people database.
