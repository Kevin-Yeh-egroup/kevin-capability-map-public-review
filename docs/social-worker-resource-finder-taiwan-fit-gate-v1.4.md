# Taiwan Tool-fit Gate v1.4

## Tool

社工公開資源查找與新鮮度卡 prototype。

## Target Users

- Kevin。
- 內容 / 研究夥伴。
- 未來協助社工工具線的夥伴。
- Codex 作業支援。

## Taiwan Wording Fit

Verdict: pass.

本版使用台灣工作場合容易理解的詞：

- 公開來源。
- 缺欄。
- 人工覆核。
- 新鮮度檢查。
- 暫停。
- 需要覆核。
- 可公開安全整理。

避免把 imported product terms 當主標題；必要的 prototype、brief、QA、no-op 只保留在版本說明與工作流語境中。

## Taiwan Workplace Habit Fit

Verdict: pass.

分工方式符合 Kevin 目前工作習慣：

- Kevin 保留資源分類、服務判斷邊界、人工覆核與下一步決策。
- 夥伴只做公開來源蒐集、欄位整理、缺欄標記與問題清單。
- Codex 做結構化、模板、公開頁、驗證與摘要。
- 自動化只做 report-first 的連結、新鮮度與 no-op 檢查。

## Operational Habit Fit

Verdict: pass.

這版沒有要求團隊一次導入完整系統，而是先提供一份可匯入 Sheets / Notion 的欄位模板與 QA checklist。這比較接近台灣小型團隊常見的試作方式：先用表格穩住流程，再決定是否做工具。

## UI / Label / Instruction Clarity

Verdict: pass.

首頁新增區塊使用短標題、明確 artifact 入口與表格。行動裝置上應保留自然換行；不使用手動斷行，不把長說明塞進單一按鈕或小卡。

## Sensitive Data Or Approval Boundary

Verdict: pass.

本版只允許公開資料、空白模板、虛構或高階規格。不允許私人個案、真人資料、私人訊息、外部寄送、內部頁面或自動資格判定。Production 發布仍保留 noindex。

## Other Agents Needed

- `risk_guardian`: public/private boundary and no external action.
- `data_analyst`: CSV / table field shape.
- `frontend_qa`: artifact links and readable public page.
- `engineering_reviewer`: redaction, JSON, production verification.

## Required Fixes

None before v1.4 delivery.

## Proof

- `weekly/social-worker-resource-finder-prototype-v1.4.json`
- `docs/social-worker-resource-finder-prototype-brief-v1.4.md`
- `templates/social-worker-resource-card-template-v1.4.csv`
- `weekly/social-worker-resource-finder-qa-checklist-v1.4.csv`
- `reports/public-redaction-scan-report.v1.4.json`
