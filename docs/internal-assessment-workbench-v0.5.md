# Internal Assessment Workbench v0.5

This document describes the first implementation target for connecting Kevin's HR evaluation model to the human-intel / workforce-war-room system.

## Goal

Create an internal assessment layer that can accept applicant, intern, contractor, referral, or existing talent-pool records and produce evidence-based evaluation material for human review.

The system must not automatically hire, reject, rank, or set compensation.

## Minimum Viable Views

| View | Purpose | Public-safe |
| --- | --- | --- |
| Staging Queue | New applications, intern messages, and imported records awaiting normalization. | No |
| Evaluation Workbench | Role template, D1-D8 scores, evidence confidence, risk flags, and reviewer notes. | No |
| Talent Pool Kanban | Staging, needs review, shortlist, trial, active, paused, archived. | No |
| Workforce Planning | Aggregated gaps by role, month, availability, and task package. | Aggregated only |
| Redaction Preview | Shows exactly what would enter public JSON or public pages. | Yes, after pass |
| Restricted Compensation Review | Salary expectation, budget band fit, offer/payroll amount, final approver. | No |

## Data Flow

1. Staging
   - Import application forms, intern notes, existing work signals, or talent-pool records.
   - Store source references, not public private links.
2. Normalize
   - Extract role interest, availability, evidence items, skill tags, missing fields, and confidence level.
3. Safety filter
   - Exclude full address, national ID, bank data, private contact details, and non-job-related sensitive traits from scoring.
4. Evaluation run
   - Apply role-specific weights for first partner, technical automation partner, or content/research partner.
   - Keep risk flags separate from numeric score.
5. Human review
   - Record reviewer, decision reason, override reason, and next step.
6. Redacted public output
   - Export only aggregate counts, covered months, role supply, redaction flags, and planning summaries.

## Required Gates

| Gate | Trigger | Required owner |
| --- | --- | --- |
| G1 schema change | New field or changed scoring dimension | Kevin or HR owner |
| G2 public export | Any public JSON, page, chart, or deployment | Kevin approval |
| G3 compensation | Salary band, offer, payroll, exception, or negotiation note | Kevin or authorized compensation owner |
| G3 decision | Hire, reject, archive for cause, or high-impact label | Human reviewer |

## Redaction Checklist

Public outputs must fail if they include:

- Real name
- Phone
- Email
- Full address
- National ID
- Bank data
- Salary amount
- Offer or payroll amount
- Raw resume
- Interview notes
- Individual score
- Free-text comments that can identify a person

Public outputs may include:

- Aggregated talent counts
- Active/paused totals
- Anonymous role supply
- Skill distribution when not identifying
- Covered months
- `historyAmountsExcluded=true`
- Data freshness and redaction pass/fail

## Implementation Notes

- Keep existing `talent-pool.internal.json` as the internal base layer.
- Keep `interns.public.json` as the public-safe snapshot source.
- Add evaluation records as a separate `evaluation_runs` layer keyed by `person_id`.
- Do not write model output back into the raw source record without human review.
- Store `model_version`, `role_template_id`, `reviewer`, `decision_reason`, and `override_reason` with every evaluation.
