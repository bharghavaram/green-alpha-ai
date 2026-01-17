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
      className="glass-card p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          "bg-gradient-to-br from-primary/20 to-accent/20"
        )}>
          <Icon className={cn("w-5 h-5", metric.color)} />
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground text-sm">
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
              className="stroke-primary"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={100}
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 100 - metric.score }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-lg text-foreground">
            {metric.score}
          </span>
        </div>
        <div className="flex-1">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${metric.score}%` }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              className={cn(
                "h-full rounded-full",
                metric.score >= 80 ? "bg-success" :
                metric.score >= 60 ? "bg-warning" : "bg-danger"
              )}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {metric.score >= 80 ? "Excellent" : metric.score >= 60 ? "Good" : "Needs Improvement"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ESGScoreCard;
