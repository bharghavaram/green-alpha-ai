import { motion } from "framer-motion";
import { Database, Brain, BarChart3, Zap, ArrowRight, Activity, Terminal } from "lucide-react";

const architectureSteps = [
  {
    icon: Database,
    title: "Data Layer",
    description: "Yahoo Finance API, ESG Reports, News Sentiment",
    color: "primary",
  },
  {
    icon: Brain,
    title: "ML Models",
    description: "XGBoost Classifier + LSTM Regression",
    color: "accent",
  },
  {
    icon: Activity,
    title: "Predictions",
    description: "Binary Movement + Price Forecasting",
    color: "primary",
  },
  {
    icon: Zap,
    title: "LLM Agents",
    description: "ESG, Sentiment, Explanation Agents",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Portfolio",
    description: "Risk/Reward Optimization",
    color: "primary",
  },
];

const ArchitectureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="architecture">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(320 100% 60% / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(320 100% 60% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-accent/50 bg-accent/10 text-sm text-accent font-semibold uppercase tracking-wider"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <Terminal className="w-4 h-4" />
            System Architecture
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            MULTI-MODAL AI PIPELINE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
                <div 
                  className={`bg-card/60 backdrop-blur-xl border ${step.color === 'primary' ? 'border-primary/30' : 'border-accent/30'} p-5 flex-1 md:flex-none md:w-[180px] text-center relative glitch-hover`}
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] ${step.color === 'primary' ? 'bg-primary' : 'bg-accent'} opacity-50`} />
                  
                  <div className={`w-14 h-14 mx-auto mb-3 ${step.color === 'primary' ? 'bg-primary/20 border-primary/50 shadow-[0_0_15px_hsl(180_100%_50%/0.3)]' : 'bg-accent/20 border-accent/50 shadow-[0_0_15px_hsl(320_100%_60%/0.3)]'} border flex items-center justify-center`}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                  >
                    <step.icon className={`w-6 h-6 ${step.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm mb-1 uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {index < architectureSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-primary shrink-0 animate-pulse" />
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
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["PyTorch", "XGBoost", "LangChain", "Sentence-BERT", "ChromaDB", "FastAPI", "Streamlit"].map((tech, i) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-secondary/50 border ${i % 2 === 0 ? 'border-primary/30' : 'border-accent/30'} text-sm text-foreground font-medium uppercase tracking-wider`}
                style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
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
