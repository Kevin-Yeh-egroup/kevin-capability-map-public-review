# Internal Assessment Pipeline v0.6

This is the first executable design layer for connecting Kevin's HR evaluation model with the human-intel / workforce-war-room operating system.

It is intentionally public-safe. It defines stages, gates, owners, and proof requirements, but does not include real applicant data, intern records, contact details, salary amounts, or internal account identifiers.

## Goal

Create an internal assessment layer that can receive applicant, intern, contractor, referral, or existing talent-pool records and turn them into human-reviewable evidence packs.

The system must help Kevin decide, not decide for Kevin.

## Pipeline Stages

| Stage | Name | Purpose | Default owner | Output | Gate |
| --- | --- | --- | --- | --- | --- |
| P0 | Intake staging | Accept a new form, resume summary, intern note, referral, or existing talent-pool reference. | Partner | Staging record with source type and consent scope. | G1 |
| P1 | Source normalization | Convert input into the v0.5 assessment schema fields. | Codex + Partner | Normalized internal record. | G1 |
| P2 | Evidence extraction | Extract work signals, portfolio references, availability, risk flags, and missing data. | Codex | Evidence summary with confidence level. | G1 |
| P3 | Draft scoring | Create D1-D8 draft scores with reasons and unknown fields. | Codex | Draft evaluation run. | G1 |
| P4 | Human review | Kevin or assigned reviewer confirms, overrides, or requests more evidence. | Kevin | Reviewed decision record. | G3 for hiring, rejection, salary, or offer. |
| P5 | Trial assignment | Assign a controlled trial task or checklist. | Partner + Kevin | Trial brief, due date, proof expected. | G2 if external message is sent. |
| P6 | Decision archive | Record final next step and why. | Kevin | Decision record and retention plan. | G3 |
| P7 | Public redaction | Produce public-safe summary or no-op. | Automation + Codex | Redaction scan report. | G2 |

## Inputs

| Input | Allowed in public artifact | Internal use | Restricted use |
| --- | --- | --- | --- |
| Public alias | Yes, if irreversible | Yes | No |
| Source type | Aggregated only | Yes | No |
| Availability | Aggregated or categorized | Yes | No |
| Skill tags | Aggregated or de-identified | Yes | No |
| Work-history signals | Aggregated only | Yes | No |
| Contact details | No | Reference key only | Yes |
| Real name | No | Reference key only | Yes |
| Salary amount | No | No public export | Human review only |
| Full address, ID, bank data | No | No | Restricted only when legally required |

## Owner Split

| Work | Kevin | Partner | Codex | Automation |
| --- | --- | --- | --- | --- |
| Define role need | Accountable | Consulted | Draft options | No |
| Intake checklist | Approves template | Runs checklist | Creates missing-field table | Can detect new rows |
| Evidence pack | Reviews | Collects source proof | Summarizes and structures | Can validate schema |
| D1-D8 scoring | Final reviewer | Adds observations | Drafts score reasons | Can calculate weighted score |
| Trial task | Approves | Coordinates | Drafts task and rubric | Can track due date |
| Hiring, rejection, salary, offer | Decides | No final authority | No final authority | No final authority |
| Public redaction | Approves publication | Reviews redaction preview | Scans and explains findings | Can fail build on sensitive matches |

## Data Contract

The pipeline uses:

- `schemas/hr-assessment-v0.5.schema.json` as the assessment record structure.
- `templates/hr-assessment-empty-record.v0.5.json` as the safe blank record.
- `templates/hr-assessment-sheet-template.v0.5.csv` as the Sheet-ready field map.
- `workflows/internal-assessment-pipeline.v0.6.json` as the machine-readable stage and gate map.

## Minimum Done Proof

Every assessment record must have:

1. Source type and intake date.
2. Consent scope or unknown marker.
3. Evidence confidence level.
4. D1-D8 score reasons or unknown markers.
5. Risk flags separated from average score.
6. Human reviewer and decision owner.
7. Redaction status with `public_allowed=false` by default.
8. No salary amount, contact detail, full address, ID, bank data, mailbox URL, local path, token, or internal deployment identifier in public exports.

## No-op Rule

If source consent is unknown, evidence is too thin, or redaction scan fails, the pipeline should stop at a staging record and produce a blocked checkpoint instead of creating a public artifact or decision recommendation.

## Expansion Review

This v0.6 pipeline is a local public-review artifact. It is not yet a global Agent OS workflow, not yet an automation, and not yet connected to the real workforce-war-room data source.
