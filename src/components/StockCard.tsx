import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity, Leaf } from "lucide-react";
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
        "stat-card cursor-pointer transition-all duration-300 hover:border-primary/50",
        isSelected && "border-primary ring-1 ring-primary/30"
      )}
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display font-semibold text-foreground">{stock.symbol}</h3>
            <p className="text-xs text-muted-foreground truncate max-w-[140px]">{stock.name}</p>
          </div>
          <div className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
            stock.prediction === "UP" 
              ? "bg-success/20 text-success" 
              : "bg-danger/20 text-danger"
          )}>
            {stock.prediction === "UP" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {stock.prediction}
          </div>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-display font-bold text-foreground">
            ₹{stock.price.toLocaleString()}
          </span>
          <div className={cn(
            "flex items-center gap-1 text-sm mt-1",
            isPositive ? "text-success" : "text-danger"
          )}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{isPositive ? "+" : ""}{stock.change.toFixed(2)}</span>
            <span>({isPositive ? "+" : ""}{stock.changePercent.toFixed(2)}%)</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Vol: {stock.volume}</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-3 h-3 text-primary" />
            <span className="text-primary font-medium">ESG: {stock.esgScore}</span>
          </div>
        </div>

        {/* Confidence Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">AI Confidence</span>
            <span className="text-foreground font-medium">{stock.confidence}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stock.confidence}%` }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StockCard;
