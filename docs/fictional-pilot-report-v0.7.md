# Fictional Pilot Report v0.7

## Purpose

This pilot tests whether Kevin's HR assessment workflow can turn a candidate-like input into a decision-ready evidence pack without using real personal data.

The candidate is fully fictional. No real applicant, intern, contractor, referral, contact detail, compensation information, mailbox content, or internal account identifier is included.

## Pilot Result

The workflow produced a useful screening packet, but not a hiring decision.

Recommended next step: controlled trial task.

Decision status: manual review required.

## What The Pilot Proved

| Question | Result | Note |
| --- | --- | --- |
| Can the v0.5 schema hold a candidate-like record? | Pass | Required fields, D1-D8 scores, decision record, and redaction status are present. |
| Can P0-P7 produce checkpoint proof? | Pass | Each stage has owner, resolution, done proof, and next gate. |
| Can the model avoid automatic HR decisions? | Pass | Final decision remains `manual_review_required`. |
| Can low-confidence evidence be separated from score? | Pass | Confidence is C and risk flags are outside the weighted score. |
| Can the public package stay redacted? | Pass | Redaction scanner reports zero sensitive matches. |

## Fictional Candidate Summary

Fictional Candidate A appears suitable for a first-partner trial focused on structured operations support, evidence summaries, and redaction review.

The strongest fictional signals are:

- Checklist completion.
- Short decision-oriented communication.
- Respect for approval gates.
- Ability to work with Codex-generated tables and checklists.

The weakest fictional signals are:

- No real trial proof.
- No Kevin interview notes.
- Domain depth remains unproven.
- Reliability is simulated, not observed.

## Draft Score

| Dimension | Score | Interpretation |
| --- | ---: | --- |
| D1 Work-line understanding | 3.4 | Understands the work shape, but needs live context. |
| D2 Execution reliability | 4.1 | Strong simulated checklist completion. |
| D3 Evidence quality | 3.8 | Good structure, but confidence remains low. |
| D4 Communication | 4.0 | Clear enough for review. |
| D5 Trainability | 4.2 | Likely trainable if feedback loop is tight. |
| D6 Risk gate awareness | 4.5 | Strong stop-before-sensitive-action behavior. |
| D7 Codex collaboration | 3.3 | Promising but still early. |
| D8 Role depth | 3.0 | Needs a domain-specific trial. |
| Weighted score | 3.93 | Planning signal only. |

## Decision Guidance

Do:

- Invite a controlled trial task if Kevin wants to keep evaluating this profile type.
- Use the v0.6 first-partner hiring pack as the trial structure.
- Require done / blocked / no-op proof.
- Review redaction behavior before any public or people-related task.

Do not:

- Treat this as a real candidate evaluation.
- Use the weighted score to decide hiring, rejection, or compensation.
- Publish real candidate records.
- Connect this pilot to the real workforce-war-room without a fresh private repo check and approval.

## Suggested Trial Task

Ask the candidate to complete two low-risk tasks:

1. Turn one workflow into trigger, source of truth, owner, gate, done proof, and no-op rule.
2. Review a public-safe sample artifact and mark what must be removed before publishing.

Pass condition:

- Output is structured, short, and reviewable.
- Missing fields are named instead of invented.
- Sensitive action is escalated.
- Candidate can revise after feedback.

## v0.8 Recommendation

Next, run the same pilot with either:

- another fictional candidate profile with different strengths, or
- a private, fully de-identified internal sample that Kevin explicitly approves.
