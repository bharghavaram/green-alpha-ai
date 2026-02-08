import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, TrendingUp, RefreshCw } from "lucide-react";
import MarketTickerCard from "./MarketTickerCard";
import CommodityCard from "./CommodityCard";
import { 
  globalIndices as initialIndices, 
  commodities as initialCommodities,
  generatePriceUpdate,
  calculateChange,
  MarketIndex,
  Commodity,
  USD_TO_INR
} from "@/data/marketData";
import { useLivePrices } from "@/hooks/useLivePrices";

// Configure all commodities for live streaming
const commodityAssetConfigs = initialCommodities.map(c => ({
  symbol: c.symbol,
  basePrice: c.price,
  volatility: c.symbol === "BTC" ? 0.003 : c.symbol === "ETH" ? 0.004 : 0.001,
}));

const GlobalMarketsSection = () => {
  const [indices, setIndices] = useState<MarketIndex[]>(initialIndices);
  const [commodities, setCommodities] = useState<Commodity[]>(initialCommodities);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Live streaming prices for sparkline data
  const { liveAssets } = useLivePrices(commodityAssetConfigs, 2000);

  // Sync commodity prices from live hook
  useEffect(() => {
    setCommodities(prev => prev.map(commodity => {
      const live = liveAssets.get(commodity.symbol);
      if (!live) return commodity;

      let priceINR: number | undefined;
      if (commodity.symbol === "XAU" || commodity.symbol === "XAG") {
        priceINR = Math.round((live.price * 32.1507 * USD_TO_INR) * 100) / 100;
      } else if (commodity.symbol === "PAXG" || commodity.symbol === "PAXS") {
        priceINR = Math.round((live.price * USD_TO_INR) * 100) / 100;
      }

      return {
        ...commodity,
        price: live.price,
        change: live.change,
        changePercent: live.changePercent,
        priceINR,
      };
    }));
    setLastUpdate(new Date());
  }, [liveAssets]);

  // Simulate live index updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIndices(prev => prev.map(index => {
        if (index.status === 'closed') return index;
        const basePrice = initialIndices.find(i => i.symbol === index.symbol)?.price || index.price;
        const newPrice = generatePriceUpdate(index.price, 0.0015);
        const { change, changePercent } = calculateChange(newPrice, basePrice);
        return { ...index, price: newPrice, change, changePercent };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
        >
          <div>
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-accent/50 bg-accent/10 text-sm text-accent font-semibold uppercase tracking-wider"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
            >
              <Globe className="w-4 h-4" />
              Global Markets
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tight">
              LIVE MARKET OVERVIEW
            </h2>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <RefreshCw className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="uppercase tracking-wider">
              Updated: {lastUpdate.toLocaleTimeString()}
            </span>
          </div>
        </motion.div>

        {/* Precious Metals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
            <TrendingUp className="w-4 h-4 text-warning" />
            Precious Metals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commodities.filter(c => c.symbol === "XAU" || c.symbol === "XAG").map((commodity, index) => (
              <CommodityCard 
                key={commodity.symbol} 
                commodity={commodity} 
                delay={index}
                sparklineData={liveAssets.get(commodity.symbol)?.history}
              />
            ))}
          </div>
        </motion.div>

        {/* Tokenized Assets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-8"
        >
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
            <TrendingUp className="w-4 h-4 text-amber-500" />
            Tokenized Assets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commodities.filter(c => c.symbol === "PAXG" || c.symbol === "PAXS").map((commodity, index) => (
              <CommodityCard 
                key={commodity.symbol} 
                commodity={commodity} 
                delay={index}
                sparklineData={liveAssets.get(commodity.symbol)?.history}
              />
            ))}
          </div>
        </motion.div>

        {/* Cryptocurrencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            Cryptocurrencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commodities.filter(c => c.symbol === "BTC" || c.symbol === "ETH").map((commodity, index) => (
              <CommodityCard 
                key={commodity.symbol} 
                commodity={commodity} 
                delay={index}
                sparklineData={liveAssets.get(commodity.symbol)?.history}
              />
            ))}
          </div>
        </motion.div>

        {/* Global Indices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
            <Globe className="w-4 h-4 text-primary" />
            World Indices
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {indices.map((index, i) => (
              <MarketTickerCard 
                key={index.symbol} 
                index={index} 
                delay={i}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalMarketsSection;
