# Agent Discussion Summary v1.8

## Discussion Purpose

Decide how to execute v1.8 while also reducing the reading burden caused by the long public-review page.

## Required Decision

What should be added now, and how should the homepage structure change without losing historical proof?

## Selected Roles

| Agent role | Contribution |
| --- | --- |
| `task_router` | Classified the task as frontend + public production report + workflow artifact update. |
| `workflow_designer` | Recommended latest-first layout, version index, and collapsible full archive. |
| `frontend_qa` | Flagged scroll fatigue as a real usability issue, not just a content issue. |
| `data_analyst` | Recommended a weekly proof dashboard with status and source-quality labels. |
| `risk_guardian` | Kept account settings, private records, candidate data, and unverified claims out of public artifacts. |
| `strategy_convergence_editor` | Converged on two feature cards: measurement proof and impact metric tree. |
| `taiwan_context_reviewer` | Checked that labels such as 版本索引、完整歷史、證據狀態、人工覆核 fit Taiwan workplace reading habits. |

## Strong Signals

- The current page has become an archive, not just a homepage.
- v1.8 should be visible near the top because it is the current work area.
- Measurement proof and impact validation are the two most important proof gaps for moving from L2.5 toward L3.
- Weekly proof tracking should separate planned, proven, missing, fallback, no-op, and needs-review states.

## Useful Disagreement

- One view suggested creating real tabs. The adopted approach uses quick links, version index, and a collapsible archive first because it is safer for a static public-review page and preserves all historical anchors.
- One view suggested hiding old content entirely. The adopted approach keeps old content available in the archive and opens it when a legacy anchor is selected.

## Adopt Now

- Add two public-safe feature cards.
- Add weekly proof dashboard JSON and Sheet-ready CSV.
- Add latest-first page section.
- Add quick nav, version index, and collapsible full archive.

## Validate Next

- After deployment, verify desktop and mobile navigation.
- Ask whether Kevin wants the next iteration to become true tabbed pages or separate version pages.
- Validate whether the weekly proof dashboard should remain public-safe or get a private companion board.

## Pause

- Do not remove historical sections.
- Do not publish private estimate details.
- Do not connect real analytics accounts or production settings.
- Do not create a recurring automation until a few manual weekly runs prove useful.

## Proof Artifact

- `weekly/public-safe-feature-cards-v1.8.json`
- `weekly/weekly-proof-dashboard-v1.8.json`
- `workboards/weekly-proof-dashboard-v1.8.csv`
- `docs/site-information-architecture-plan-v1.8.md`
