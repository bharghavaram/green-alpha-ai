import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Bot, User, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const stockResponses: Record<string, string> = {
  tcs: ">>> ANALYZING TCS.NS...\n\n🔹 Current Price: ₹4,125.50 (+1.93%)\n🔹 AI Prediction: BULLISH ↑\n🔹 Confidence: 87%\n🔹 ESG Score: 82/100\n\n📊 Technical Analysis:\n- RSI: 58.2 (Neutral)\n- MACD: Bullish crossover detected\n- Support: ₹4,050 | Resistance: ₹4,200\n\n🌿 ESG Insight: TCS leads in carbon neutrality with 15% renewable energy increase this quarter.",
  infy: ">>> ANALYZING INFY.NS...\n\n🔹 Current Price: ₹1,876.30 (-1.24%)\n🔹 AI Prediction: BEARISH ↓\n🔹 Confidence: 73%\n🔹 ESG Score: 78/100\n\n📊 Technical Analysis:\n- RSI: 42.1 (Slightly Oversold)\n- MACD: Bearish divergence\n- Support: ₹1,820 | Resistance: ₹1,920\n\n⚠️ Alert: Short-term correction expected. LSTM model suggests 2.3% recovery potential.",
  reliance: ">>> ANALYZING RELIANCE.NS...\n\n🔹 Current Price: ₹2,945.80 (+1.57%)\n🔹 AI Prediction: BULLISH ↑\n🔹 Confidence: 81%\n🔹 ESG Score: 65/100\n\n📊 Technical Analysis:\n- RSI: 62.4 (Moderately Bullish)\n- MACD: Strong momentum\n- Support: ₹2,880 | Resistance: ₹3,000\n\n🌿 ESG Alert: Green hydrogen investments driving positive sentiment across 47 news sources.",
  portfolio: ">>> PORTFOLIO OPTIMIZATION REPORT\n\n📈 Recommended Allocation:\n├─ TCS: 30% (High ESG, Strong Growth)\n├─ INFY: 25% (Value Play)\n├─ RELIANCE: 20% (Momentum)\n├─ HDFC: 15% (Stability)\n└─ WIPRO: 10% (Speculative)\n\n🎯 Expected Sharpe Ratio: 1.42\n🌿 Portfolio ESG Score: 74.6/100\n⚡ Risk Level: MODERATE\n\n💡 Suggestion: Reduce WIPRO by 5%, reallocate to TCS for improved ESG-weighted returns.",
  esg: ">>> ESG SUSTAINABILITY REPORT\n\n🌍 Environmental Score: 78/100\n👥 Social Score: 85/100\n🏛️ Governance Score: 72/100\n\n📊 Top ESG Performers:\n1. TCS (82) - Carbon neutral leader\n2. INFY (78) - Strong diversity metrics\n3. WIPRO (76) - Governance improvements\n\n⚠️ Watch List:\n- RELIANCE (65) - Environmental concerns\n\n🔮 Trend: ESG-focused portfolios outperforming by 12% YTD.",
  default: ">>> SYSTEM READY\n\n🤖 Green Alpha AI Terminal v2.0\n\nAvailable Commands:\n├─ Stock names: TCS, INFY, RELIANCE, HDFC, WIPRO\n├─ 'portfolio' - Get optimization suggestions\n├─ 'esg' - View sustainability report\n└─ 'predict [stock]' - Get AI prediction\n\n💡 Try asking:\n- \"Analyze TCS\"\n- \"What's your prediction for RELIANCE?\"\n- \"Show me ESG scores\"\n- \"Optimize my portfolio\"",
};

const getAIResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes("tcs") || lowerQuery.includes("tata")) {
    return stockResponses.tcs;
  } else if (lowerQuery.includes("infy") || lowerQuery.includes("infosys")) {
    return stockResponses.infy;
  } else if (lowerQuery.includes("reliance")) {
    return stockResponses.reliance;
  } else if (lowerQuery.includes("portfolio") || lowerQuery.includes("allocat") || lowerQuery.includes("optimize")) {
    return stockResponses.portfolio;
  } else if (lowerQuery.includes("esg") || lowerQuery.includes("sustain") || lowerQuery.includes("environment")) {
    return stockResponses.esg;
  } else if (lowerQuery.includes("help") || lowerQuery.includes("command")) {
    return stockResponses.default;
  }
  
  return `>>> PROCESSING: "${query}"\n\n🔍 Searching knowledge base...\n\n⚠️ Query not recognized. Type 'help' for available commands.\n\n💡 Tip: Ask about specific stocks (TCS, INFY, RELIANCE) or request portfolio/ESG analysis.`;
};

const TypingText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 8);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  return (
    <span className="whitespace-pre-wrap">
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />
      )}
    </span>
  );
};

const ChatTerminal = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: stockResponses.default,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getAIResponse(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Terminal Container */}
      <div 
        className="bg-card/80 backdrop-blur-xl border border-primary/30 overflow-hidden"
        style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-primary/10 border-b border-primary/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-warning/80" />
            <div className="w-3 h-3 rounded-full bg-success/80" />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-display text-sm text-primary tracking-wider">GREEN_ALPHA_AI_TERMINAL</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Zap className="w-3 h-3 text-primary animate-pulse" />
            <span className="font-mono">ONLINE</span>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="h-[400px] p-4" ref={scrollRef}>
          <div className="space-y-4 font-mono text-sm">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: message.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div 
                      className="w-8 h-8 bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                    >
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[80%] p-3 ${
                      message.role === "user" 
                        ? "bg-accent/20 border border-accent/50 text-accent" 
                        : "bg-secondary/50 border border-primary/30 text-foreground"
                    }`}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                  >
                    {message.role === "assistant" && index === messages.length - 1 && isTyping ? (
                      <TypingText 
                        text={message.content} 
                        onComplete={() => setIsTyping(false)} 
                      />
                    ) : (
                      <span className="whitespace-pre-wrap">{message.content}</span>
                    )}
                  </div>
                  
                  {message.role === "user" && (
                    <div 
                      className="w-8 h-8 bg-accent/20 border border-accent/50 flex items-center justify-center flex-shrink-0"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                    >
                      <User className="w-4 h-4 text-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && messages[messages.length - 1]?.role === "user" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3 items-center"
              >
                <div 
                  className="w-8 h-8 bg-primary/20 border border-primary/50 flex items-center justify-center"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                >
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-primary/30 bg-card/50">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary font-mono text-sm">{">"}</span>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter command or ask about stocks..."
                disabled={isTyping}
                className="pl-8 bg-background/50 border-primary/30 text-foreground placeholder:text-muted-foreground font-mono focus:border-primary focus:ring-primary/50"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              />
            </div>
            <Button 
              type="submit" 
              disabled={isTyping || !input.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider cyber-btn"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            Type 'help' for available commands • Ask about TCS, INFY, RELIANCE, ESG, or Portfolio
          </p>
        </form>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-accent/50" />
    </motion.div>
  );
};

export default ChatTerminal;
