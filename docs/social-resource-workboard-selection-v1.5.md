# 社工資源卡工作板選型草案 v1.5

## 結論

建議先用 Google Sheets 做 private workboard 的 source of truth，Notion 先不要急著當主資料庫。

Notion 可以等欄位穩定後再做閱讀、討論或看板視圖。這樣比較符合目前需求：先把公開資源卡、來源檢查、缺欄、人工覆核與 no-op checkpoint 做穩，再決定是否需要更漂亮的管理介面。

## 為什麼是 Sheets-first

| 判斷點 | Google Sheets | Notion | 讀法 |
| --- | --- | --- | --- |
| 欄位穩定與批次整理 | 強 | 中 | 資源卡是 row-based，適合先用表格穩住 |
| 夥伴填寫 | 強 | 中 | 表格容易複製、篩選、補欄與匯入 |
| Kevin review queue | 強 | 強 | Notion 好讀，但 Sheets 比較適合初期檢核 |
| Codex 往返 | 強 | 中 | CSV / JSON / XLSX 較容易驗證 |
| 手機閱讀 | 中 | 強 | Notion 比較好讀，但要等欄位成熟 |
| 權限與邊界 | 中 | 中 | 兩者都要 private permission，不可放公開資料夾 |

## 建議分頁

| 分頁 | 用途 | 主要 owner |
| --- | --- | --- |
| Dashboard | 每週 review、數量、阻塞、下一步 | Kevin 做 |
| Resource_Cards | 主要資源卡 | 夥伴做 / Codex 做 |
| Source_Checks | 來源 URL、檢查日期、新鮮度、缺欄 | 夥伴做 |
| Review_Queue | 待 Kevin 覆核、暫停、private boundary | Kevin 做 |
| Partner_Tasks | 小任務、狀態、proof | 夥伴做 |
| Freshness_Log | 連結與新鮮度檢查紀錄 | 自動化 |
| No_Op_Checkpoints | 無變動週的驗證紀錄 | Codex 做 / 自動化 |
| Governance | approval gates、stop conditions、資料邊界 | Kevin 做 |

## 導入階段

| 階段 | 可以做 | 需要核准 |
| --- | --- | --- |
| P0 public selection draft | 本版公開安全選型、欄位表、導入 checklist | 不需要 |
| P1 private blank Sheet setup | 建立 private 空白工作板，不放真實資料 | 需要 |
| P2 partner public-source trial | 夥伴用公開來源試填資源卡 | 需要 |
| P3 real public-resource maintenance | 維護 Kevin 核准的公開資源卡 | 需要 |
| P4 report-first freshness automation | 只讀公開 URL，回報新鮮度與 no-op | 需要 |

## 不做什麼

- 不在公開 repo 建立真正 private board。
- 不匯入真實個案或真人私人資料。
- 不讓夥伴替使用者做資格、醫療、法律或個案判斷。
- 不把 Notion 或 Sheets 連到外部通知。
- 不移除 noindex。

## 下一步

v1.6 可以有三條路：

- 做一般民眾財務生活快照 prototype brief。
- 經 Kevin 核准後建立 private blank Google Sheets workboard。
- 起草 report-first 新鮮度檢查 automation，但不做外部寫入。
