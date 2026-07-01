// =====================================
// AI FOREX SIGNAL PRO
// ai-engine.js
// =====================================

// market = {
//   open: Number,
//   high: Number,
//   low: Number,
//   close: Number,
//   ema20: Number,
//   ema50: Number,
//   rsi: Number,
//   macd: Number,
//   pattern: "Hammer" | "Doji" | ...
// }

function analyzeMarket(market) {

    let signal = "WAIT";
    let confidence = 50;
    let trend = "SIDEWAYS";

    // Trend
    if (market.ema20 > market.ema50) {
        trend = "UPTREND";
    } else if (market.ema20 < market.ema50) {
        trend = "DOWNTREND";
    }

    // BUY Rules
    if (
        trend === "UPTREND" &&
        (market.pattern === "Hammer" ||
         market.pattern === "Bullish Engulfing") &&
        market.rsi < 35
    ) {
        signal = "BUY";
        confidence = 70;
    }

    // SELL Rules
    if (
        trend === "DOWNTREND" &&
        (market.pattern === "Shooting Star" ||
         market.pattern === "Bearish Engulfing") &&
        market.rsi > 65
    ) {
        signal = "SELL";
        confidence = 70;
    }

    return {
        signal,
        pattern: market.pattern,
        trend,
        confidence
    };
}
