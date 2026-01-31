import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain, 
  TrendingUp, 
  Leaf, 
  Zap, 
  Database, 
  Network, 
  MessageSquare, 
  BarChart3,
  ArrowLeft,
  Terminal,
  Cpu,
  FileText,
  Shield,
  Target,
  Layers,
  GitBranch
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Documentation = () => {
  const sections = [
    {
      id: "overview",
      title: "System Overview",
      icon: Cpu,
      content: `Green Alpha AI is a cutting-edge multi-modal AI platform designed for intelligent stock market analysis. 
      It combines financial time-series prediction with ESG (Environmental, Social, and Governance) document analysis, 
      news sentiment processing, and LLM-powered reasoning agents to deliver comprehensive investment insights.`,
      features: [
        "Real-time stock price predictions",
        "ESG sustainability scoring",
        "Sentiment analysis from news sources",
        "Multi-agent reasoning system"
      ]
    },
    {
      id: "architecture",
      title: "System Architecture",
      icon: Network,
      content: `The platform operates on a dual-pipeline architecture designed for maximum accuracy and insight generation.`,
      subsections: [
        {
          title: "Time-Series Pipeline",
          description: "Handles all financial data processing and price prediction",
          items: [
            "XGBoost ensemble models for price regression",
            "LSTM neural networks for movement classification",
            "Technical indicator feature engineering",
            "Rolling window prediction with confidence intervals"
          ]
        },
        {
          title: "NLP/RAG Pipeline",
          description: "Processes textual data for sentiment and ESG insights",
          items: [
            "SBERT embeddings for semantic understanding",
            "ChromaDB vector store for efficient retrieval",
            "ESG report parsing and scoring",
            "News sentiment aggregation"
          ]
        }
      ]
    },
    {
      id: "models",
      title: "AI Models",
      icon: Brain,
      content: `Our system employs state-of-the-art machine learning models optimized for financial prediction.`,
      models: [
        {
          name: "XGBoost Regressor",
          purpose: "Price target prediction",
          accuracy: "94.2%",
          description: "Gradient boosted decision trees trained on historical price data with 50+ technical indicators"
        },
        {
          name: "LSTM Classifier",
          purpose: "Movement direction",
          accuracy: "87.5%",
          description: "Long Short-Term Memory networks capturing temporal dependencies in market data"
        },
        {
          name: "SBERT Encoder",
          purpose: "Text embeddings",
          accuracy: "N/A",
          description: "Sentence-BERT model for encoding ESG reports and news articles into semantic vectors"
        },
        {
          name: "LLM Agents",
          purpose: "Reasoning & synthesis",
          accuracy: "N/A",
          description: "Large language models for multi-step reasoning and insight generation"
        }
      ]
    },
    {
      id: "esg",
      title: "ESG Scoring",
      icon: Leaf,
      content: `Our ESG scoring system provides comprehensive sustainability metrics for informed investment decisions.`,
      categories: [
        {
          name: "Environmental",
          metrics: ["Carbon footprint", "Energy efficiency", "Waste management", "Climate risk exposure"],
          weight: "40%"
        },
        {
          name: "Social",
          metrics: ["Labor practices", "Community impact", "Diversity & inclusion", "Human rights"],
          weight: "30%"
        },
        {
          name: "Governance",
          metrics: ["Board independence", "Executive compensation", "Shareholder rights", "Transparency"],
          weight: "30%"
        }
      ]
    },
    {
      id: "agents",
      title: "LLM Agents",
      icon: MessageSquare,
      content: `Four specialized AI agents work in concert to provide comprehensive market analysis.`,
      agents: [
        {
          name: "Research Agent",
          role: "Data collection and fact verification",
          capabilities: ["Web scraping", "Document parsing", "Data validation", "Source credibility scoring"]
        },
        {
          name: "Analysis Agent",
          role: "Deep financial analysis",
          capabilities: ["Fundamental analysis", "Technical pattern recognition", "Competitor comparison", "Risk assessment"]
        },
        {
          name: "ESG Agent",
          role: "Sustainability evaluation",
          capabilities: ["ESG report parsing", "Controversy detection", "Green initiative tracking", "Regulatory compliance"]
        },
        {
          name: "Strategy Agent",
          role: "Investment recommendations",
          capabilities: ["Portfolio optimization", "Risk-reward balancing", "Entry/exit timing", "Position sizing"]
        }
      ]
    },
    {
      id: "data",
      title: "Data Sources",
      icon: Database,
      content: `Green Alpha AI aggregates data from multiple reliable sources to ensure comprehensive market coverage.`,
      sources: [
        { name: "Market Data", items: ["NSE/BSE real-time feeds", "Historical OHLCV data", "Options chain data"] },
        { name: "Fundamentals", items: ["Quarterly earnings reports", "Annual financial statements", "Analyst estimates"] },
        { name: "ESG Data", items: ["Corporate sustainability reports", "Third-party ESG ratings", "Regulatory filings"] },
        { name: "News & Sentiment", items: ["Financial news APIs", "Social media sentiment", "Analyst commentary"] }
      ]
    },
    {
      id: "api",
      title: "API Reference",
      icon: Terminal,
      content: `Integrate Green Alpha AI into your applications with our comprehensive API.`,
      endpoints: [
        { method: "GET", path: "/api/v1/predict/{symbol}", description: "Get price prediction for a stock" },
        { method: "GET", path: "/api/v1/esg/{symbol}", description: "Get ESG scores for a company" },
        { method: "POST", path: "/api/v1/analyze", description: "Submit text for sentiment analysis" },
        { method: "GET", path: "/api/v1/agents/insights", description: "Get latest agent insights" },
        { method: "POST", path: "/api/v1/chat", description: "Interactive chat with AI agents" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background scanlines">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-primary hover:text-primary hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
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
                <span className="text-accent ml-2">DOCS</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-primary/50 bg-primary/10 text-sm text-primary font-semibold uppercase tracking-wider"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
            >
              <FileText className="w-4 h-4" />
              Documentation v1.0
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="text-foreground">SYSTEM</span>{" "}
              <span className="gradient-text">DOCUMENTATION</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete technical documentation for the Green Alpha AI multi-modal investment intelligence platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-[73px] z-40 border-b border-primary/20 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all whitespace-nowrap"
                style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
              >
                <section.icon className="w-4 h-4" />
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="scroll-mt-32"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 bg-primary/20 border border-primary/50 flex items-center justify-center"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                >
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-black text-foreground tracking-tight">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div 
                className="p-6 bg-card/50 border border-primary/20 backdrop-blur-sm"
                style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
              >
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {section.content}
                </p>

                {/* Features List */}
                {section.features && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {section.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 border border-primary/10">
                        <Target className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subsections */}
                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((sub, i) => (
                      <div key={i} className="p-4 bg-secondary/30 border border-accent/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Layers className="w-4 h-4 text-accent" />
                          <h4 className="font-display font-bold text-foreground">{sub.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{sub.description}</p>
                        <ul className="space-y-2">
                          {sub.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                              <GitBranch className="w-3 h-3 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Models */}
                {section.models && (
                  <div className="grid gap-4">
                    {section.models.map((model, i) => (
                      <div 
                        key={i} 
                        className="p-4 bg-secondary/30 border border-primary/20"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display font-bold text-foreground">{model.name}</h4>
                          {model.accuracy !== "N/A" && (
                            <span className="px-3 py-1 bg-accent/20 border border-accent/50 text-accent text-xs font-bold">
                              {model.accuracy} ACC
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-primary uppercase tracking-wider mb-2">{model.purpose}</p>
                        <p className="text-sm text-muted-foreground">{model.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* ESG Categories */}
                {section.categories && (
                  <div className="grid md:grid-cols-3 gap-4">
                    {section.categories.map((cat, i) => (
                      <div 
                        key={i} 
                        className="p-4 bg-secondary/30 border border-accent/20"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-display font-bold text-accent">{cat.name}</h4>
                          <span className="text-xs text-primary font-bold">{cat.weight}</span>
                        </div>
                        <ul className="space-y-2">
                          {cat.metrics.map((metric, j) => (
                            <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Shield className="w-3 h-3 text-accent/60" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Agents */}
                {section.agents && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.agents.map((agent, i) => (
                      <div 
                        key={i} 
                        className="p-4 bg-secondary/30 border border-primary/20"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-4 h-4 text-primary" />
                          <h4 className="font-display font-bold text-foreground">{agent.name}</h4>
                        </div>
                        <p className="text-xs text-accent uppercase tracking-wider mb-3">{agent.role}</p>
                        <ul className="space-y-1">
                          {agent.capabilities.map((cap, j) => (
                            <li key={j} className="text-xs text-muted-foreground">• {cap}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Data Sources */}
                {section.sources && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.sources.map((source, i) => (
                      <div key={i} className="p-4 bg-secondary/30 border border-primary/20">
                        <h4 className="font-display font-bold text-primary mb-3">{source.name}</h4>
                        <ul className="space-y-2">
                          {source.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Database className="w-3 h-3 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* API Endpoints */}
                {section.endpoints && (
                  <div className="space-y-3">
                    {section.endpoints.map((endpoint, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-4 p-3 bg-secondary/50 border border-primary/10 font-mono text-sm"
                      >
                        <span className={`px-2 py-1 text-xs font-bold ${
                          endpoint.method === 'GET' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-primary flex-1">{endpoint.path}</code>
                        <span className="text-muted-foreground text-xs hidden sm:block">{endpoint.description}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            © 2024 Green Alpha AI. Documentation v1.0
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;
