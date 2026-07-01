// =====================================
// AI FOREX SIGNAL PRO
// patterns.js
// =====================================

// Candle Structure
// {
//   open,
//   high,
//   low,
//   close
// }

// Body
function body(c) {
    return Math.abs(c.close - c.open);
}

// Upper Shadow
function upperShadow(c) {
    return c.high - Math.max(c.open, c.close);
}

// Lower Shadow
function lowerShadow(c) {
    return Math.min(c.open, c.close) - c.low;
}

// Bullish
function bullish(c) {
    return c.close > c.open;
}

// Bearish
function bearish(c) {
    return c.close < c.open;
}

// ---------------------
// Hammer
// ---------------------
function isHammer(c) {

    return (
        lowerShadow(c) > body(c) * 2 &&
        upperShadow(c) < body(c)
    );

}

// ---------------------
// Doji
// ---------------------
function isDoji(c) {

    return body(c) <= (c.high - c.low) * 0.1;

}

// ---------------------
// Shooting Star
// ---------------------
function isShootingStar(c) {

    return (
        upperShadow(c) > body(c) * 2 &&
        lowerShadow(c) < body(c)
    );

}

// ---------------------
// Bullish Engulfing
// ---------------------
function isBullishEngulfing(prev, curr) {

    return (
        bearish(prev) &&
        bullish(curr) &&
        curr.open < prev.close &&
        curr.close > prev.open
    );

}

// ---------------------
// Bearish Engulfing
// ---------------------
function isBearishEngulfing(prev, curr) {

    return (
        bullish(prev) &&
        bearish(curr) &&
        curr.open > prev.close &&
        curr.close < prev.open
    );

}

// ---------------------
// Pattern Detector
// ---------------------
function detectPattern(prev, curr) {

    if (isHammer(curr))
        return "Hammer";

    if (isDoji(curr))
        return "Doji";

    if (isShootingStar(curr))
        return "Shooting Star";

    if (isBullishEngulfing(prev, curr))
        return "Bullish Engulfing";

    if (isBearishEngulfing(prev, curr))
        return "Bearish Engulfing";

    return "None";

}

// =====================================
// patterns.js - Part 2
// =====================================

// Inverted Hammer
function isInvertedHammer(c){

    return (
        upperShadow(c) > body(c)*2 &&
        lowerShadow(c) < body(c)
    );

}

// Hanging Man
function isHangingMan(c){

    return (
        lowerShadow(c) > body(c)*2 &&
        upperShadow(c) < body(c)
    );

}

// Marubozu
function isMarubozu(c){

    return (

        upperShadow(c) < body(c)*0.05 &&
        lowerShadow(c) < body(c)*0.05

    );

}

// Bullish Harami
function isBullishHarami(prev,curr){

    return (

        bearish(prev) &&
        bullish(curr) &&
        curr.open > prev.close &&
        curr.close < prev.open

    );

}

// Bearish Harami
function isBearishHarami(prev,curr){

    return (

        bullish(prev) &&
        bearish(curr) &&
        curr.open < prev.close &&
        curr.close > prev.open

    );

}

// Tweezer Top
function isTweezerTop(prev,curr){

    return (

        bullish(prev) &&
        bearish(curr) &&
        Math.abs(prev.high-curr.high)<0.0002

    );

}

// Tweezer Bottom
function isTweezerBottom(prev,curr){

    return (

        bearish(prev) &&
        bullish(curr) &&
        Math.abs(prev.low-curr.low)<0.0002

    );

}

// Morning Star
function isMorningStar(a,b,c){

    return (

        bearish(a) &&
        body(b) < body(a)*0.5 &&
        bullish(c)

    );

}

// Evening Star
function isEveningStar(a,b,c){

    return (

        bullish(a) &&
        body(b) < body(a)*0.5 &&
        bearish(c)

    );

}
