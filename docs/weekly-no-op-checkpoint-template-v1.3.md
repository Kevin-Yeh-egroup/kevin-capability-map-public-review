# Weekly No-op Checkpoint Template v1.3

## 目的

每週更新不一定都要新增東西。好的 no-op 可以幫 Kevin 確認：

- 檢查過哪些來源。
- 為什麼這週不需要改公開頁。
- 哪些 private-only 或 approval-gated 項目沒有被誤推進。
- 下一次何時再檢查。
- 是否需要 redaction 或 production verification。

## 使用時機

| 狀態 | 使用方式 |
| --- | --- |
| 有 public-safe 新資訊 | decision = proceed，更新 artifacts 後跑 redaction 與 link check |
| 已檢查但沒有變動 | decision = no-op，記錄來源、proof 與 next retry gate |
| 卡在私人資料或外部動作 | decision = blocked，記錄 exact blocked step 與 approval gate |

## 欄位

| 欄位 | 用途 |
| --- | --- |
| checkpoint_id | 這次週更檢核的穩定 ID |
| coverage_window | 覆蓋的週期 |
| last_successful_checkpoint | 目前仍有效的最後版本或狀態 |
| session_state | 這次被要求檢查的內容 |
| project_context_state | repo、公開邊界、dashboard baseline |
| source_checked | 檢查過的公開安全來源或 artifact |
| changed_work_lines | 有變動的工作線，沒有則為空 |
| fallback_checks_completed | 來源無變動或不可用時做過的替代檢查 |
| proof_artifacts | 掃描、連結、報告或頁面 proof |
| decision | proceed / no-op / blocked |
| exact_blocked_step | blocked 時才填 |
| next_retry_gate | 下次何時或在什麼條件下再檢查 |
| public_update_needed | 是否需要公開頁更新 |
| redaction_required | 是否需要 public redaction scan |

## Notion / Google Sheets 欄位

可直接轉成工作板欄位：

- checkpoint_id
- coverage_window
- line_checked
- owner
- source_checked
- changed
- decision
- blocker_category
- proof_artifact
- next_retry_gate
- public_update_needed
- redaction_required

## No-op 範例

| 欄位 | 範例 |
| --- | --- |
| checkpoint_id | weekly-example-v1.3 |
| last_successful_checkpoint | v1.3 tool line cards published |
| source_checked | v1.3 line cards、no-op template、redaction scan |
| changed_work_lines | none |
| decision | no-op |
| next_retry_gate | next weekly refresh or Kevin-approved new material |
| public_update_needed | false |

## 邊界

No-op template 不能變成偷偷跑 private import 的理由。它只適合 report-first、read-only、公開安全檢查。任何真實候選人、人力情報、使用者資料、外部寄送、帳號操作，都要另行取得 Kevin approval。
