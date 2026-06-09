# Governance Expansion Review Card v1.2

## Expansion

Add a weekly capability dashboard with status metrics, changed work lines, delegation categories, blockers, and next-week candidates.

## Why Needed

Kevin needs a fast weekly view for planning, partner discussion, and prioritization. v1.1 created the baseline map; v1.2 turns it into an actionable dashboard.

## Owner Agents

- `workflow_designer`: dashboard sections and weekly decision flow.
- `doc_scribe`: dashboard explanation and human-readable summary.
- `risk_guardian`: blocked/private-only list and public boundary.
- `engineering_reviewer`: link, redaction, production, and repo verification.

## Trigger

Use when Kevin asks to update the weekly capability map, decide next week's priorities, or explain what can be delegated.

## Should Not Do

- Do not include real candidate data.
- Do not import workforce-war-room private records.
- Do not send trial tasks.
- Do not publish de-identified real records without approval.
- Do not remove noindex controls.
- Do not treat dashboard metrics as HR or compensation decisions.

## Proof

- `weekly/capability-dashboard-v1.2.json`
- `weekly/capability-dashboard-actions-v1.2.csv`
- `docs/weekly-capability-dashboard-v1.2.md`
- `assets/weekly-dashboard-v1.2.svg`
- `reports/public-redaction-scan-report.v1.2.json`

## Source Of Truth

The public review repo remains the source of truth for public-safe capability planning.

Real people data, real workforce intelligence, and private HR details require a separate private implementation.

## Approval Gates

| Gate | Required Before |
| --- | --- |
| Kevin approval | Any public site update. |
| Kevin approval | Git commit, push, or Vercel deployment. |
| Kevin approval | Any private workboard creation using real records. |
| Kevin approval | Any external contact or trial task send. |
| Kevin approval | Any public export from de-identified real records. |

## No-op Rule

If weekly evidence is unchanged, output a verified no-op and keep the dashboard as-is.

## Classification

Public-review dashboard. Not a private HR system. Not autonomous decision-making. Not a replacement for Kevin approval.
