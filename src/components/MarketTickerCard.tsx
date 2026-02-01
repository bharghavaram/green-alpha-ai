import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Globe } from "lucide-react";
import { MarketIndex } from "@/data/marketData";

interface MarketTickerCardProps {
  index: MarketIndex;
  delay?: number;
}

const MarketTickerCard = ({ index, delay = 0 }: MarketTickerCardProps) => {
  const isPositive = index.change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
      className="relative bg-card/60 backdrop-blur-xl border border-primary/20 p-4 min-w-[180px]"
      style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${isPositive ? 'bg-success' : 'bg-destructive'}`} />
      
      {/* Live indicator */}
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <div className={`w-1.5 h-1.5 rounded-full ${index.status === 'open' ? 'bg-success animate-pulse' : 'bg-muted-foreground'}`} />
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
          {index.status}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Globe className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          {index.region}
        </span>
      </div>

      <div className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-1">
        {index.symbol}
      </div>
      
      <div className="text-xs text-muted-foreground mb-2 truncate">
        {index.name}
      </div>

      <div className="flex items-center justify-between">
        <span className="font-display font-bold text-foreground text-lg">
          {index.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>

      <div className={`flex items-center gap-1 mt-1 ${isPositive ? 'text-success' : 'text-destructive'}`}>
        {isPositive ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        <span className="text-xs font-bold">
          {isPositive ? '+' : ''}{index.change.toFixed(2)}
        </span>
        <span className="text-xs font-medium">
          ({isPositive ? '+' : ''}{index.changePercent.toFixed(2)}%)
        </span>
      </div>
    </motion.div>
  );
};

export default MarketTickerCard;
