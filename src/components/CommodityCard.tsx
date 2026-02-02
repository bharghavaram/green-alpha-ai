import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Gem, Bitcoin, CircleDollarSign } from "lucide-react";
import { Commodity } from "@/data/marketData";

interface CommodityCardProps {
  commodity: Commodity;
  delay?: number;
}

const getAssetStyle = (symbol: string) => {
  switch (symbol) {
    case "XAU":
      return { gradient: "from-yellow-500 via-amber-400 to-yellow-600", bg: "bg-yellow-500/20", border: "border-yellow-500/50", icon: "text-yellow-400" };
    case "XAG":
      return { gradient: "from-slate-300 via-slate-100 to-slate-400", bg: "bg-slate-400/20", border: "border-slate-400/50", icon: "text-slate-300" };
    case "BTC":
      return { gradient: "from-orange-500 via-amber-500 to-orange-600", bg: "bg-orange-500/20", border: "border-orange-500/50", icon: "text-orange-400" };
    case "ETH":
      return { gradient: "from-indigo-400 via-purple-400 to-indigo-500", bg: "bg-indigo-500/20", border: "border-indigo-500/50", icon: "text-indigo-400" };
    default:
      return { gradient: "from-primary via-accent to-primary", bg: "bg-primary/20", border: "border-primary/50", icon: "text-primary" };
  }
};

const getIcon = (symbol: string) => {
  switch (symbol) {
    case "BTC":
      return Bitcoin;
    case "ETH":
      return CircleDollarSign;
    default:
      return Gem;
  }
};

const CommodityCard = ({ commodity, delay = 0 }: CommodityCardProps) => {
  const isPositive = commodity.change >= 0;
  const style = getAssetStyle(commodity.symbol);
  const Icon = getIcon(commodity.symbol);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
      className="relative bg-card/60 backdrop-blur-xl border border-primary/20 p-5 flex-1"
      style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
    >
      {/* Animated gradient border */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${style.gradient}`} />
      
      {/* Live pulse indicator */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_hsl(150_100%_45%)]" />
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Live</span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div 
          className={`w-10 h-10 flex items-center justify-center border ${style.bg} ${style.border}`}
          style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
        >
          <Icon className={`w-5 h-5 ${style.icon}`} />
        </div>
        <div>
          <div className="font-display font-bold text-foreground text-lg uppercase tracking-wider">
            {commodity.name}
          </div>
          <div className="text-xs text-muted-foreground">
            {commodity.unit}
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div className="space-y-3">
          {/* USD Price */}
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{commodity.unit}</div>
            <div className="text-2xl font-display font-bold text-foreground">
              ${commodity.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
          
          {/* INR Price - Same prominence as USD */}
          {commodity.priceINR && (
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{commodity.unitINR}</div>
              <div className="text-2xl font-display font-bold text-foreground">
                ₹{commodity.priceINR.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          )}
          
          {/* Change indicator */}
          <div className={`flex items-center gap-1.5 ${isPositive ? 'text-success' : 'text-destructive'}`}>
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-bold">
              {isPositive ? '+' : ''}{commodity.change.toFixed(2)}
            </span>
            <span className="text-sm font-medium">
              ({isPositive ? '+' : ''}{commodity.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
          
        {/* Mini sparkline */}
        <div className="flex items-end gap-0.5 h-8">
          {[40, 55, 45, 60, 52, 70, 65, 75].map((height, i) => (
            <div 
              key={i}
              className={`w-1 rounded-t ${isPositive ? 'bg-success/60' : 'bg-destructive/60'}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CommodityCard;
