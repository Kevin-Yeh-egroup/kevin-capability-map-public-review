# 社工公開資源查找與新鮮度卡 Prototype Brief v1.4

## 目的

v1.4 先把社工工具線中的「公開資源查找與新鮮度卡」做成可試作 prototype。

這不是個案系統，也不是服務資格判定工具。它只協助 Kevin、夥伴與 Codex 把公開可查的資源整理成可交辦、可覆核、可週更的資料卡。

## 為什麼先做這個模組

| 原因 | 說明 |
| --- | --- |
| 公開安全 | 可以只用公開來源、空白模板與虛構資料測試 |
| 夥伴可接 | 適合交給內容 / 研究夥伴做來源蒐集與缺欄標記 |
| Codex 可接 | 適合轉成 JSON、CSV、brief、QA checklist 與公開頁說明 |
| 自動化可接 | 適合先做連結、新鮮度、no-op 的 report-first 檢查 |
| 對 Kevin 有用 | 能減少「找資料、確認更新、整理缺欄」的重複工作 |

## 使用流程

| 步驟 | Owner | 輸入 | 輸出 | Done proof |
| --- | --- | --- | --- | --- |
| 定義資源主題 | Kevin 做 | 公開安全的服務情境或資源主題 | 主題、適用對象、優先理由 | brief 欄位已填 |
| 蒐集公開來源 | 夥伴做 | 公開網頁、公開簡章、公開服務說明 | source title、source URL、來源單位 | 每筆來源可回查 |
| 整理資料卡 | Codex 做 | 來源摘錄與缺欄 | resource card、missing fields、review questions | 欄位符合模板 |
| 人工覆核 | Kevin 做 | 資料卡與問題清單 | review status、risk note、next action | 已標記 ready / needs review / blocked |
| 新鮮度檢查 | 自動化 | 已核准資料卡 | freshness status、link status、no-op checkpoint | 有檢查日期與 proof |

## 資料卡欄位

| 欄位 | 用途 |
| --- | --- |
| resource_id | 資源卡穩定 ID |
| resource_topic | 資源主題 |
| source_title | 公開來源標題 |
| source_url | 公開來源 URL |
| source_owner | 公開來源單位 |
| intended_user_group | 公開資料中寫明的適用對象 |
| service_area | 公開資料中寫明的服務區域 |
| access_method | 公開資料中寫明的洽詢或使用方式 |
| last_seen_public | 本次檢查日期 |
| freshness_status | fresh / watch / stale / unknown |
| missing_fields | 公開資料看不出來的欄位 |
| review_questions | 需要 Kevin 或 reviewer 判斷的問題 |
| review_status | draft / needs_review / ready_public_safe / blocked_private |
| risk_boundary_note | 資訊整理，不是資格、醫療、法律或個案決策 |

## 夥伴試作題

### 任務

選一個公開安全主題，整理三筆公開來源，填入 resource card template，並列出缺欄與需要 Kevin 覆核的問題。

### 可使用資料

- 公開網頁。
- 公開簡章。
- 公開服務說明。
- 空白模板。

### 不可使用資料

- 私人個案資料。
- 私人訊息。
- 需要登入的內部頁面。
- 真人聯絡清單。
- 任何會讓夥伴替使用者做資格、法律、醫療或個案判斷的資料。

## 評估重點

| 面向 | 看什麼 |
| --- | --- |
| 公開來源能力 | 是否能提供可回查來源 |
| 白話整理能力 | 是否能把公開資訊整理成可讀摘要 |
| 缺欄意識 | 是否知道哪些資訊不能亂補 |
| 風險邊界 | 是否避免替使用者下判斷 |
| 可交辦程度 | 是否能讓 Kevin 快速覆核下一步 |

## 下一步

v1.5 可選三條路：

- 把這份 prototype 轉成 private Notion / Google Sheets 工作板選型草案。
- 做「一般民眾財務生活快照」prototype brief。
- 把新鮮度檢查變成 report-first automation candidate。
