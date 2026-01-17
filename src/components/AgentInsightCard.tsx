import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AgentInsight } from "@/data/stockData";

interface AgentInsightCardProps {
  insight: AgentInsight;
  index: number;
}

const AgentInsightCard = ({ insight, index }: AgentInsightCardProps) => {
  const Icon = insight.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.15 }}
      className="glass-card p-4 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start gap-3">
        {/* Agent Icon */}
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
          "bg-gradient-to-br from-primary/30 to-accent/20"
        )}>
          <Icon className="w-5 h-5 text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-primary">{insight.agent}</span>
            <span className="text-xs text-muted-foreground">{insight.timestamp}</span>
          </div>

          {/* Title */}
          <h4 className="font-display font-semibold text-foreground text-sm mb-2">
            {insight.title}
          </h4>

          {/* Insight Text */}
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            {insight.insight}
          </p>

          {/* Confidence */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${insight.confidence}%` }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
            <span className="text-xs font-medium text-foreground">
              {insight.confidence}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AgentInsightCard;
