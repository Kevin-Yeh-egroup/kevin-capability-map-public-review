# Governance Expansion Review Card v1.0

## Expansion

Add a v1.0 fictional content / research pilot and HR intel workboard package based on the v0.9 HR assessment schema.

## Why Needed

v0.9 formalized the schema, but Kevin still needed to see whether it can support a full candidate-style record and become an operational Notion / Google Sheets workboard.

## Owner Agent

`workflow_designer` owns the workboard structure.

`risk_guardian` owns public/private boundaries.

`engineering_reviewer` owns schema and artifact validation.

## Trigger

Use this package when Kevin wants to discuss content / research partner evaluation, HR workboard structure, trial tasks, feedback loops, or supervision load.

## Should Not Do

- Do not process real candidate data in this public repo.
- Do not send trial tasks.
- Do not make automated hiring, rejection, or compensation decisions.
- Do not connect to the real workforce-war-room without a private boundary check.
- Do not treat noindex as privacy.

## Proof

- `pilots/fictional-content-research-candidate-assessment-v1.0.json`
- `templates/content-research-trial-task-v1.0.md`
- `docs/fictional-content-research-pilot-report-v1.0.md`
- `docs/hr-intel-workboard-v1.0.md`
- `workboards/hr-intel-workboard-field-map.v1.0.csv`
- `reports/public-redaction-scan-report.v1.0.json`

## Approval Gates

| Gate | Required Before |
| --- | --- |
| Kevin approval | Any real candidate import. |
| Kevin approval | Sending trial tasks to a person. |
| Kevin approval | Any public export containing de-identified real records. |
| Kevin approval | Connecting this structure to workforce-war-room. |
| Kevin approval | Any compensation, offer, or employment decision workflow. |

## Source Of Truth

Local public artifact repo and production review page.

## Classification

Local public-review artifact. Not global workflow. Not automation. Not private HR system.

## Existing Effect Preserved

The existing public package helps Kevin explain his capability map and people architecture without exposing private data.

v1.0 preserves this by using only fictional data, keeping redaction scan proof, and leaving public export defaults false.

## Verification Method

- JSON record conforms to v0.9 structural requirements.
- Workboard CSVs contain no private data.
- Public redaction scan passes.
- Homepage links resolve.
- Production keeps noindex controls if published.

## No-op Rule

If no new fictional pilot or schema field changes are needed, do not regenerate the workboard. Update only after Kevin asks for a new role test, private boundary design, or weekly capability-map refresh.
