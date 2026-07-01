// =====================================
// AI FOREX SIGNAL PRO
// app.js - Part 1
// =====================================

// ---------- Elements ----------
const assetSelect = document.getElementById("asset");
const timeframeSelect = document.getElementById("timeframe");

const signalText = document.getElementById("signal");
const patternText = document.getElementById("pattern");
const trendText = document.getElementById("trend");
const confidenceText = document.getElementById("confidence");

const totalSignals = document.getElementById("totalSignals");
const accuracy = document.getElementById("accuracy");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");

const historyTable = document.getElementById("historyTable");

const clock = document.getElementById("clock");

// ---------- Clock ----------
function updateClock() {

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// ---------- Load Data ----------

loadHistory();

loadStats();

updateStats();

// ---------- Asset ----------

assetSelect.addEventListener("change",()=>{

CURRENT.asset = assetSelect.value;

runAnalysis();

});

// ---------- Timeframe ----------

timeframeSelect.addEventListener("change",()=>{

CURRENT.timeframe = timeframeSelect.value;

runAnalysis();

});

// ---------- Stats ----------

function updateStats(){

totalSignals.innerHTML = STATS.total;

wins.innerHTML = STATS.wins;

losses.innerHTML = STATS.losses;

accuracy.innerHTML = STATS.accuracy+"%";

}

// ---------- History ----------

function renderHistory(){

historyTable.innerHTML="";

HISTORY.forEach(item=>{

historyTable.innerHTML+=`

<tr>

<td>${item.time}</td>

<td>${item.asset}</td>

<td>${item.timeframe}</td>

<td>${item.pattern}</td>

<td>${item.signal}</td>

<td>${item.result}</td>

</tr>

`;

});

}

renderHistory();
// =====================================
// AI FOREX SIGNAL PRO
// app.js - Part 2
// =====================================

// Auto Scan
if (SETTINGS.autoScan) {
    setInterval(runAnalysis, SETTINGS.scanInterval);
}

// Main Analysis
async function runAnalysis() {

    try {

        const market = await fetchMarketData(
            CURRENT.asset,
            CURRENT.timeframe
        );

        if (!market) return;

        // ai-engine.js থেকে signal analysis হবে
        const result = analyzeMarket(market);

        updateSignal(result);

    } catch (err) {

        console.error(err);

    }

}

// Update Dashboard
function updateSignal(result) {

    CURRENT.signal = result.signal;
    CURRENT.pattern = result.pattern;
    CURRENT.trend = result.trend;
    CURRENT.confidence = result.confidence;

    signalText.innerHTML = result.signal;

    patternText.innerHTML =
        "Pattern : " + result.pattern;

    trendText.innerHTML =
        "Trend : " + result.trend;

    confidenceText.innerHTML =
        "Confidence : " +
        result.confidence +
        "%";

    signalText.className = "";

    if (result.signal === "BUY")
        signalText.classList.add("buy");

    else if (result.signal === "SELL")
        signalText.classList.add("sell");

    else
        signalText.classList.add("wait");

}

// ---------------------------
// Placeholder
// Live API পরে যোগ হবে
// ---------------------------

async function fetchMarketData(asset, timeframe) {

    // এখানে পরে Live Forex API call হবে

    return null;

}
