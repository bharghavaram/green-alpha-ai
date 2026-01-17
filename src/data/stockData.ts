import { TrendingUp, TrendingDown, Leaf, Brain, BarChart3, Shield, Zap, Activity } from "lucide-react";

export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  prediction: "UP" | "DOWN";
  confidence: number;
  esgScore: number;
  volume: string;
}

export interface ESGMetric {
  category: string;
  score: number;
  label: string;
  icon: typeof Leaf;
  color: string;
}

export interface AgentInsight {
  id: string;
  agent: string;
  icon: typeof Brain;
  title: string;
  insight: string;
  confidence: number;
  timestamp: string;
}

export const stocksData: StockData[] = [
  { symbol: "TCS.NS", name: "Tata Consultancy Services", price: 4125.50, change: 78.25, changePercent: 1.93, prediction: "UP", confidence: 87, esgScore: 82, volume: "2.4M" },
  { symbol: "INFY.NS", name: "Infosys Limited", price: 1876.30, change: -23.45, changePercent: -1.24, prediction: "DOWN", confidence: 73, esgScore: 78, volume: "4.1M" },
  { symbol: "RELIANCE.NS", name: "Reliance Industries", price: 2945.80, change: 45.60, changePercent: 1.57, prediction: "UP", confidence: 81, esgScore: 65, volume: "8.7M" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank", price: 1654.25, change: 12.30, changePercent: 0.75, prediction: "UP", confidence: 79, esgScore: 71, volume: "5.2M" },
  { symbol: "WIPRO.NS", name: "Wipro Limited", price: 467.85, change: -8.90, changePercent: -1.87, prediction: "DOWN", confidence: 68, esgScore: 76, volume: "3.8M" },
];

export const esgMetrics: ESGMetric[] = [
  { category: "Environmental", score: 78, label: "Carbon Neutral Progress", icon: Leaf, color: "text-success" },
  { category: "Social", score: 85, label: "Employee Welfare", icon: Shield, color: "text-info" },
  { category: "Governance", score: 72, label: "Board Diversity", icon: BarChart3, color: "text-warning" },
];

export const agentInsights: AgentInsight[] = [
  {
    id: "1",
    agent: "ESG Insight Agent",
    icon: Leaf,
    title: "Sustainability Alert",
    insight: "TCS has increased renewable energy usage by 15% this quarter, positively impacting environmental score.",
    confidence: 92,
    timestamp: "2 min ago"
  },
  {
    id: "2",
    agent: "Sentiment Agent",
    icon: Activity,
    title: "Market Sentiment",
    insight: "Positive news coverage for RELIANCE regarding green hydrogen investments detected across 47 sources.",
    confidence: 88,
    timestamp: "5 min ago"
  },
  {
    id: "3",
    agent: "Prediction Agent",
    icon: Brain,
    title: "Price Movement",
    insight: "LSTM model predicts 2.3% upside for INFY based on technical indicators and volume patterns.",
    confidence: 76,
    timestamp: "8 min ago"
  },
  {
    id: "4",
    agent: "Portfolio Agent",
    icon: Zap,
    title: "Rebalance Suggestion",
    insight: "Consider reducing WIPRO exposure by 5% and reallocating to TCS for improved ESG-weighted returns.",
    confidence: 84,
    timestamp: "12 min ago"
  },
];

export const priceHistory = [
  { date: "Jan", TCS: 3850, INFY: 1720, RELIANCE: 2780 },
  { date: "Feb", TCS: 3920, INFY: 1780, RELIANCE: 2850 },
  { date: "Mar", TCS: 3880, INFY: 1850, RELIANCE: 2920 },
  { date: "Apr", TCS: 4010, INFY: 1820, RELIANCE: 2880 },
  { date: "May", TCS: 4080, INFY: 1890, RELIANCE: 2950 },
  { date: "Jun", TCS: 4125, INFY: 1876, RELIANCE: 2945 },
];

export const portfolioAllocation = [
  { name: "TCS", value: 30, esg: 82 },
  { name: "INFY", value: 25, esg: 78 },
  { name: "RELIANCE", value: 20, esg: 65 },
  { name: "HDFC", value: 15, esg: 71 },
  { name: "WIPRO", value: 10, esg: 76 },
];
