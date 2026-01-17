import { motion } from "framer-motion";
import { Zap, Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Dashboard", href: "#dashboard" },
    { label: "Predictions", href: "#predictions" },
    { label: "ESG Analysis", href: "#esg" },
    { label: "AI Agents", href: "#agents" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/90 backdrop-blur-xl"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div 
              className="w-10 h-10 bg-primary/20 border border-primary/50 flex items-center justify-center shadow-[0_0_15px_hsl(180_100%_50%/0.3)] group-hover:shadow-[0_0_25px_hsl(180_100%_50%/0.5)] transition-shadow"
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider">
              <span className="text-foreground">GREEN</span>
              <span className="text-primary neon-text">ALPHA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary uppercase tracking-wider font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-accent uppercase tracking-wider text-sm"
            >
              Docs
            </Button>
            <Button 
              size="sm" 
              onClick={() => scrollToSection('#dashboard')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider font-bold shadow-[0_0_20px_hsl(180_100%_50%/0.3)] hover:shadow-[0_0_30px_hsl(180_100%_50%/0.5)] transition-all"
            >
              <Terminal className="w-4 h-4 mr-2" />
              Launch
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2 border border-primary/30 hover:border-primary/60 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary/20 py-4 bg-card/50 backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 uppercase tracking-wider font-medium transition-colors border-l-2 border-transparent hover:border-primary"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4 px-4">
              <Button 
                variant="outline" 
                className="w-full border-accent/50 text-accent hover:bg-accent/10 uppercase tracking-wider"
              >
                Documentation
              </Button>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider font-bold shadow-[0_0_20px_hsl(180_100%_50%/0.3)]"
                onClick={() => scrollToSection('#dashboard')}
              >
                <Terminal className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
