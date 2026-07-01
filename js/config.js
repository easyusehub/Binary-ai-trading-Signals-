// ===============================
// AI FOREX SIGNAL PRO
// config.js
// ===============================

// Assets
const ASSETS = [
  { id: 1, symbol: "EUR/USD" },
  { id: 2, symbol: "GBP/USD" },
  { id: 3, symbol: "USD/JPY" },
  { id: 4, symbol: "XAU/USD" },
  { id: 5, symbol: "USD/CAD" }
];

// Timeframes
const TIMEFRAMES = [
  { id: 1, text: "30 Seconds", value: "30s" },
  { id: 2, text: "1 Minute", value: "1m" },
  { id: 3, text: "2 Minutes", value: "2m" },
  { id: 4, text: "5 Minutes", value: "5m" },
  { id: 5, text: "15 Minutes", value: "15m" }
];

// Settings
const SETTINGS = {
  theme: "dark",
  autoScan: true,
  scanInterval: 5000,
  historyLimit: 100,
  confidenceLimit: 60
};

// Current Signal
let CURRENT = {
  asset: "EUR/USD",
  timeframe: "1m",
  signal: "WAIT",
  pattern: "None",
  trend: "Unknown",
  confidence: 0,
  price: 0,
  entry: 0,
  result: "Waiting",
  time: ""
};

// Statistics
let STATS = {
  total: 0,
  wins: 0,
  losses: 0,
  accuracy: 0
};

// History
let HISTORY = [];

// Save History
function saveHistory() {
  localStorage.setItem("history", JSON.stringify(HISTORY));
}

// Load History
function loadHistory() {
  const data = localStorage.getItem("history");

  if (data) {
    HISTORY = JSON.parse(data);
  }
}

// Save Stats
function saveStats() {
  localStorage.setItem("stats", JSON.stringify(STATS));
}

// Load Stats
function loadStats() {
  const data = localStorage.getItem("stats");

  if (data) {
    STATS = JSON.parse(data);
  }
}

// Reset
function resetAll() {

  HISTORY = [];

  STATS = {
    total: 0,
    wins: 0,
    losses: 0,
    accuracy: 0
  };

  saveHistory();
  saveStats();

}
