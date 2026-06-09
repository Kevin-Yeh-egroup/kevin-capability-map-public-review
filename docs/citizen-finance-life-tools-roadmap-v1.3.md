# 一般民眾財務優化生活工具 Roadmap v1.3

## 目的

把「一般民眾整理財務、優化生活」這條工作線，轉成產品與內容都能使用的 roadmap。

這條線的定位是教育、整理、提醒與求助路徑，不是個人化金融、法律、保險、借貸或福利決策工具。

## 需求

一般民眾常遇到的問題不是只有「錢夠不夠」，而是：

- 不知道自己的收入、支出、債務與生活壓力點如何整理。
- 不知道哪些資訊缺失會影響下一步判斷。
- 不知道哪些公開資源或諮詢路徑可以先查。
- 需要白話摘要與小步行動，而不是複雜專業術語。
- 需要知道何時應該找真人或專業協助。

## Roadmap

| 階段 | 目前規格 | 產出 | 風險邊界 |
| --- | --- | --- | --- |
| 財務生活快照 | 中立欄位整理收入穩定度、固定支出、可調整支出、壓力點與可用資源 | snapshot fields、缺資料清單、白話摘要 | 不給個人化金融建議 |
| 支出與債務整理器 | 用分類表與問題 queue 協助看懂壓力點 | category table、question queue、risk notice | 不自動判定還款或借貸策略 |
| 資源與行動清單 | 整理公開資源、諮詢路徑與下一步 | resource list、action checklist、follow-up schedule | 不代替申請或外部聯絡 |
| 知識蒐集與活用迴圈 | 把新知識、使用者問題與工具回饋變成每週改善清單 | learning backlog、content update、tool note | 不混入私人使用者資料 |

## 分工

| 工作 | Kevin 做 | 夥伴做 | Codex 做 | 自動化 |
| --- | --- | --- | --- | --- |
| 工具定位 | 定義語氣、限制與優先情境 | 提供使用者問題整理 | 轉成 PRD / prototype brief | 無 |
| 公開知識整理 | 判斷哪些主題值得做 | 摘要來源、日期、重點與限制 | 正規化、去重、產生白話版 | source freshness check |
| 情境卡與 FAQ | 選擇常見情境 | 初稿與欄位說明 | 產生測試案例與 QA checklist | no-op checkpoint |
| 工作板與週更 | 決定本週優先順序 | 補來源與標註缺口 | 更新 JSON / CSV / HTML | draft-only weekly summary |

## 可新增人力

| 角色 | 適合任務 | 評估方式 |
| --- | --- | --- |
| 內容 / 研究夥伴 | 公開資料摘要、白話改寫、FAQ 初稿 | v1.0 content / research trial pattern |
| 工具測試夥伴 | 依照情境走流程、標記卡住處 | prototype QA checklist |
| 資料整理夥伴 | source card、欄位補齊、更新日期標記 | source freshness rubric |

## 未來展望

v1.4 可以選一個階段做 prototype brief。建議從「財務生活快照」或「資源與行動清單」擇一，因為這兩者比較容易保持教育與整理定位，也比較適合在公開安全資料下試作。

若要接真實使用者資料，下一步必須是 private implementation，不應放在公開 repo。需要先設計同意、保存、刪除、人工覆核與高風險轉介規則。
