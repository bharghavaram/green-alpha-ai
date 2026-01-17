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
      className="relative bg-card/60 backdrop-blur-xl border border-primary/20 p-4 hover:border-primary/50 transition-colors glitch-hover"
      style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
      
      <div className="flex items-start gap-3">
        {/* Agent Icon */}
        <div 
          className="w-12 h-12 flex items-center justify-center shrink-0 bg-primary/20 border border-primary/40 shadow-[0_0_15px_hsl(180_100%_50%/0.3)]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">{insight.agent}</span>
            <span className="text-xs text-muted-foreground font-mono">{insight.timestamp}</span>
          </div>

          {/* Title */}
          <h4 className="font-display font-bold text-foreground text-sm mb-2 uppercase tracking-wide">
            {insight.title}
          </h4>

          {/* Insight Text */}
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            {insight.insight}
          </p>

          {/* Confidence */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-secondary/50 overflow-hidden border border-primary/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${insight.confidence}%` }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_8px_hsl(180_100%_50%/0.4)]"
              />
            </div>
            <span className="text-xs font-bold text-primary font-mono">
              {insight.confidence}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AgentInsightCard;
