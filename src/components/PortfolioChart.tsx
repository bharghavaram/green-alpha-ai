import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { portfolioAllocation } from "@/data/stockData";

const COLORS = [
  'hsl(180, 100%, 50%)',  // Cyan
  'hsl(320, 100%, 60%)',  // Magenta
  'hsl(150, 100%, 45%)',  // Green
  'hsl(45, 100%, 55%)',   // Yellow
  'hsl(280, 100%, 60%)',  // Purple
];

const PortfolioChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative bg-card/60 backdrop-blur-xl border border-accent/20 p-6"
      style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-primary to-accent opacity-60" />
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-bold text-foreground text-lg uppercase tracking-wider">Portfolio Allocation</h3>
          <p className="text-sm text-muted-foreground">ESG-Weighted Distribution</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-[180px] w-[180px] relative">
          {/* Glow effect behind pie chart */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioAllocation}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                stroke="hsl(260, 30%, 4%)"
                strokeWidth={2}
              >
                {portfolioAllocation.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    style={{ filter: `drop-shadow(0 0 8px ${COLORS[index % COLORS.length]})` }}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(260, 25%, 8%)',
                  border: '1px solid hsl(320, 100%, 60%, 0.3)',
                  borderRadius: '0',
                  boxShadow: '0 0 20px hsl(320, 100%, 60%, 0.2)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}
                labelStyle={{ color: 'hsl(180, 100%, 95%)', fontFamily: 'Orbitron' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-2">
          {portfolioAllocation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3"
                  style={{ 
                    backgroundColor: COLORS[index],
                    boxShadow: `0 0 8px ${COLORS[index]}`,
                    clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))'
                  }}
                />
                <span className="text-foreground font-semibold uppercase tracking-wide text-xs">{item.name}</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-muted-foreground font-mono">{item.value}%</span>
                <span className="text-accent font-bold">ESG {item.esg}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioChart;
