# HR Intel Workboard v1.0

## Purpose

Turn the v0.9 HR assessment record into an operational workboard Kevin can use for future people planning.

This public version is a template and fictional pilot. It does not connect to the real workforce-war-room and does not contain real people data.

## Views

| View | Main Question | Source |
| --- | --- | --- |
| Candidate Pipeline | Who is in which review stage? | `workboards/hr-intel-workboard-candidates.v1.0.csv` |
| Trial Tasks | What must be tested before any decision? | `workboards/hr-intel-workboard-trial-tasks.v1.0.csv` |
| Feedback Loop | Did the person improve after review? | `workboards/hr-intel-workboard-feedback.v1.0.csv` |
| Supervision | Will this person reduce or increase Kevin's load? | `workboards/hr-intel-workboard-supervision.v1.0.csv` |
| Field Map | How should Notion / Google Sheets columns be created? | `workboards/hr-intel-workboard-field-map.v1.0.csv` |

## Notion Setup

Create five databases or five linked views:

1. Candidate Pipeline.
2. Trial Tasks.
3. Feedback Loop.
4. Supervision.
5. Field Map.

Use `record_id` as the shared key. In a real private workspace, `record_id` can become a relation key, but public review examples must stay fictional.

Recommended Notion property types:

- Select: role, stage, status, planning value, send status, supervision load, handoff phase.
- Multi-select: risk flags, expected proof, stop conditions, allowed gates, not allowed tasks.
- Number: weighted score, available hours, revision count.
- Checkbox: public allowed, public export allowed.
- Text: reviewer notes ref and source refs.

## Google Sheets Setup

Import each CSV as a tab:

1. `Candidates`
2. `Trial_Tasks`
3. `Feedback`
4. `Supervision`
5. `Field_Map`

Recommended sheet behavior:

- Freeze the header row.
- Add filters to every tab.
- Use data validation lists for role, stage, send status, feedback improvement, supervision load, and handoff phase.
- Use conditional color only for review status and risk flags.
- Keep reviewer notes as references, not private message text.

## Operating Rules

| Rule | Why |
| --- | --- |
| Scores are planning signals only. | Avoid automated HR decisions. |
| Trial tasks must have stop conditions. | Prevent accidental sensitive or external work. |
| Feedback loop is required before stronger delegation. | Skill without trainability may still increase Kevin's load. |
| Supervision load must be visible. | Hiring should reduce bottlenecks, not hide them. |
| Public export defaults to false. | noindex is not privacy protection. |

## v1.0 Result

The v1.0 pilot proves that v0.9 fields can be turned into a practical workboard structure.

It is ready for template discussion. It is not ready for real candidate data until Kevin approves a private-only implementation boundary.
