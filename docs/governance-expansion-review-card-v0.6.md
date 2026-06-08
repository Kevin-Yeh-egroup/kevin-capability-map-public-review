# Governance Expansion Review Card v0.6

## What changed

v0.6 adds an implementation layer for HR assessment planning:

- Internal assessment pipeline specification.
- Machine-readable pipeline stage map.
- Public redaction scan script.
- First-partner hiring pack.
- Six-workflow task checklist template.
- Public redaction scan report.

## Why it is needed

Kevin needs a bridge between high-level capability planning and actual hiring / delegation operations. v0.6 turns the HR model into work packages that can be checked, assigned, reviewed, and safely published as a public noindex planning artifact.

## Owner agent

Primary owner: `workflow_designer`

Review support:

- `risk_guardian` for public/private/redaction boundaries.
- `engineering_reviewer` for script checks and production verification.
- `taiwan_context_reviewer` for Traditional Chinese wording and local operating reality.

## Trigger

Use this package when Kevin wants to evaluate a job applicant, intern, contractor, referral, or first-partner candidate against his actual operating needs.

## Should not do

This workflow must not:

- Decide hiring, rejection, salary, offer, or termination automatically.
- Publish real candidate, intern, contact, salary, ID, bank, address, mailbox, account, or local-session data.
- Treat AI-generated scores as final HR decisions.
- Modify the real workforce-war-room repo without a fresh repo-state check and explicit approval.
- Become a recurring automation before repeated manual runs prove useful.

## Proof that it worked

Required proof for this public artifact:

- JSON, CSV, Markdown, and script files are reachable from the Production site.
- `scripts/redaction-scan.mjs` runs successfully on the public package.
- Stable Vercel URL returns `200 OK`.
- HTML meta robots, `robots.txt`, and Vercel `X-Robots-Tag` remain noindex.
- GitHub main commit and Vercel deployment ID are recorded.

## Approval gates

| Gate | Requires Kevin approval |
| --- | --- |
| G1 | Turning templates into local drafts is allowed. |
| G2 | Public deployment, external messages, repo changes, or data export require approval. |
| G3 | Hiring, rejection, salary, offer, sensitive HR decision, or real personal-data handling require Kevin decision. |

## Durable source of truth

For now, this remains a public review artifact in `kevin-capability-map-public-review`.

The real operational source of truth remains the approved internal workforce-war-room workflow and its protected data boundaries.

## Promotion decision

Status: keep local to this review artifact.

Next review: after one fictional or fully de-identified pilot assessment has been completed and Kevin confirms whether the checklist matches how he wants to hire the first partner.
