# Governance Expansion Review Card v1.4

## Expansion

Add a public-safe prototype package for the social-worker resource finder and freshness card module.

## Why Needed

v1.3 created line cards. v1.4 turns one line-card module into a concrete prototype brief so Kevin can test delegation, Codex packaging, and future automation boundaries without touching private case data.

## Original Effect To Preserve

The public capability map should help Kevin plan tools, explain work lines, and decide delegation boundaries while keeping private records out of the public repo.

## Baseline Evidence

- `weekly/social-worker-tools-line-card-v1.3.json`
- `docs/social-worker-tools-line-card-v1.3.md`
- `weekly/tool-line-cards-v1.3.csv`

## Current Skills / Workflows Checked

- Agent OS task routing.
- Workflow review and optimization gate.
- Periodic governance check.
- Tool update Taiwan fit gate.
- Public production report workflow with noindex.
- Taiwan mobile readability guidance.

## Owner Agents

- `workflow_designer`: prototype flow and owner split.
- `risk_guardian`: public/private boundaries and stop conditions.
- `data_analyst`: card template and QA checklist fields.
- `taiwan_context_reviewer`: Taiwan wording and workplace habit fit.
- `frontend_qa`: public page and mobile-readable structure.
- `engineering_reviewer`: redaction, JSON, link, and production checks.

## Trigger

Use v1.4 when Kevin wants to:

- Test whether a partner can organize public social-service resources.
- Turn resource lookup into a repeatable workboard.
- Prepare a private tool path without using real case data.
- Decide whether freshness checks should become report-first automation.

## Should Not Do

- Do not include private case records.
- Do not include private messages or internal account pages.
- Do not infer eligibility or service decisions.
- Do not make legal, medical, diagnostic, or welfare entitlement conclusions.
- Do not contact people or send trial tasks without explicit approval.
- Do not remove noindex controls.

## Proof

- `weekly/social-worker-resource-finder-prototype-v1.4.json`
- `docs/social-worker-resource-finder-prototype-brief-v1.4.md`
- `templates/social-worker-resource-card-empty-record-v1.4.json`
- `templates/social-worker-resource-card-template-v1.4.csv`
- `weekly/social-worker-resource-finder-qa-checklist-v1.4.csv`
- `docs/social-worker-resource-finder-taiwan-fit-gate-v1.4.md`
- `assets/social-worker-resource-finder-prototype-v1.4.svg`
- `reports/public-redaction-scan-report.v1.4.json`

## Taiwan Tool-fit Gate

Verdict: pass.

Proof: `docs/social-worker-resource-finder-taiwan-fit-gate-v1.4.md`.

The wording uses Taiwan-friendly workplace labels such as 公開來源、缺欄、人工覆核、新鮮度檢查、暫停 and 需要覆核. The operating model keeps Kevin review visible and gives partners small source-card tasks rather than service decisions.

## Approval Gates

| Gate | Required Before |
| --- | --- |
| Kevin instruction | Any public page update, commit, push, or production deployment |
| Kevin approval | Any private workboard using real records |
| Kevin approval | Any trial task sent to a real person |
| Kevin approval | Any source that requires login or internal access |
| Kevin approval | Any removal of noindex controls |

## No-op Rule

If no approved public-safe source or prototype change exists, record a no-op checkpoint with source_checked, proof_artifacts, decision, and next_retry_gate.

## Rollback

Revert the v1.4 commit or remove the v1.4 section and artifact links. The v1.3 line cards remain a valid baseline.

## Classification

Public-review prototype package. Not a case-management system. Not a private HR system. Not an eligibility decision system. Not autonomous outreach.
