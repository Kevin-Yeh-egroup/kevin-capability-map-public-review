# Weekly Proof Dashboard v1.8

## 目的

這個 dashboard 把 v1.7 的 90 天路線改成每週可檢查的 proof board。它不是績效考核，也不是對外報告；它用來回答：

- 哪些 proof 已經有了？
- 哪些只是規劃？
- 哪些缺資料？
- 哪些需要 Kevin 核准？
- 哪些可以 no-op，不必重做？

## Status Labels

| 狀態 | 用法 |
| --- | --- |
| planned | 已列入下一步，但尚未開始。 |
| in_progress | 正在整理或驗證。 |
| proven | 已有 public-safe proof。 |
| blocked | 有明確阻塞，需要人或外部狀態改變。 |
| missing | 需要的資料尚未取得。 |
| needs_review | 需要 Kevin 或指定人審者判斷。 |
| no_op | 本週沒有 meaningful change，記錄即可。 |

## Source-quality Labels

| 來源品質 | 用法 |
| --- | --- |
| direct_read | 來源直接讀取且可驗證。 |
| redacted_summary | 有來源，但公開版只呈現去識別摘要。 |
| manual_review | 需要人工判斷或人工確認。 |
| fallback | 使用替代資料，不能當完整證據。 |
| missing | 應有資料不存在或尚未取得。 |
| not_applicable | 本項不是資料讀取問題。 |

## Weekly Rows

| Proof area | 本週用途 |
| --- | --- |
| P0 measurement proof | 確認事件 proof 是否從計畫變成 production-visible summary。 |
| Source-quality dashboard | 避免把 fallback 或 missing 誤解成完整資料。 |
| Meaningful action definition | 先定義有意義行動，再談 impact。 |
| Impact metric tree | 區分 goal、early signal、verified、needs method review。 |
| Growth experiments | 等 measurement proof 有基礎後再開始實驗。 |
| Partner trial task | 選低風險工作線，不碰真實候選人資料。 |
| Public site navigation | 檢查 v1.8 的最新優先與版本索引是否真的降低滑動負擔。 |

## 每週檢查問題

1. 這個 proof area 本週是否有變動？
2. 來源品質是 direct-read、redacted summary、manual review、fallback、missing，還是 not applicable？
3. 下一步是否需要 Kevin 核准？
4. 這個結果是否能公開顯示？
5. 如果沒有變動，是否應該記錄 no-op？

## Public-safe 邊界

- 不公開帳號 ID、container ID、private URL。
- 不公開真實使用者、個案、候選人或家庭資料。
- 不把 missing 當成 0。
- 不把未驗證 claim 寫成 verified proof。
- 不做 production、Ads、GTM、GA4 或外部發布變更。
