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
import { Leaf, TrendingUp, Brain, Target, ChevronRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedStock, setSelectedStock] = useState("TCS.NS");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <HeroSection />

      {/* Architecture */}
      <ArchitectureSection />

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary font-medium">
              <TrendingUp className="w-4 h-4" />
              Live Dashboard
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Stock Predictions & ESG Insights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time AI predictions with sustainability scoring for informed investment decisions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Stock Cards */}
            <div className="lg:col-span-1 space-y-4" id="predictions">
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
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
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
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
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
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
      <section className="py-20 bg-secondary/20" id="agents-full">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-accent/30 bg-accent/10 text-sm text-accent font-medium">
              <Brain className="w-4 h-4" />
              LLM Agents
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Intelligent Agent Network
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hero-glow opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Invest Sustainably?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get started with Green Alpha AI and make data-driven, ESG-conscious investment decisions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                Launch Full Dashboard
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 border-border hover:bg-secondary">
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-foreground">
                Green<span className="text-primary">Alpha</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Green Alpha AI. Built for sustainable investing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
