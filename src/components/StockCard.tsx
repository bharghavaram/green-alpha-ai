import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { StockData } from "@/data/stockData";

interface StockCardProps {
  stock: StockData;
  index: number;
  isSelected?: boolean;
  onSelect?: (symbol: string) => void;
}

const StockCard = ({ stock, index, isSelected, onSelect }: StockCardProps) => {
  const isPositive = stock.change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect?.(stock.symbol)}
      className={cn(
        "relative bg-card/60 backdrop-blur-xl border border-primary/20 p-4 cursor-pointer transition-all duration-300 hover:border-primary/50 glitch-hover",
        isSelected && "border-primary shadow-[0_0_20px_hsl(180_100%_50%/0.3)]"
      )}
      style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display font-bold text-foreground uppercase tracking-wider">{stock.symbol}</h3>
            <p className="text-xs text-muted-foreground truncate max-w-[140px]">{stock.name}</p>
          </div>
          <div 
            className={cn(
              "flex items-center gap-1 px-3 py-1 text-xs font-bold uppercase tracking-wider",
              stock.prediction === "UP" 
                ? "bg-success/20 text-success border border-success/30" 
                : "bg-danger/20 text-danger border border-danger/30"
            )}
            style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
          >
            {stock.prediction === "UP" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {stock.prediction}
          </div>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-display font-black text-foreground">
            ₹{stock.price.toLocaleString()}
          </span>
          <div className={cn(
            "flex items-center gap-1 text-sm mt-1 font-semibold",
            isPositive ? "ticker-up" : "ticker-down"
          )}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{isPositive ? "+" : ""}{stock.change.toFixed(2)}</span>
            <span>({isPositive ? "+" : ""}{stock.changePercent.toFixed(2)}%)</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between text-xs uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Vol: {stock.volume}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-accent" />
            <span className="text-accent font-bold">ESG: {stock.esgScore}</span>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1 uppercase tracking-wider">
            <span className="text-muted-foreground">AI Confidence</span>
            <span className="text-primary font-bold">{stock.confidence}%</span>
          </div>
          <div className="h-2 bg-secondary/50 overflow-hidden border border-primary/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stock.confidence}%` }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_hsl(180_100%_50%/0.5)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StockCard;
