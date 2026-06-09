# Governance Expansion Review Card v1.3

## Expansion

Add detailed line cards for:

- Social-worker tools.
- Citizen finance-life tools.
- Weekly no-op checkpoint template.

## Why Needed

v1.2 identified these as next-week candidates. v1.3 turns them into concrete public-safe artifacts that can be used for weekly planning, partner discussion, and future private implementation design.

## Original Effect To Preserve

The weekly capability map should help Kevin explain what he has built, plan future work, and decide what can be delegated without exposing private records or turning public pages into operational databases.

## Owner Agents

- `workflow_designer`: line-card structure, task decomposition, weekly update rules.
- `doc_scribe`: readable notes for Kevin and collaborators.
- `risk_guardian`: public/private boundary, noindex reminder, approval gates.
- `data_analyst`: CSV / Notion / Sheets workboard shape.
- `engineering_reviewer`: repo, link, redaction, and production verification.
- `frontend_qa`: public page readability and artifact entry points.

## Trigger

Use v1.3 when Kevin wants to:

- Explain the social-worker tool line.
- Explain the general citizen finance-life tool line.
- Plan weekly work with no-op checkpoints.
- Split work into Kevin / partner / Codex / automation lanes.
- Prepare future private implementation without touching private data yet.

## Should Not Do

- Do not include real social-work case records.
- Do not include real user financial records.
- Do not include real candidate data or contact details.
- Do not include compensation amounts.
- Do not make financial, legal, welfare, medical, or diagnostic decisions.
- Do not contact people or send trial tasks without explicit approval.
- Do not remove noindex controls.

## Proof

- `weekly/social-worker-tools-line-card-v1.3.json`
- `docs/social-worker-tools-line-card-v1.3.md`
- `weekly/citizen-finance-life-tools-roadmap-v1.3.json`
- `docs/citizen-finance-life-tools-roadmap-v1.3.md`
- `weekly/weekly-no-op-checkpoint-template-v1.3.json`
- `docs/weekly-no-op-checkpoint-template-v1.3.md`
- `weekly/tool-line-cards-v1.3.csv`
- `assets/tool-line-roadmap-v1.3.svg`
- `reports/public-redaction-scan-report.v1.3.json`

## Approval Gates

| Gate | Required Before |
| --- | --- |
| Kevin instruction | Any public page update, commit, push, or production deployment |
| Kevin approval | Any private workboard using real records |
| Kevin approval | Any trial task sent to a real person |
| Kevin approval | Any public export from de-identified real records |
| Kevin approval | Any removal of noindex controls |

## No-op Rule

If a weekly run finds no approved public-safe change, record a verified no-op checkpoint with source_checked, proof_artifacts, decision, and next_retry_gate. Do not create fake progress.

## Classification

Public-review planning artifacts. Not a private HR system. Not a case-management system. Not a financial advice tool. Not an autonomous decision system.
