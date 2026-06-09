# Governance Expansion Review Card v1.5

## Expansion

Add a private workboard selection draft for the v1.4 social-worker resource finder prototype.

## Why Needed

v1.4 created a resource-card prototype. v1.5 decides how that prototype should become an actual private operating board later, while keeping this public repo limited to blank structures and selection rationale.

## Original Effect To Preserve

The public capability map should help Kevin plan tools and delegation without exposing private records or taking external action.

## Baseline Evidence

- `weekly/social-worker-resource-finder-prototype-v1.4.json`
- `docs/social-worker-resource-finder-prototype-brief-v1.4.md`
- `templates/social-worker-resource-card-template-v1.4.csv`

## Recommended Change

Adopt a Sheets-first, Notion-later private workboard strategy.

Google Sheets should be the initial source of truth because the workflow is row-based, source-audit-heavy, and easier for Codex / CSV / QA round-trips. Notion can become a later reading or discussion layer after fields and review rules are stable.

## Owner Agents

- `workflow_designer`: phased implementation ladder.
- `data_analyst`: tabs and fields.
- `risk_guardian`: private board boundary and approvals.
- `taiwan_context_reviewer`: Taiwan wording and workplace habit fit.
- `frontend_qa`: public page and mobile readability checks.
- `engineering_reviewer`: redaction, link, JSON, and production verification.

## Trigger

Use v1.5 when Kevin wants to choose between Notion and Google Sheets for the social-resource workboard, or when preparing a private board without creating it yet.

## Should Not Do

- Do not create a Google Sheet or Notion database without explicit approval.
- Do not publish private board URLs.
- Do not import real case records.
- Do not give partners access to private records.
- Do not create automations that write, notify, or contact people.
- Do not remove noindex controls.

## Proof

- `weekly/social-resource-workboard-selection-v1.5.json`
- `docs/social-resource-workboard-selection-v1.5.md`
- `workboards/social-resource-workboard-tabs-v1.5.csv`
- `workboards/social-resource-workboard-fields-v1.5.csv`
- `docs/social-resource-workboard-implementation-checklist-v1.5.md`
- `docs/social-resource-workboard-taiwan-fit-gate-v1.5.md`
- `assets/social-resource-workboard-selection-v1.5.svg`
- `reports/public-redaction-scan-report.v1.5.json`

## Taiwan Tool-fit Gate

Verdict: pass.

Proof: `docs/social-resource-workboard-taiwan-fit-gate-v1.5.md`.

The workboard uses practical Taiwan workplace labels such as 工作板、分頁、欄位、待覆核、暫停、缺欄、新鮮度 and 權限. The Sheets-first path matches a small-team habit of stabilizing rows and permissions before adding a narrative Notion view.

## Approval Gates

| Gate | Required Before |
| --- | --- |
| Kevin approval | Creating a private Google Sheet |
| Kevin approval | Creating a Notion database |
| Kevin approval | Inviting partners |
| Kevin approval | Importing real records |
| Kevin approval | Running any automation beyond report-first read checks |
| Kevin approval | Removing noindex controls |

## No-op Rule

If Kevin does not approve private setup yet, keep this selection draft as the public-safe baseline and record no-op on future weekly checks.

## Rollback

Revert the v1.5 commit or remove the v1.5 section and artifact links. v1.4 remains a complete public-safe prototype brief.

## Classification

Public-review workboard selection draft. Not a private database. Not an external action. Not a live workboard.
