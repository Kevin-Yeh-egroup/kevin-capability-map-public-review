# Fictional Content Research Pilot Report v1.0

## Purpose

This pilot tests the v0.9 HR assessment schema with the third role template: `content_research`.

The candidate is fully fictional. No real applicant, intern, contractor, referral, contact detail, compensation information, mailbox content, account identifier, or private workforce-war-room data is included.

## Pilot Result

The v0.9 schema can hold a complete content / research partner evaluation packet.

Recommended next step: controlled trial task.

Decision status: manual review required.

## What This Pilot Tested

| Area | Result | Note |
| --- | --- | --- |
| v0.9 required fields | Pass | Candidate mode, role weights, dimension confidence, trial task, feedback loop, supervision, and redaction proof are present. |
| Third role template | Pass | `content_research` can use a different weight mix from first partner and technical automation. |
| Trial task packet | Pass | Scope, due policy, proof, stop conditions, send status, and result ref are explicit. |
| Feedback loop | Pass | Revision count, feedback summary, improvement status, and reviewer note ref are represented. |
| Supervision profile | Pass | Management load, allowed gates, forbidden tasks, and handoff phase are visible. |
| Public safety | Pass | Record remains fictional, public_allowed remains false, and redaction scan is required. |

## Fictional Candidate Summary

Fictional Candidate C is a planning signal for a content / research partner who could help Kevin with:

- Public-safe resource briefs.
- Source tables and freshness notes.
- Tool or article research packets.
- Social-work and citizen-facing knowledge organization.
- Converting messy research into checklists that Kevin can assign or review.

The strongest fictional signals are:

- Evidence quality.
- Plain-language synthesis.
- Source-date awareness.
- Ability to separate facts, interpretation, and missing fields.

The weakest fictional signals are:

- Delivery reliability is still simulated.
- Codex prompting ability is promising but untested.
- Feedback behavior has only one simulated revision.
- No real timed trial has been completed.

## Draft Score

| Dimension | Weight | Score | Confidence | Interpretation |
| --- | ---: | ---: | --- | --- |
| D1 Work-line understanding | 16 | 4.2 | B | Understands research as support for Kevin's planning and tool workflows. |
| D2 Execution reliability | 8 | 3.6 | C | Needs a timed trial before becoming dependable. |
| D3 Evidence quality | 16 | 4.5 | A | Strong fictional signal for source tables and missing-field handling. |
| D4 Communication | 17 | 4.3 | B | Produces decision-ready summaries in the fictional sample. |
| D5 Trainability | 10 | 4.0 | C | Simulated revision improved, but evidence is thin. |
| D6 Risk gate awareness | 12 | 4.1 | B | Names stop conditions and public-safety boundaries. |
| D7 Codex collaboration | 6 | 3.4 | C | Could use prompts and checklists, but needs a real workflow test. |
| D8 Role depth | 15 | 4.4 | B | Strong fit for content / research support. |
| Weighted score | 100 | 4.17 | B | Planning signal only. |

## Trial Task Learning

The new `trial_task_packet` field is useful because it separates four things Kevin needs to see before involving a partner:

- What exactly the person should do.
- What proof is required.
- What must stop the work.
- Whether the task is only drafted or actually approved to send.

For this fictional candidate, `send_status=private_draft`, meaning no real candidate action happens from the public package.

## Feedback Loop Learning

The `feedback_loop` field makes the record more useful than a one-time score. It shows whether the person can improve after Kevin or Codex gives review notes.

For this fictional candidate, one simulated revision improved structure, but the record still requires a real timed trial before any internal use.

## Supervision Learning

The `supervision_profile` field translates fit into management reality:

- Current supervision load: medium.
- Allowed gates: G0 and G1 only.
- Handoff phase: 30 days.
- Forbidden tasks: real applicant contact, compensation or offer work, private account access, production data writes, and unsupervised public publishing.

This helps Kevin avoid hiring for skill alone when the person may still increase coordination load.

## Workboard Result

The v1.0 workboard converts the v0.9 record into operational views:

- Candidate pipeline.
- Trial tasks.
- Feedback loop.
- Supervision and handoff.
- Field map for Notion / Google Sheets setup.

## Decision Guidance

Do:

- Use the candidate as a fictional test case for content / research partner planning.
- Use the trial task template before any real evaluation.
- Keep public artifacts fictional or de-identified.
- Require human review for all final decisions.

Do not:

- Treat the weighted score as a hiring decision.
- Use the public package for real candidate records.
- Add private workforce-war-room details to this repo.
- Let the workboard make automated HR or compensation decisions.

## v1.1 Recommendation

Next, keep the public package as a template and design a private-only import path for real records after checking the actual workforce-war-room repo boundary.
