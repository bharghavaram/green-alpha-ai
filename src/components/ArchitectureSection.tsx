import { motion } from "framer-motion";
import { Database, Brain, BarChart3, Zap, ArrowRight, Leaf, Activity } from "lucide-react";

const architectureSteps = [
  {
    icon: Database,
    title: "Data Layer",
    description: "Yahoo Finance API, ESG Reports, News Sentiment",
    color: "from-info/20 to-info/5",
  },
  {
    icon: Brain,
    title: "ML Models",
    description: "XGBoost Classifier + LSTM Regression",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Activity,
    title: "Predictions",
    description: "Binary Movement + Price Forecasting",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Zap,
    title: "LLM Agents",
    description: "ESG, Sentiment, Explanation Agents",
    color: "from-warning/20 to-warning/5",
  },
  {
    icon: BarChart3,
    title: "Portfolio",
    description: "Risk/Reward Optimization",
    color: "from-success/20 to-success/5",
  },
];

const ArchitectureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="architecture">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-medium">
            <Leaf className="w-4 h-4" />
            System Architecture
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Multi-Modal AI Pipeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining financial time-series, ESG documents, news sentiment, and LLM reasoning 
            for comprehensive market insights.
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {architectureSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 md:gap-4 w-full md:w-auto"
              >
                <div className="glass-card p-5 flex-1 md:flex-none md:w-[180px] text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {index < architectureSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-primary shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["PyTorch", "XGBoost", "LangChain", "Sentence-BERT", "ChromaDB", "FastAPI", "Streamlit"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary border border-border/50 text-sm text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
