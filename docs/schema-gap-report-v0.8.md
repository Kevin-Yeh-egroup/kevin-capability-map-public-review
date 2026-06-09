# Schema Gap Report v0.8

## Purpose

v0.8 compares two fictional pilots:

- Fictional Candidate A: first-partner operations support.
- Fictional Candidate B: technical automation support.

The goal is to test whether the current HR assessment schema can distinguish role fit, evidence confidence, and next-step risk without touching real applicant or intern data.

## Main Finding

The v0.5 schema is good enough for a public-safe screening packet, but not yet enough for a real internal assessment workflow.

It can hold:

- Person-like record metadata.
- Evidence summary.
- D1-D8 draft scores.
- Weighted score.
- Decision owner.
- Redaction status.

It does not yet hold enough structured data for:

- role-specific score provenance;
- trial-task assignment;
- feedback and revision evidence;
- supervision load;
- per-dimension confidence;
- redaction proof references.

## Candidate Comparison

| Candidate | Role template | Weighted score | Main signal | Main risk | Next step |
| --- | --- | ---: | --- | --- | --- |
| Fictional Candidate A | first_partner | 3.93 | Structured operations and approval-gate awareness. | No real trial proof; domain depth unproven. | Controlled operations trial. |
| Fictional Candidate B | technical_automation | 4.00 | Automation design, JSON review, and redaction testing. | Kevin work-line context and communication need testing. | Non-production technical trial. |

## Gaps Discovered

| Gap | Why it matters | v0.9 direction |
| --- | --- | --- |
| No explicit fictional/de-identified marker | Public pilots need a machine-readable safety marker. | Add `candidate_data_mode`. |
| Score weights are outside the record | A weighted score cannot be audited without knowing the role-weight table. | Add `role_weight_context`. |
| Confidence is only record-level | D7 may be high-confidence while D1 is low-confidence. | Add `dimension_confidence`. |
| Trial task is only a next-step enum | Both pilots need task scope, proof, stop rules, and due policy. | Add `trial_task_packet`. |
| Trainability lacks structured evidence | D5 should improve or decline after feedback, not stay as a guess. | Add `feedback_loop`. |
| Supervision load is not represented | A technically strong person can still increase Kevin's coordination burden. | Add `supervision_profile`. |
| Redaction proof is not linked | `sensitive_field_scan=pass` should point to a concrete scan report. | Add `redaction_evidence`. |

## Decision

Do not replace the v0.5 schema yet.

Use `schemas/hr-assessment-v0.8-extension-proposal.json` as a schema extension proposal and test it with one more fictional or private de-identified pilot before creating a formal v0.9 schema.

## What This Means For Hiring

The model is starting to separate:

- first-partner operations fit;
- technical automation fit;
- candidate promise;
- evidence confidence;
- redaction safety;
- actual authority to decide.

This is useful because Kevin may need more than one partner type. A high technical score should not automatically become first-partner fit, and a strong operations trial should not automatically imply technical ownership.

## Safety Note

Both pilots are fictional. No real person, contact detail, salary amount, mailbox content, internal account, local path, or production secret is included.
