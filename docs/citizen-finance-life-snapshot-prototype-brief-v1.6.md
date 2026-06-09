# 一般民眾財務生活快照 Prototype Brief v1.6

## 目的

v1.6 把「一般民眾財務生活工具」中的第一個模組做成 public-safe prototype：財務生活快照。

它的定位是教育、整理、提醒與求助路徑，不是個人化金融建議，不替使用者做投資、借貸、保險、法律或福利資格判斷。

## 為什麼先做快照

| 原因 | 說明 |
| --- | --- |
| 公開安全 | 可先用空白模板與虛構情境測試 |
| 對民眾好懂 | 先看狀態、缺資料與下一步，不需要複雜術語 |
| 夥伴可協助 | 內容 / 研究夥伴可整理官方公開教育資料與情境卡 |
| Codex 可協助 | 可轉成 JSON、CSV、QA checklist、摘要模板與頁面說明 |
| 風險可控 | 高風險狀態只導向人工覆核或求助，不輸出自動決策 |

## 安全定位

這個 prototype 可以做：

- 整理生活情境。
- 用狀態標籤整理收入穩定度、支出壓力、債務壓力、緊急預備狀態與可用資源。
- 列出缺資料。
- 產生白話摘要。
- 標記安全下一步。
- 指向公開金融教育、金融消費評議或真人協助路徑。

這個 prototype 不做：

- 不收真實財務紀錄。
- 不公開任何實際金額、帳號或私人訊息。
- 不推薦金融商品。
- 不判斷應不應借款、投資、投保或還款。
- 不判斷福利資格。
- 不自動聯絡外部單位。

## 使用流程

| 步驟 | Owner | 輸入 | 輸出 | Done proof |
| --- | --- | --- | --- | --- |
| 設定生活情境 | Kevin 做 | 空白或虛構情境 | context label、life stage、priority question | 情境不含私人細節 |
| 整理快照欄位 | 使用者 / 夥伴做 | 空白欄位 | status labels、missing info | 欄位不用實際金額 |
| 產生白話摘要 | Codex 做 | 快照欄位與缺資料 | summary、review questions | 摘要非建議、非推銷 |
| 標記下一步 | Kevin 做 | 摘要與問題 | safe next step、risk boundary | 下一步是整理、查詢、求助或人工覆核 |
| 知識與 no-op 檢查 | 自動化 | 官方公開來源與模板 | source checked、changed fields、no-op | 無變動時可 no-op |

## 快照欄位

| 欄位 | 用途 |
| --- | --- |
| context_label | 用一句話描述公開安全情境 |
| income_stability | stable / variable / interrupted / unknown |
| fixed_expense_pressure | low / watch / high / unknown |
| flexible_expense_room | some / limited / none / unknown |
| debt_pressure | none / watch / high / unknown |
| emergency_buffer_status | some / limited / none / unknown |
| life_event_pressure | none / watch / high / unknown |
| support_resources_to_check | 可查詢的公開資源或諮詢路徑 |
| missing_info | 還需要補的資訊 |
| safe_next_step | organize records / check public resources / ask professional help / pause for human review |
| risk_boundary_note | 教育與整理，不是個人化建議 |

## 官方參考來源

本版參考公開官方資源的定位方式：

- 金融監督管理委員會金融智慧網。
- 金融智慧網生活指南。
- 財團法人金融消費評議中心。

這些來源只用來協助定位金融教育、風險意識與申訴 / 諮詢路徑，不用來替個別使用者做判斷。

## 夥伴試作題

選一個虛構情境，填一份財務生活快照，列出缺資料、白話摘要與安全下一步。

夥伴不需要也不應該做：

- 判斷是否借款。
- 判斷如何還款。
- 推薦投資、保險或金融商品。
- 判斷福利資格。
- 聯絡外部單位。

## 下一步

v1.7 可以把這份快照與社工資源卡擇一，做成 public-safe partner trial task packet。若 Kevin 想建立 private blank Google Sheets workboard 或 report-first automation，則需要另行核准。
