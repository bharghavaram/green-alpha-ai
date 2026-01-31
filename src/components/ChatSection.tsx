import { motion } from "framer-motion";
import { MessageSquare, Cpu } from "lucide-react";
import ChatTerminal from "./ChatTerminal";

const ChatSection = () => {
  return (
    <section className="py-20 relative" id="ai-terminal">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-primary/50 bg-primary/10 text-sm text-primary font-semibold uppercase tracking-wider"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <Cpu className="w-4 h-4" />
            AI Interface
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            NEURAL <span className="gradient-text">COMMAND</span> TERMINAL
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Interact with our AI agents directly. Query stock predictions, ESG insights, and portfolio recommendations in real-time.
          </p>
        </motion.div>

        {/* Terminal */}
        <div className="max-w-4xl mx-auto">
          <ChatTerminal />
        </div>

        {/* Feature hints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: MessageSquare, label: "Natural Language Queries" },
            { icon: Cpu, label: "Real-time AI Processing" },
          ].map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-secondary/30 border border-primary/20 text-sm text-muted-foreground"
              style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
            >
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="font-medium">{feature.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChatSection;
