import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ESGMetric } from "@/data/stockData";

interface ESGScoreCardProps {
  metric: ESGMetric;
  index: number;
}

const ESGScoreCard = ({ metric, index }: ESGScoreCardProps) => {
  const Icon = metric.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="relative bg-card/60 backdrop-blur-xl border border-accent/20 p-4 glitch-hover"
      style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-primary to-accent opacity-50" />
      
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 flex items-center justify-center bg-accent/20 border border-accent/40 shadow-[0_0_10px_hsl(320_100%_60%/0.3)]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
        >
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider">
            {metric.category}
          </h4>
          <p className="text-xs text-muted-foreground">{metric.label}</p>
        </div>
      </div>

      {/* Score Circle */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-secondary"
              strokeWidth="3"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="hsl(320 100% 60%)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={100}
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 100 - metric.score }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
              style={{ filter: 'drop-shadow(0 0 5px hsl(320 100% 60% / 0.5))' }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display font-black text-lg text-foreground">
            {metric.score}
          </span>
        </div>
        <div className="flex-1">
          <div className="h-2 bg-secondary/50 overflow-hidden border border-accent/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${metric.score}%` }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              className={cn(
                "h-full",
                metric.score >= 80 ? "bg-success shadow-[0_0_10px_hsl(150_100%_45%/0.5)]" :
                metric.score >= 60 ? "bg-warning shadow-[0_0_10px_hsl(45_100%_55%/0.5)]" : 
                "bg-danger shadow-[0_0_10px_hsl(0_90%_55%/0.5)]"
              )}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
            {metric.score >= 80 ? "Excellent" : metric.score >= 60 ? "Good" : "Needs Improvement"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ESGScoreCard;
