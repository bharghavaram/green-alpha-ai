import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Leaf, Brain, TrendingUp, Zap, ChevronRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToDashboard = () => {
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden scanlines">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/5" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern - Cyberpunk style */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(180 100% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(180 100% 50% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Horizontal Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 border border-primary/50 bg-primary/10 backdrop-blur-sm"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_10px_hsl(180_100%_50%)]" />
            </span>
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">System Online • AI-Powered Trading</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
          >
            <span className="text-foreground block">NEXT-GEN</span>
            <span className="gradient-text block">GREEN ALPHA AI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light"
          >
            Multi-modal neural system fusing <span className="text-primary">stock predictions</span>, 
            <span className="text-accent"> ESG sustainability</span>, and <span className="text-foreground">LLM agents</span> for the future of investing.
          </motion.p>

          {/* What's New Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 mb-12 border border-accent/30 bg-accent/5 backdrop-blur-sm rounded-sm"
            style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent border border-accent/50 px-2 py-0.5 bg-accent/10">New</span>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">PAX Gold</span> & <span className="text-foreground font-semibold">PAX Silver</span> tokenized assets now live with <span className="text-primary font-semibold">USD ↔ INR</span> conversion
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-16"
          >
            <Button 
              size="lg" 
              onClick={scrollToDashboard}
              className="group gap-3 text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider uppercase cyber-btn shadow-[0_0_30px_hsl(180_100%_50%/0.4)] hover:shadow-[0_0_50px_hsl(180_100%_50%/0.6)] transition-all duration-300"
            >
              <Terminal className="w-5 h-5" />
              Launch Dashboard
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/docs')}
              className="gap-3 text-lg px-10 py-7 border-2 border-accent/50 hover:border-accent text-accent hover:bg-accent/10 font-bold tracking-wider uppercase cyber-btn transition-all duration-300"
            >
              View Docs
            </Button>
          </motion.div>

          {/* Get Started Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <button 
              onClick={scrollToDashboard}
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 group"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-foreground font-semibold tracking-wide">GET STARTED NOW</span>
              <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { icon: Brain, label: "XGBoost + LSTM", color: "primary" },
              { icon: Leaf, label: "ESG Scoring", color: "accent" },
              { icon: TrendingUp, label: "Price Predict", color: "primary" },
              { icon: Zap, label: "LLM Agents", color: "accent" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`flex items-center gap-3 px-5 py-3 bg-secondary/50 border ${item.color === 'primary' ? 'border-primary/30' : 'border-accent/30'} text-sm font-medium tracking-wide uppercase glitch-hover`}
                style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
              >
                <item.icon className={`w-4 h-4 ${item.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                <span className="text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
