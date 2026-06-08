# Governance Expansion Review Card v0.7

## What changed

v0.7 adds a fictional pilot run for the HR assessment workflow:

- Fictional candidate assessment record.
- P0-P7 pilot stage log.
- Pilot review rubric.
- Fictional pilot report.
- Updated public page links and production log.

## Why it is needed

The v0.6 workflow was structurally complete, but untested as a decision-support loop. v0.7 checks whether the artifacts produce a useful screening packet while preserving the rule that Kevin makes all real HR decisions.

## Original effect to preserve

The HR workflow must organize evidence and support planning without:

- using real personal data in public;
- making automatic hiring, rejection, or compensation decisions;
- connecting to the real workforce-war-room before a fresh private check;
- weakening public/internal/restricted boundaries.

## Owner agent

Primary owner: `workflow_designer`

Review support:

- `risk_guardian` for fictional-data and redaction boundaries.
- `engineering_reviewer` for JSON, CSV, scanner, and deployment checks.
- `taiwan_context_reviewer` for Traditional Chinese public-review clarity.

## Trigger

Use this pilot pattern when Kevin wants to test an HR evaluation flow before using real applicant or intern information.

## Should not do

This pilot must not:

- be treated as a real candidate result;
- become a recurring automation;
- write to global Agent OS memory;
- write to the real workforce-war-room;
- include real names, contacts, salary amounts, ID numbers, full addresses, bank data, mailbox URLs, local paths, or internal deployment identifiers.

## Proof that it worked

Required proof:

- Fictional assessment JSON can be parsed and matches required schema fields.
- Pilot stage log includes P0-P7.
- Rubric includes D1-D8 and weighted score.
- Redaction scanner returns pass with zero matches.
- Production site links to v0.7 artifacts.
- Stable URL returns noindex headers.

## Approval gates

| Gate | Requires Kevin approval |
| --- | --- |
| G1 | Fictional local pilot is allowed. |
| G2 | Public deployment and repo push require approval. |
| G3 | Any real HR decision, salary, offer, rejection, or personal-data processing requires Kevin. |

## Promotion decision

Status: keep as public-review pilot.

Next review: after Kevin decides whether to test a second fictional profile or prepare a private, fully de-identified internal sample.
