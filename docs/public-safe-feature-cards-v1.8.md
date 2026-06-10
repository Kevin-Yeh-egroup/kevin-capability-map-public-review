# Public-safe Feature Cards v1.8

## 目的

v1.8 把 v1.7 的 90 天提升路線轉成兩張最關鍵的功能卡。這兩張卡不直接做帳號設定、不接真實個案、不放私有報表，而是定義下一階段要蒐集什麼 proof，讓 Kevin 的能力定位從「規劃很完整」往「可以證明有 production 與 impact 閉環」前進。

## Feature 1: Production Measurement Proof Board

| 欄位 | 說明 |
| --- | --- |
| 解決的問題 | GTM / GA4 / Ads / funnel 設計已經有方向，但 proof state 分散，審閱者不容易一眼看出哪些事件已可見、哪些仍缺資料。 |
| 目標使用者 | Kevin、Codex 作業支援、資料 / 成長夥伴、主管或合作方審閱者。 |
| 允許輸入 | public-safe event name、aggregate source-quality status、redacted proof note、weekly dashboard status、human review note。 |
| 不允許輸入 | GTM container ID、GA4 / Ads 帳號設定、raw user identifier、sensitive assessment answer、private report URL。 |
| 主要輸出 | P0 event proof status、source_quality、current_proof、next_action、approval_gate、no_op reason。 |

### Acceptance Criteria

- 每個 P0 event 都有 proof state。
- 每個 proof state 都有 source-quality label。
- blocked / missing 狀態要有下一個安全行動。
- 不出現帳號 ID、使用者層級資料或敏感答案。
- public artifact 不執行任何外部帳號變更。

## Feature 2: Impact Metric Tree and Claim Validation

| 欄位 | 說明 |
| --- | --- |
| 解決的問題 | application content 有使命、目標、採用訊號與效益宣稱，但公開說明需要區分 goal、early signal、verified proof、needs method review。 |
| 目標使用者 | Kevin、內容 / 研究夥伴、主管或合作方審閱者、Codex 作業支援。 |
| 允許輸入 | public mission statement、aggregate adoption / training signal、public-safe usage category、claim-method review note、human review decision。 |
| 不允許輸入 | 可識別個案、原始私人紀錄、未去識別問卷、私人聯絡資料、未驗證卻寫成確定成效的宣稱。 |
| 主要輸出 | impact metric tree、claim_status、proof_needed、method_review_question、portfolio-ready summary。 |

### Acceptance Criteria

- 每個 claim 都有 claim_status。
- 未完成方法檢核前，不把 effect claim 寫成 verified proof。
- meaningful action 要和 visitor / registration 分開定義。
- 不放可識別個案或私人調查內容。
- 產出可轉成 public-safe portfolio case。

## 兩張卡的關係

Measurement proof board 回答「使用者行為是否被可信地看見」。

Impact metric tree 回答「這些行為能否合理連到社會影響力」。

兩者接起來後，Kevin 的公開說法就可以從：

> 我能規劃社福 AI 產品與成長量測。

往前推進成：

> 我能設計、驗證並解釋社福 AI 產品的使用行為與影響力證據。

## Public-safe 邊界

- 不公開帳號設定。
- 不公開真實使用者或個案資料。
- 不公開 raw report URL。
- 不把缺資料當成 0。
- 不把目標或宣稱寫成已驗證成果。
- 不讓 AI 自動做高影響決策。
