# Governance Expansion Review Card v0.9

## What changed

v0.9 promotes the v0.8 extension proposal into a formal schema package:

- `schemas/hr-assessment-v0.9.schema.json`
- `templates/hr-assessment-empty-record.v0.9.json`
- `templates/hr-assessment-sheet-template.v0.9.csv`
- `docs/schema-migration-v0.5-to-v0.9.md`
- v0.9 redaction scan report

## Why it is needed

Two fictional pilots showed that v0.5 could organize evidence, but lacked structured fields for role weighting, per-dimension confidence, trial tasks, feedback, supervision load, and redaction proof.

## Original effect to preserve

The HR workflow must remain an evidence organization and planning system. It must not:

- decide hiring, rejection, compensation, offer, or termination automatically;
- publish real personal data;
- touch the real workforce-war-room without a fresh private repo check and Kevin approval;
- become a global Agent OS workflow or automation merely because this schema exists.

## Owner agent

Primary owner: `workflow_designer`

Review support:

- `risk_guardian` for HR, salary, and redaction boundaries.
- `engineering_reviewer` for JSON, scanner, and deployment proof.
- `data_analyst` for role weighting and confidence interpretation.

## Trigger

Use v0.9 when a fictional or approved private de-identified HR assessment needs structured trial-task, feedback, supervision, and redaction-proof fields.

## Should not do

This schema must not be used to:

- set pay;
- rank real people publicly;
- auto-reject or auto-approve candidates;
- send trial tasks;
- collect contact details in public artifacts.

## Proof that it worked

Required proof:

- v0.9 schema parses and includes the formalized fields.
- v0.9 empty record parses and matches required top-level fields.
- v0.9 Sheet template includes the new field groups.
- Redaction scanner returns pass with zero matches.
- Production page links to v0.9 artifacts.
- Stable URL returns noindex headers.

## Approval gates

| Gate | Requires Kevin approval |
| --- | --- |
| G1 | Local schema and fictional/de-identified drafts are allowed. |
| G2 | Public deployment, external write, or repo push require approval. |
| G3 | Any real candidate, personal data, compensation, offer, rejection, or private data processing requires Kevin approval. |

## Promotion decision

Status: formal public-review schema, not a global automation.

Next review: after a content / research fictional candidate tests the third role template.
