export interface MarketIndex {
  symbol: string;
  name: string;
  region: string;
  price: number;
  change: number;
  changePercent: number;
  status: "open" | "closed";
}

export interface Commodity {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  unit: string;
}

// Global stock market indices
export const globalIndices: MarketIndex[] = [
  { symbol: "SPX", name: "S&P 500", region: "US", price: 5234.18, change: 45.23, changePercent: 0.87, status: "open" },
  { symbol: "DJI", name: "Dow Jones", region: "US", price: 39127.80, change: 312.45, changePercent: 0.81, status: "open" },
  { symbol: "IXIC", name: "NASDAQ", region: "US", price: 16439.22, change: -89.34, changePercent: -0.54, status: "open" },
  { symbol: "FTSE", name: "FTSE 100", region: "UK", price: 7687.45, change: 23.67, changePercent: 0.31, status: "closed" },
  { symbol: "DAX", name: "DAX 40", region: "DE", price: 17842.33, change: 156.78, changePercent: 0.89, status: "closed" },
  { symbol: "N225", name: "Nikkei 225", region: "JP", price: 38471.20, change: -234.56, changePercent: -0.61, status: "closed" },
  { symbol: "SENSEX", name: "BSE Sensex", region: "IN", price: 73198.56, change: 489.23, changePercent: 0.67, status: "open" },
  { symbol: "SSE", name: "Shanghai", region: "CN", price: 3015.45, change: -12.34, changePercent: -0.41, status: "closed" },
];

// Commodities - Gold and Silver
export const commodities: Commodity[] = [
  { symbol: "XAU", name: "Gold", price: 2345.80, change: 18.45, changePercent: 0.79, unit: "USD/oz" },
  { symbol: "XAG", name: "Silver", price: 27.85, change: -0.23, changePercent: -0.82, unit: "USD/oz" },
];

// Generate random price fluctuation
export const generatePriceUpdate = (currentPrice: number, volatility: number = 0.002): number => {
  const change = currentPrice * volatility * (Math.random() - 0.5);
  return Math.round((currentPrice + change) * 100) / 100;
};

// Generate change values based on price update
export const calculateChange = (newPrice: number, oldPrice: number): { change: number; changePercent: number } => {
  const change = Math.round((newPrice - oldPrice) * 100) / 100;
  const changePercent = Math.round(((newPrice - oldPrice) / oldPrice) * 10000) / 100;
  return { change, changePercent };
};
