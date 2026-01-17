import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import StockCard from "@/components/StockCard";
import ESGScoreCard from "@/components/ESGScoreCard";
import AgentInsightCard from "@/components/AgentInsightCard";
import PriceChart from "@/components/PriceChart";
import PortfolioChart from "@/components/PortfolioChart";
import { stocksData, esgMetrics, agentInsights } from "@/data/stockData";
import { Zap, TrendingUp, Brain, Target, ChevronRight, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedStock, setSelectedStock] = useState("TCS.NS");

  return (
    <div className="min-h-screen bg-background scanlines">
      <Navbar />
      
      {/* Hero */}
      <HeroSection />

      {/* Architecture */}
      <ArchitectureSection />

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 relative">
        {/* Section accent lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6">
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
              <TrendingUp className="w-4 h-4" />
              Live Dashboard
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              STOCK PREDICTIONS & ESG INSIGHTS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real-time AI predictions with sustainability scoring for informed investment decisions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Stock Cards */}
            <div className="lg:col-span-1 space-y-4" id="predictions">
              <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                <Target className="w-5 h-5 text-primary" />
                Stock Predictions
              </h3>
              {stocksData.map((stock, index) => (
                <StockCard
                  key={stock.symbol}
                  stock={stock}
                  index={index}
                  isSelected={selectedStock === stock.symbol}
                  onSelect={setSelectedStock}
                />
              ))}
            </div>

            {/* Middle Column - Charts */}
            <div className="lg:col-span-1 space-y-6">
              <PriceChart selectedStock={selectedStock} />
              <PortfolioChart />
            </div>

            {/* Right Column - ESG & Agents */}
            <div className="lg:col-span-1 space-y-6">
              {/* ESG Scores */}
              <div id="esg">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <Zap className="w-5 h-5 text-accent" />
                  ESG Sustainability
                </h3>
                <div className="space-y-4">
                  {esgMetrics.map((metric, index) => (
                    <ESGScoreCard key={metric.category} metric={metric} index={index} />
                  ))}
                </div>
              </div>

              {/* AI Agents */}
              <div id="agents">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Agent Insights
                </h3>
                <div className="space-y-4">
                  {agentInsights.slice(0, 2).map((insight, index) => (
                    <AgentInsightCard key={insight.id} insight={insight} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full AI Agents Section */}
      <section className="py-20 bg-secondary/30 relative" id="agents-full">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-accent/50 bg-accent/10 text-sm text-accent font-semibold uppercase tracking-wider"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
            >
              <Brain className="w-4 h-4" />
              LLM Agents
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
              INTELLIGENT AGENT NETWORK
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Four specialized AI agents working together to provide comprehensive market analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {agentInsights.map((insight, index) => (
              <AgentInsightCard key={insight.id} insight={insight} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        
        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-accent/30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
              READY TO <span className="gradient-text">DOMINATE</span> THE MARKET?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Get started with Green Alpha AI and make data-driven, ESG-conscious investment decisions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="gap-3 px-10 py-7 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider cyber-btn shadow-[0_0_30px_hsl(180_100%_50%/0.4)] hover:shadow-[0_0_50px_hsl(180_100%_50%/0.6)] transition-all"
              >
                <Terminal className="w-5 h-5" />
                Launch Full Dashboard
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-3 px-10 py-7 text-lg border-2 border-accent/50 hover:border-accent text-accent hover:bg-accent/10 font-bold uppercase tracking-wider cyber-btn transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20 relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 bg-primary/20 border border-primary/50 flex items-center justify-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider">
                <span className="text-foreground">GREEN</span>
                <span className="text-primary">ALPHA</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              © 2024 Green Alpha AI. Built for the future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
