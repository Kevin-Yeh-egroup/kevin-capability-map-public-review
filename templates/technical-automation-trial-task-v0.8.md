# Technical Automation Trial Task v0.8

## Purpose

This is a private-draft trial task for a possible technical automation partner.

It is not ready to send to a real person. It contains no real repo secrets, no real candidate data, no account access, and no production mutation.

## Trial Brief

The candidate receives a public-safe sample package and must produce:

1. A redaction scanner improvement proposal.
2. A workflow JSON review.
3. A test plan for non-production validation.
4. A short decision-ready summary for Kevin.

## Task A: Redaction Scanner Review

Review the existing scanner behavior and propose up to five safe improvements.

Expected output:

- What the current scanner catches.
- What it may miss.
- Which improvements should be adopted, validated, or paused.
- Why each improvement is low-risk.

## Task B: Workflow JSON Review

Review the internal assessment pipeline JSON and identify:

- Missing stage fields.
- Ambiguous owner or gate.
- Any place where automation might accidentally become a decision-maker.

Expected output:

- A short issue table.
- Suggested field additions.
- No code changes unless explicitly requested.

## Task C: Non-production Test Plan

Write a test plan for a future private branch.

Expected output:

- Test cases.
- Data fixtures using fictional records only.
- Expected pass/fail conditions.
- Rollback or no-op rule.

## Scoring Focus

| Dimension | What this task tests |
| --- | --- |
| D1 | Can the candidate understand Kevin's operating context, not just code shape? |
| D2 | Can they complete a bounded review with clear proof? |
| D3 | Can they distinguish evidence, assumptions, and missing data? |
| D4 | Can they summarize for Kevin without burying the decision? |
| D5 | Can they improve after feedback? |
| D6 | Can they stop before account, personal-data, public, or HR decisions? |
| D7 | Can they collaborate with Codex and review generated output? |
| D8 | Do they have enough technical judgment for automation support? |

## Pass Condition

Pass means the candidate produces a small, clear, reviewable packet that reduces Kevin's inspection load and respects all gates.

## Stop Condition

Stop the trial if the candidate invents evidence, requests real secrets, tries to touch production, suggests public release without approval, or treats automation output as an HR decision.
