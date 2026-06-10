# Site Information Architecture Plan v1.8

## 問題

公開能力地圖一路累積到 v1.7 後，頁面已經變得太長。讀者若只是想看最新版，需要一路滑過完整歷史，閱讀成本太高。

## 原始效果要保留

- 保留完整歷史脈絡。
- 保留每版 artifact 連結。
- 保留 public-safe boundary 和 noindex。
- 保留可週更、可回溯、可檢查的版本節奏。

## v1.8 改版原則

| 原則 | 做法 |
| --- | --- |
| 最新版優先 | 首頁前段直接放 v1.8 最新工作區。 |
| 快速跳轉 | Header 後加入 sticky quick nav。 |
| 版本索引 | 新增 version index，讓讀者按版本或主題進入。 |
| 歷史保留 | v1.7 以前內容放進完整歷史區，不刪除。 |
| 需要時展開 | 點舊版捷徑時，自動展開 archive。 |
| 手機可讀 | quick nav 可橫向滑動，卡片一欄呈現。 |

## 新首頁順序

1. Header：文件名稱、版本、日期、公開狀態。
2. Quick nav：最新重點、v1.8、版本索引、完整歷史、下一步。
3. Latest dashboard：v1.8 feature cards 與 weekly proof dashboard 摘要。
4. Version index：依版本與主題跳轉。
5. Full archive：折疊保存 v1.7 以前的完整內容。
6. Next version：v1.9 建議。

## 不做什麼

- 不刪除歷史版本。
- 不把 public site 變成需要登入的系統。
- 不移除 noindex。
- 不加入會外送資料的互動功能。
- 不用 tabs 隱藏高風險資料。

## 驗證方式

- 首頁載入後不用滑到底就能看到 v1.8。
- quick nav 與 version index 連結存在且目標可達。
- 舊版內容仍可在 archive 內找到。
- 桌機與手機都沒有橫向溢出。
- redaction scan 仍通過。
