# Schema Migration v0.5 to v0.9

## Purpose

v0.9 formalizes the schema gaps discovered in v0.7 and v0.8. It keeps v0.5's evidence-first HR assessment structure, then adds fields needed before a real private pilot.

This migration guide is public-safe. It contains no real candidate, intern, contact, salary, mailbox, account, or private workforce-war-room data.

## What Changed

| Area | v0.5 | v0.9 |
| --- | --- | --- |
| Data safety marker | Implied by public notes. | Required `candidate_data_mode`. |
| Role weighting | Weighted score only. | Required `role_weight_context` with dimension weights and formula. |
| Evidence confidence | One record-level confidence. | Required `dimension_confidence` for D1-D8. |
| Trial task | Recommended next step only. | Required `trial_task_packet`. |
| Feedback | Free-text notes only. | Required `feedback_loop`. |
| Supervision load | Not represented. | Required `supervision_profile`. |
| Redaction proof | Scan status only. | Required `redaction_evidence` with scan report reference. |

## Migration Steps

1. Set `schema_version` to `0.9`.
2. Add `candidate_data_mode`.
3. Change `evaluation_run.model_version` to `hr-evaluation-v0.9`.
4. Add `evaluation_run.role_weight_context`.
5. Add `evaluation_run.dimension_confidence`.
6. Add `trial_task_packet`.
7. Add `feedback_loop`.
8. Add `supervision_profile`.
9. Add `redaction_status.redaction_evidence`.
10. Keep `redaction_status.public_allowed=false` unless Kevin explicitly approves a public export.

## Recommended Defaults

For public review or fictional pilots:

- `candidate_data_mode`: `fictional`
- `record_classification`: `public_review`
- `trial_task_packet.send_status`: `not_prepared` or `private_draft`
- `feedback_loop.improved_after_feedback`: `not_tested`
- `supervision_profile.allowed_gates`: `G0`, `G1`
- `redaction_status.public_allowed`: `false`
- `redaction_status.redaction_evidence.public_export_allowed`: `false`

## v0.9 Decision

v0.9 is now the formal public-review schema. It is still not connected to the real workforce-war-room, and it does not create any automation or HR decision authority.

The next sensible test is a content / research fictional candidate to make sure the third role template also works before any private real-data pilot.
