# Weekly Capability Map Update Workflow v1.1

## Purpose

Give Kevin a weekly way to refresh the visual capability map and work-line explanations without rebuilding the whole artifact from scratch.

## Trigger

Run weekly, or whenever Kevin asks to update the capability map.

## Source Order

1. Public repo artifacts.
2. `PUBLIC_PRODUCTION_LOG.md`.
3. Safe git history.
4. Public-safe memory summary.
5. Kevin-approved private notes only when explicitly provided.

## Steps

1. Gather new evidence.
2. Classify changes into existing work lines.
3. Create a new work line only when an existing line cannot reasonably hold the work.
4. For each changed line, update demand, current spec, current artifact, future outlook, and division of work.
5. Update the visual map only when the capability structure changed.
6. Run public redaction scan.
7. Produce a checkpoint card.
8. If public site changes are needed, prepare the change list and wait for Kevin approval before external write actions.

## Required Output

| Output | Required |
| --- | --- |
| Changed work lines | Yes |
| Capability node changes | Yes |
| Demand / current spec / future outlook | Yes |
| Kevin / partner / Codex / automation split | Yes |
| Public boundary check | Yes |
| Next-week candidates | Yes |
| No-op statement | When nothing changed |
| Redaction scan | Before any public update |

## No-op Rule

If no reliable new material exists, do not invent progress.

Return a verified no-op with:

- Sources checked.
- Last successful checkpoint.
- Why no update is needed.
- Next retry gate.

## Approval Gates

Kevin approval is required before:

- Public site update.
- Git commit and push.
- Vercel deployment.
- Importing real people data.
- Connecting to the real workforce-war-room.
- Creating or sending any HR trial task.
- Publishing any de-identified real record.

## Owner Split

| Owner | Role |
| --- | --- |
| Kevin | Direction, final priority, sensitive decisions. |
| Partner | Source collection, first-draft summaries, low-risk checklist work. |
| Codex | Drafting, structuring, validation, redaction scan, artifact packaging. |
| Automation | Weekly draft, no-op checks, reminder, source inventory. |

## Checkpoint Card

Use these fields:

- `last_successful_checkpoint`
- `session_state`
- `project_context_state`
- `exact_blocked_step`
- `fallback_checks_completed`
- `proof_artifacts`
- `decision`
- `next_retry_gate`

Allowed decisions:

- `proceed`
- `no-op`
- `blocked`
