# 日曆價差文獻第二輪（2026-11-05 核查筆記）

查核日期：2026-11-05。範圍：哪些市況／訊號有利於「賣近期、買遠期、同行使價、1：1、近價平」的股票或指數期權日曆價差。未做回測、未下單。
第一輪已涵蓋（此處只作背景引用）：Campasano & Linn 2017、Vasquez 2017、Slivka/Liang/Xue 2020、Eisdorfer/Sadka/Zhdanov 2022、Jones & Wang 2012 初稿。

標記：**已核實（原文）**＝親自讀過 PDF 相關段落／表；**已核實（摘要）**＝只讀出版社、作者或資料庫摘要；**未核實**＝只見二手轉述、搜尋索引片段或實務宣稱。
重要原則：以下絕大部分證據來自跨式（straddle）、變異數交換（variance swap）或 VIX 期貨，**不是**同行使價 1：1 日曆價差；凡寫「對日曆價差的含意」都是推論，除非另行註明。

---

## A. 變異數風險溢價（VRP）的期限結構

### A1. Dew-Becker, Giglio, Le, Rodriguez (2017) "The price of variance risk"
- 出處：Journal of Financial Economics 123(2), 225–250。DOI 10.1016/j.jfineco.2016.04.003。NBER WP 21182（2015）。
- 連結：作者 JFE PDF https://stefanogiglio.org/papers/dew-becker-giglio-le-rodriguez-jfe-2017.pdf ；NBER https://www.nber.org/papers/w21182
- 閱讀深度：JFE 版摘要、引言、第 3 節（Sharpe ratio）文字；NBER 版同段。圖表數值只讀了文字轉述。
- 樣本：美國標普500變異數交換 1996–2014（Markit 等資料），1 個月至 14 年期；另以期權合成、VIX 期貨及歐洲指數（Euro Stoxx 50、FTSE 100、CAC 40、DAX）作覆核。
- 主要發現（已核實（原文））：
  - JFE 摘要：1996–2014 年間，對沖「未來變異數的消息」平均是**不用付錢**的（1 季至 14 年期）；只有未預期、短暫的已實現變異數有顯著定價。
  - JFE 第 3 節：零息變異數債權的年化 Sharpe ratio，一個月及兩個月期分別約 −1.3 及 −0.4（樣本 1996:01–2013:10，見 Fig. 4 文字）；其他期限與零無顯著差異。NBER 版同段寫 −1.4 及 −0.5——兩個版本數字不同，引用時以 JFE 版為準。
  - 文中描述：變異數期限結構在極短端非常陡，超過兩個月後迅速變平；Sharpe ratio 在超過兩個月後迅速趨近零。
- 對日曆價差的含意（推論）：日曆價差賣出的近期腿承擔「已實現變異數」風險（溢價最大處），買入的遠期腿主要承擔「預期變異數消息」風險（平均溢價近零）。這是「賣近買遠」有結構性優勢的最直接理論依據。但注意：(1) 證據是指數變異數交換，不是單一行使價期權；(2) 平價期權的 vega／gamma 分佈與變異數交換不同；(3) 見 A6，2012 年後指數期權溢價可能已消失。

### A2. Andries, Eisenbach, Kahn, Schmalz (2025) "The term structure of the price of variance risk"
- 出處：Review of Finance 29(6), 1699–1720。另有 NY Fed Staff Report 736（2015，2025-01 修訂）。
- 連結：https://www.newyorkfed.org/research/staff_reports/sr736.html ；PDF https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr736.pdf
- 閱讀深度：摘要（已核實（摘要））；Staff Report 方法及資料段落（已核實（原文））。
- 樣本：標普500指數期權，1996-01 至 2023-08（OptionMetrics）。非參數部分用 delta 中性跨式的周回報 Sharpe ratio，期限分四組：20–60、60–125、125–190、190–252 日。
- 主要發現（摘要）：變異數風險定價的絕對值隨期限**遞減**，但至九個月仍顯著非零；期限結構在正常時期及受壓時期都向下傾斜，受壓時補償上升且期限結構**更陡**。
- 與 A1 的分別：A1 說兩個月後近零，A2 說遞減但至九個月仍非零。兩者都支持「近期溢價大於遠期」。
- 對日曆價差的含意（推論）：受壓時近期溢價相對遠期更大，理論上賣近買遠的「溢價差」在高波動期更闊；但同時近期腿的 gamma 風險最大（見 B1 對指數倒掛的實證）。

### A3. Aït-Sahalia, Karaman, Mancini (2020) "The term structure of equity and variance risk premia"
- 出處：Journal of Econometrics 219(2), 204–230。DOI 10.1016/j.jeconom.2020.03.002。前稱 "The Term Structure of Variance Swaps, Risk Premia and the Expectation Hypothesis"。
- 連結：https://ideas.repec.org/a/eee/econom/v219y2020i2p204-230.html ；2015 會議版 http://farfe.org/2015ConferencePapers/TheTermStructureofEquityandVarianceRiskPremia.pdf
- 閱讀深度：期刊摘要（已核實（摘要））；2015 會議版的引言及資料段（已核實（原文），但不保證與期刊版完全相同）。
- 樣本：標普500變異數交換，固定期限 2、3、6、12、24 個月，1996-01-04 至 2010-09-02（會議版，3,624 個觀測）。
- 主要發現：
  - 摘要：變異數交換有顯著的價格跳躍成分；市場下跌後投資者願意付更多去保險波動風險，此效應**對短期限較強、對長期限較持久**。
  - 會議版：53% 樣本日期限結構向上；斜率（24 個月減 2 個月 VS rate）與當時波動水平強烈負相關，高波動時短端升得比長端多，形成向下傾斜（倒掛）。負跳躍造成的 IVRP 主要影響短端。
- 對日曆價差的含意（推論）：倒掛通常在跌市後出現；近期溢價急升但長期溢價「較持久」，意味倒掛後遠期腿 IV 未必隨近期一齊快速回落——對買遠腿是有利還是不利，取決於持有期與回落速度，論文未直接回答。

### A4. van Binsbergen & Koijen (2017) "The term structure of returns: Facts and theory"
- 出處：Journal of Financial Economics 124(1), 1–21（出版資料由作者網頁及 RePEc 核對）；讀的是 NBER WP 21234（2015）。
- 連結：https://www.nber.org/system/files/working_papers/w21234/w21234.pdf
- 閱讀深度：WP 第 4.3 節、Table 6、Figure 8 圖註（已核實（原文））。期刊版本是否保留同一表格未核對。
- 樣本：標普500指數平價跨式，1996-02 至 2013-08。
- 主要發現（WP Table 6，**賣出**跨式的年化數字）：期限 30–90 日／90–180／180–270／270–360／>360 日的平均超額回報為 185%／61%／30%／17%／8%；Sharpe ratio 1.62／1.30／0.89／0.58／0.30。Figure 8 繪出「賣短期跨式、買長期跨式」的累計超額回報（兩腿按相同波動率縮放），文字未給該組合的數值統計。
- 對日曆價差的含意：這是本輪找到最接近「指數賣近買遠」的學術組合，但它是**按波動率等比縮放的跨式對沖**，不是同行使價 1：1 單腿 Call／Put，亦未計交易成本。1：1 同行使價日曆的遠期腿 vega 較大，不會自動得到相同結果。

### A5. Bakshi & Kapadia (2003) "Delta-Hedged Gains and the Negative Market Volatility Risk Premium"
- 出處：Review of Financial Studies 16(2), 527–566。
- 連結：作者定稿 http://www.people.umass.edu/nkapadia/Research/rfsfinw.pdf ；https://ideas.repec.org/a/oup/rfinst/v16y2003i2p527-566.html
- 閱讀深度：摘要（已核實（摘要），作者定稿版）。
- 主要發現：買入期權並以股票做 delta 對沖，平均回報低於零；遠離平價的期權少一些；**波動較高時低於零的幅度更大**；考慮跳躍恐懼後 VRP 仍顯著影響 delta 對沖收益。
- 對日曆價差的含意（推論）：支持「賣出期權收取 VRP」；高波動時賣方補償更大。但日曆價差同時持有遠期多頭，淨效果取決於兩腿 VRP 之差（A1/A2）。

### A6. Dew-Becker & Giglio (2026, 工作論文) "The decline of the S&P 500 variance risk premium"
- 出處：作者 PDF，日期 2026-06-02；Chicago Fed WP 2025-17 為較早版本（搜尋所見，未讀）。
- 連結：https://www.dew-becker.org/documents/option_decline.pdf
- 閱讀深度：摘要及引言（已核實（原文））；表格未逐項核對。**未經同行評審。**
- 樣本：標普500期權 1987–2025；策略為每月第三個星期五買入一個月期期權持有至下月到期，包括 95% 價外 Put、平價跨式，有／無每日 delta 對沖，以及 VIX 組合。
- 主要發現：約 2012 年出現風險溢價的結構性斷點；2012 年後（與原始研究同樣長的樣本），標準期權策略**不再有統計顯著的 alpha 或資訊比率**，很多情況回報反而為正。時間上與交易商期權持倉改變同期。
- 對日曆價差的含意（推論，但決策上最重要）：日曆價差的主要「引擎」之一是賣出一個月期期權的 VRP；若 2012 年後指數一個月期溢價已不顯著，則依賴 A1–A5（多數樣本止於 2013–2014）的推論在指數上可能已失效。**任何回測必須把 2012 前後分開報告。** 單一股票期權是否同樣衰退，本文未答。

---

## B. VIX 期限結構斜率作為市況訊號

### B1. Johnson (2017) "Risk Premia and the VIX Term Structure"
- 出處：JFQA 52(6), 2461–2490。DOI 10.1017/S0022109017000825。
- 連結：作者 PDF https://www.travislakejohnson.com/pdfs/Johnson%20VIXTS%202017%20(JFQA).pdf ；資料 https://www.travislakejohnson.com/data.html
- 閱讀深度：全文主要段落及 Table 5（已核實（原文））。
- 樣本：以 VIX 方法計算 1、2、3、6、9、12 個月 VIX，1996–2013 共 4,445 日；VIX 期貨 2004–2013 共 2,375 日。回報以買賣中間價計算（文中第 1615 行附近說明），未扣成本。
- **斜率定義與方向**：SLOPE＝VIX² 期限結構的第二主成分；對短期 VIX² 負載、對長期 VIX² 正載。SLOPE 低＝向下傾斜（倒掛），SLOPE 高＝向上傾斜（contango）。因正係數絕對值較大，SLOPE 為正時期限結構仍可能嚴格向下，所以作者只比較高低分位，不看平均值。另一替代定義 VIX²₁₂ − VIX²₁ 的預測力「顯著但較弱」（Table 6 文字）。
- 主要發現：
  - 期限結構形狀反映變異數風險價格，**不是**預期 VIX 變化（否定預期假說）。SLOPE 預測變異數交換、VIX 期貨及標普跨式所有期限的超額回報。
  - SLOPE 低（倒掛）時，18 種變異數資產中 17 種的未來 VRP 轉為正；例如 12 個月跨式在最低分位平均每日高於無風險利率 30 bps（引言）。
  - Table 5 Panel C（跨式次日平均回報，%）：最低分位 1／6／12 個月 = 0.44／0.39／0.29；最高分位 = −0.65／−0.21／−0.11。高減低：−1.09／−0.59／−0.40，全部在 1% 水平顯著。
  - Figure 2：樣本外條件策略（SLOPE 在歷史最低五分位時買跨式、否則賣）由 2000 年起計。
- 對日曆價差的含意（本文算術推論，未經統計檢定）：用 Table 5 Panel C，「賣 1 個月、買 6 個月、兩腿等額權利金」的次日回報約為 r₆ − r₁：最低至最高分位依次約 −0.05、+0.27、+0.47、+0.30、+0.44（%）。即**指數 contango 或正常時期，賣近買遠的回報差為正；深度倒掛時約為零**。注意：同行使價 1：1 日曆不是等額權利金（遠腿權利金較大），而且這是次日回報、未計成本，並非持有至近腿到期。

### B2. Simon & Campasano (2014) "The VIX Futures Basis: Evidence and Trading Strategies"
- 出處：Journal of Derivatives 21(3), 54–69。DOI 10.3905/jod.2014.21.3.054；SSRN 2094510。
- 連結：https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2094510
- 閱讀深度：期刊摘要（經 Mendeley 書目頁及期刊 PDF 搜尋索引片段，已核實（摘要））。EFMA 2013 全文 PDF 下載失敗（伺服器回傳 HTML）。
- 樣本：2006-01 至 2011-12。
- 主要發現：VIX 期貨基差對其後 VIX 現貨變化**沒有**顯著預測力，但對 VIX 期貨價格變化有預測力；contango 時沽空 VIX 期貨、backwardation 時買入（以迷你標普期貨對沖市場風險）高度獲利，摘要稱對交易成本及樣本外對沖比率穩健。
- 對日曆價差的含意（推論）：支持「期限結構的斜率主要反映風險溢價、而非未來波動的準確預測」。對同行使價日曆價差而言，這是支持「contango 時遠期 IV 偏貴」——即買遠腿在 contango 時是買入較貴的波動率，與 B1 的等額算術推論方向需一併檢驗。

### B3. Cheng (2019) "The VIX Premium"
- 出處：Review of Financial Studies 32(1), 180–227。DOI 10.1093/rfs/hhy062。
- 連結：接受稿 https://utoronto.scholaris.ca/items/1cfdb03f-e696-46b1-959c-15bcb51163d5 ；資料及程式 https://github.com/inghawcheng/vixpremium
- 閱讀深度：接受稿摘要（已核實（摘要））。
- 主要發現：VIX 期貨內含的事前溢價在事前風險上升時**下跌或持平**；事前溢價以接近 1 的係數預測事後 VIX 期貨回報；溢價下跌預示其後市場風險上升；與避險需求下降同步。
- 對日曆價差的含意（推論）：風險上升初期，波動率保險可能偏「便宜」——賣近期期權在此時收到的溢價不足以補償風險。對日曆價差，這是「危機初期不宜開新倉」的弱證據；作者公開的資料可作重現用。

---

## C. 隱含 vs 已實現波動率、波動率之波動

### C1. Goyal & Saretto (2009) "Cross-section of option returns and volatility"
- 出處：Journal of Financial Economics 94(2), 310–326。
- 連結：https://ideas.repec.org/a/eee/jfinec/v94y2009i2p310-326.html ；2008-03 工作論文 http://www.ruf.rice.edu/~jgsfss/goyal_041808.pdf
- 閱讀深度：2008 工作論文全文相關段落（已核實（原文））；期刊摘要與工作論文摘要一致（Purdue 工作論文頁）。數字以工作論文為準，期刊版可能不同。
- 樣本：美國個股期權 OptionMetrics 1996–2005（工作論文）。
- **訊號定義**：按 log(HV) − log(IV) 排十分位；HV＝過去十二個月日回報標準差，IV＝約一個月期平價 IV。第十分位＝HV 遠高於 IV。
- 主要發現（工作論文）：買第十分位、賣第一分位的跨式組合平均每月 22.5%（月標準差 31.4%）；若有效價差等於報價價差，降至每月 7.5%。期權流動性較好的股票（低買賣差）以中間價計為 18.2%，以全價差計為 9.4%。
- 對日曆價差的含意（推論）：IV 明顯高於歷史 RV 的股票，賣出波動率較有利；但日曆價差同時買入遠期波動率。可測試的是：IV_near 相對 RV 的溢價是否高於 IV_far 相對 RV 的溢價。交易成本可吃掉大部分利潤，這點對兩腿的日曆價差更嚴重。

### C2. Cao, Vasquez, Xiao, Zhan (2023) "Why Does Volatility Uncertainty Predict Equity Option Returns?"
- 出處：Quarterly Journal of Finance 13(1), 2350005。DOI 10.1142/s2010139223500052（舊題 "Volatility Uncertainty and the Cross-Section of Option Returns"）。
- 連結：https://openaccess.city.ac.uk/id/eprint/30606
- 閱讀深度：摘要（已核實（摘要），經 City 儲存庫）。
- 主要發現：delta 對沖個股期權回報隨「波動率變化的波動」（vol-of-vol）上升而一致下降；隱含及已實現波動皆然；機制包括模型風險，以波動上升部分的波動貢獻為主。
- 對日曆價差的含意（推論）：高 vol-of-vol 股票期權偏貴，對賣方有利，但日曆價差的遠期多頭 vega 亦會受高 vol-of-vol 的大幅 IV 下跌打擊。屬「待測控制變數」，不是方向性證據。

### C3. 背景：Bollerslev, Tauchen, Zhou (2009) "Expected Stock Returns and Variance Risk Premia"
- RFS 22(11), 4463–4492。已核實（摘要，RePEc）：VRP 對季度股市回報有預測力。與日曆價差只屬間接相關（關乎股票方向，不是期權回報），列作背景，不作證據。

---

## D. 業績公佈與期權期限結構

### D1. Gao, Xing, Zhang (2018) "Anticipating Uncertainty: Straddles around Earnings Announcements"
- 出處：JFQA 53(6), 2587–2617。DOI 10.1017/S0022109018000285；SSRN 2204549。
- 連結：清華五道口所載期刊版 PDF https://eng.pbcsf.tsinghua.edu.cn/__local/A/11/35/B0A1714D795BD9799087BCCC2AD_A01C4283_54641.pdf?e=.pdf
- 閱讀深度：期刊版摘要、資料段、主要結果表（已核實（原文））。
- 樣本：美國個股，1996-01 至 2013-12，OptionMetrics；跨式要求 10–60 日到期、近價平；回報以收市買賣**中間價**計算。
- 主要發現：個股跨式平時錄得顯著負回報；但由公佈前 3 日買入至公佈日的平價跨式平均錄得 3.34%（摘要），各持有窗口 2.10%–3.34%；包括公佈後一天的窗口（例如 [−3,1]、[−1,1]）在多個面板亦為正。效應在小型、高波動、高峰度、過往業績意外波動大、成交少／交易成本高的公司更明顯。作者解讀：投資者**低估**業績公佈的不確定性。
- 對「業績日曆」的含意（推論，關鍵）：近期腿包含業績時，平均而言該腿的事件波動**偏便宜**而非偏貴（以中間價、1996–2013）。賣近買遠的業績日曆本質上是淨沽空事件變異數（近腿每日事件權重較大），因此此證據是**不利**於業績日曆的。但注意：(1) 中間價未扣成本，而效應最強的正是高交易成本股票；(2) 樣本止於 2013；(3) 業績日曆常把遠腿也跨過業績，淨事件曝險需逐筆計算。

### D2. Dubinsky, Johannes, Kaeck, Seeger (2019) "Option Pricing of Earnings Announcement Risks"
- 出處：Review of Financial Studies 32(2), 646–687。DOI 10.1093/rfs/hhy060。
- 連結：https://ideas.repec.org/a/oup/rfinst/v32y2019i2p646-687..html ；https://sussex.figshare.com/articles/journal_contribution/Option_pricing_of_earnings_announcement_risks/23454023
- 閱讀深度：摘要（已核實（摘要））；全文受限，未讀。
- 主要發現：提出簡約模型及估計方法，從期權價格分離業績公佈的價格不確定性與正常日常波動；預期不確定性量大、隨時間變化，並**對未來回報波動有資訊含量**。
- 對日曆價差的含意：提供「兩個到期日反推事件波動」的方法論，可用來把日曆價差的 IV 斜率分拆為「事件部分」與「事件外部分」。摘要沒有說事件波動被高估或低估，方向證據要看 D1。

---

## E. 直接的日曆價差／遠期波動交易證據

### E1. V. Campasano (2018) 博士論文 "Essays on the Term Structure of Volatility and Option Returns"
- 出處：University of Massachusetts Amherst，Doctoral Dissertations 1220。
- 連結：https://scholarworks.umass.edu/entities/publication/36521585-82a0-4825-8e5e-6b0945a14abf ；鏡像 https://core.ac.uk/download/pdf/220128983.pdf
- 閱讀深度：**未能取得全文**（UMass、CORE、SciSpace 均回傳 403／HTML）。以下只來自搜尋引擎索引的原文片段，標記為未核實。
- 片段內容（未核實）：
  - 有一個「六個月減一個月」的日曆價差（買六個月、賣一個月期權），按期權買賣差分三組：中間價時各組回報為正且顯著；對最窄價差組別，假設 50%（100%）有效價差後每月 9.66%（7.78%），Sharpe ratio 1.47（0.80）。片段未交代這是哪個斜率分位或整體樣本。
  - 另有一個個股日曆價差：買兩個月平價跨式、賣一個月平價跨式，名義等額；組合 1（5）為 IV 曲線最陡向上（向下）；Table 20 的日曆價差回報由第一至第十分位單調上升，與遠期變異數交換相同。
  - 摘要片段：斜率與短期個股期權回報負相關、與長期個股期權回報正相關；**指數期權沒有此交互作用**。
- 含意：若全文證實，這是目前最直接的「個股期限倒掛時賣近買遠有利」證據；但仍是跨式（Call＋Put）而非單腿，且「指數無此效應」與 B1 推論一致。

### E2. J. Campasano (2018) "Term Structure Forecasts of Volatility and Option Portfolio Returns"
- 出處：SSRN 3240028（工作論文）。
- 閱讀深度：SSRN 直接讀取被拒（403）；只見截斷摘要「I examine the predictability of equity implied volatility from the term structure, and find that forward volatility levels are…」。未核實。
- 備註：實務界的 "Forward Factor" 說法（見 F1）有部落格把此文列為出處（layquant.substack.com），但本輪無法核實文中是否真的使用該指標或門檻。

### E3. 第一輪 Campasano & Linn 補充（不重做，只更新線索）
- SSRN 2871616 目前標題顯示為 "Jump Risk and Option Returns"，搜尋所見摘要：「equity volatility 的期限結構是標的跳躍的強預測指標」（未核實）。若屬實，倒掛期限結構＝跳躍風險高，對近腿 gamma 是警號。
- 搜尋索引片段（2017-02 版）顯示：買六個月、賣一個月組合，第一分位每月虧 1.56%，第十分位每月賺 15.35%，Sharpe 3.123（未核實；super.so PDF 本輪回傳 Access Denied）。二手評論（X 帳號 ReformedTrader，2019）指第十分位為 backwardation，並指 Figure 3 與文字描述不一致——須取得全文核對。

---

## F. 實務來源（全部未核實，不作證據）

- F1. "Forward Factor"：FV = √[(σ₂²T₂ − σ₁²T₁)/(T₂ − T₁)]，FF = σ₁/FV − 1（layquant.substack.com 等）。部落格及影片宣稱高 FF（例如 >0.2，且用剔除業績的 IV）時買日曆，並列出年化 27%、Sharpe 2.4 等數字；TradingRiot 稱 2016-02 至 2026-08 在 33 隻 ETF 做 178 筆 30–90 日 FF 日曆，中間價成交。全部為未核實的實務宣稱，未知成本、選樣及前視偏差處理。
- F2. ORATS 部落格：以其 "Contango"（45 日 IV 期限結構斜率）為條件回測 SPY 長 Call 日曆，主張倒掛時買日曆較佳；搜尋片段的報酬數字被截斷，不引用。
- F3. IV rank／IV percentile：本輪沒有找到以此為訊號、直接研究日曆價差的同行評審論文；只屬實務指標。

---

## (a) 綜合表：什麼市況可能有利／不利日曆價差

| 市況／訊號 | 對 1：1 同行使價日曆的方向 | 依據 | 證據強度 |
|---|---|---|---|
| 正常 contango、波動平靜（指數，2012 年前） | 有利：近腿 VRP 大、遠腿近零 | A1、A2、A4、B1 推論 | 中（間接：變異數交換／跨式；轉移為推論） |
| 2012 年後的標普指數 | 可能失去主要優勢 | A6 | 中偏弱（單一未評審工作論文，但時間最新） |
| 指數深度倒掛（SLOPE 最低五分位、VIX3M < VIX） | 中性至不利：各期限跨式回報同轉正，等額賣近買遠約為零；近腿 gamma 風險大 | B1 Table 5 推論、A3、E3 跳躍線索 | 中（原文數字，但非日曆） |
| 個股期限倒掛（橫截面） | 可能有利：日曆回報隨倒掛程度上升 | E1（片段）、Vasquez 2017（第一輪） | 弱至中（全文未讀） |
| IV 遠高於歷史 RV（個股） | 有利於賣近腿；對遠腿不明 | C1 | 中（跨式；成本敏感） |
| 近腿包含業績公佈 | 平均不利（事件波動偏便宜） | D1 | 中（1996–2013，中間價） |
| 風險剛上升、VIX 溢價卻下跌 | 不利於開新倉（近腿收費不足） | B3 | 弱（推論） |
| 高 vol-of-vol | 方向不明：賣方溢價較高，但遠腿 vega 風險大 | C2 | 弱 |
| 高交易成本／闊買賣差 | 不利：多篇論文的回報扣成本後大減 | C1、E1 片段、D1 | 中 |

## (b) 可測試假設與精確訊號定義

所有 IV 皆指同行使價（或插值至固定 DTE）的平價 IV；t 為入場日，T₁、T₂ 為近、遠腿剩餘年期；只用 t 日或之前資料。

- H2-1 期限斜率：`slope = IV_far/IV_near − 1`；另以指數層面 `vix_slope = VIX3M/VIX − 1`（資料已在 `research/data/`）。假設：日曆回報與 slope 的關係在指數為正（contango 較佳，B1 推論），在個股為負（倒掛較佳，E1）。按 slope 五分位報告，2012 前後分開。
- H2-2 Forward Factor：`FV = sqrt((IV_far²·T₂ − IV_near²·T₁)/(T₂ − T₁))`，`FF = IV_near/FV − 1`；`FV²` 為負時剔除。假設：FF 高分位日曆回報較高（實務宣稱，F1）。必須同時報告與 slope 的相關度，因兩者高度共線。
- H2-3 業績旗標：`E_front = 1` 若業績日 ∈ (t, T₁]；`E_back_only = 1` 若 ∈ (T₁, T₂]。假設：E_front = 1 時日曆回報較差（D1）。另以「兩腿均含業績、事件外波動不變」假設估事件變異數：`σ_d² = (IV_far²T₂ − IV_near²T₁)/(T₂ − T₁)`，`E² = (IV_near² − σ_d²)·T₁`——注意此時 σ_d 正是 FV，所以業績季 FF 會被機械性推高，H2-2 必須剔除或分組。
- H2-4 IV−RV：`vrp_near = ln(RV_252) − ln(IV_near)`（Goyal-Saretto 定義），另做 `ln(RV_21) − ln(IV_near)` 及 `IV_near/IV_far` 對 `RV_21/RV_252` 的比較。假設：vrp_near 越負（IV 越貴），賣近腿越有利。
- H2-5 IV 水平類（實務）：`IV_rank = (IV_t − min₂₅₂)/(max₂₅₂ − min₂₅₂)`；`IV_pct = 過去 252 日中 IV < IV_t 的比例`；`IV_z = (IV_t − mean₂₅₂)/sd₂₅₂`。僅作探索，需多重檢定校正。
- H2-6 市況：`VIX_pct_252`、Johnson SLOPE（用滾動窗口 PCA，避免全樣本前視）、`post2012` 虛擬變數。假設：post2012 時指數日曆的平均回報下降（A6）。
- H2-7 遠腿 vega 風險：把每筆損益分解為近腿／遠腿的 IV 變化貢獻；假設：倒掛入場後遠腿 IV 下跌是主要虧損來源（A3「長期限較持久」需測試其反面）。
- H2-8 vol-of-vol：`vov = sd(ΔIV_near/IV_near, 21 日)`；作控制變數。
- 所有假設：以實際買賣價（或 50%／100% 有效價差）計回報，同時報告中間價版本作對照。

## (c) 未解問題

1. E1 博士論文及 E3 Campasano & Linn 全文未能下載；需經大學圖書館或作者取得，以核實斜率方向、日曆構造（跨式 vs 單腿）、回報分母及成本表。
2. A6 的 2012 年斷點是否同樣出現在個股期權、港股／恒指期權？本輪未找到證據。
3. 跨式／變異數交換的期限溢價差，轉移到同行使價 1：1 單腿日曆時，vega 加權後還剩多少？目前沒有論文直接回答。
4. D1 的業績跨式正回報在 2014 年後（週期權普及、業績前 IV 上升）是否持續？Gao, Hu, Zhang (2026, Management Science 72(3)) "Uncertainty Risk Resolution Before Earnings Announcements" 或相關，本輪只見書目，未讀。
5. Forward Factor 是否只是 slope 的重新包裝？需在同一資料上比較兩者的增量預測力。
6. Johnson SLOPE 的主成分係數需要滾動估計；用固定比率（VIX3M/VIX）替代會損失多少預測力？
7. 未能存取：Simon & Campasano EFMA 全文、Dubinsky 等全文、Campasano SSRN 3240028 全文、Cheng 全文正文（只讀摘要）。
