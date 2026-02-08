import { useState, useEffect, useRef, useCallback } from "react";

export interface PricePoint {
  time: string;
  price: number;
}

export interface LiveAsset {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  basePrice: number;
  history: PricePoint[];
}

// Realistic price movement using a random walk with mean reversion
const generateRealisticMove = (
  currentPrice: number,
  basePrice: number,
  volatility: number
): number => {
  // Random walk component
  const randomWalk = (Math.random() - 0.5) * 2 * volatility * currentPrice;
  // Mean reversion toward base price (prevents drift)
  const meanReversion = (basePrice - currentPrice) * 0.002;
  // Small momentum
  const momentum = (Math.random() - 0.48) * volatility * currentPrice * 0.3;

  const newPrice = currentPrice + randomWalk + meanReversion + momentum;
  return Math.round(newPrice * 100) / 100;
};

const HISTORY_LENGTH = 60; // Keep 60 data points

const formatTime = (): string => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
};

interface AssetConfig {
  symbol: string;
  basePrice: number;
  volatility: number; // e.g., 0.001 for low, 0.005 for high
}

export const useLivePrices = (assets: AssetConfig[], intervalMs: number = 2000) => {
  const [liveAssets, setLiveAssets] = useState<Map<string, LiveAsset>>(() => {
    const map = new Map<string, LiveAsset>();
    assets.forEach((a) => {
      // Pre-fill history with realistic past data
      const history: PricePoint[] = [];
      let price = a.basePrice;
      for (let i = HISTORY_LENGTH; i > 0; i--) {
        price = generateRealisticMove(price, a.basePrice, a.volatility);
        history.push({ time: `T-${i}`, price });
      }
      map.set(a.symbol, {
        symbol: a.symbol,
        price: history[history.length - 1].price,
        change: 0,
        changePercent: 0,
        basePrice: a.basePrice,
        history,
      });
    });
    return map;
  });

  const assetsRef = useRef(assets);
  assetsRef.current = assets;

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveAssets((prev) => {
        const next = new Map(prev);
        assetsRef.current.forEach((config) => {
          const asset = next.get(config.symbol);
          if (!asset) return;

          const newPrice = generateRealisticMove(
            asset.price,
            config.basePrice,
            config.volatility
          );
          const change = Math.round((newPrice - config.basePrice) * 100) / 100;
          const changePercent =
            Math.round(((newPrice - config.basePrice) / config.basePrice) * 10000) / 100;

          const newHistory = [
            ...asset.history.slice(-(HISTORY_LENGTH - 1)),
            { time: formatTime(), price: newPrice },
          ];

          next.set(config.symbol, {
            ...asset,
            price: newPrice,
            change,
            changePercent,
            history: newHistory,
          });
        });
        return next;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  const getAsset = useCallback(
    (symbol: string): LiveAsset | undefined => {
      return liveAssets.get(symbol);
    },
    [liveAssets]
  );

  return { liveAssets, getAsset };
};
