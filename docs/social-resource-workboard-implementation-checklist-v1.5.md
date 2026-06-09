# 社工資源卡工作板導入檢核 v1.5

## 目的

這份檢核表協助 Kevin 決定什麼時候可以把 v1.4 的資源卡 prototype 轉成 private Google Sheets 工作板。

本版只提供公開安全草案，不建立真實工作板、不匯入資料、不串外部通知。

## 導入前檢查

| 檢查 | 通過標準 |
| --- | --- |
| 工具選型 | Kevin 同意 Sheets-first，Notion later |
| 資料邊界 | 工作板是 private，公開 repo 只放空白模板 |
| 權限 | 只有 Kevin 與核准夥伴可存取 |
| 欄位 | Resource_Cards、Source_Checks、Review_Queue、No_Op_Checkpoints 等分頁已確認 |
| 試作資料 | 初期只用空白或虛構資料；公開來源 trial 需另外核准 |
| stop condition | 需要登入、私人資料、服務判斷、外部聯絡時暫停 |
| no-op rule | 沒變動時寫 no-op checkpoint，不製造假進度 |

## 建立順序

1. 建立 private blank Google Sheets。
2. 建立 `Dashboard`、`Resource_Cards`、`Source_Checks`、`Review_Queue`、`Partner_Tasks`、`Freshness_Log`、`No_Op_Checkpoints`、`Governance` 分頁。
3. 匯入 v1.5 fields CSV 的欄位。
4. 先放空白列或虛構列測試欄位。
5. Kevin review 欄位名稱與權限。
6. 才決定是否讓夥伴用公開來源試填。

## 不可跳過

- 不可直接匯入真實個案。
- 不可把 private Sheet 公開分享。
- 不可讓夥伴看到未核准私人資料。
- 不可自動寄送提醒或通知外部人。
- 不可把 noindex 當作隱私控制。

## Notion Later 條件

Notion 可以在下列條件成立後再考慮：

- Sheets 欄位已穩定至少一個 review cycle。
- Kevin 需要卡片式 review 或夥伴討論視圖。
- 權限與資料邊界已經在 private board 內確認。

## v1.5 結論

目前最小可行下一步不是馬上做漂亮看板，而是先建立 private blank Sheets workboard 的欄位骨架。Notion 應該是第二層視圖，不是第一個 source of truth。
