import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { portfolioAllocation } from "@/data/stockData";

const COLORS = [
  'hsl(160, 84%, 39%)',
  'hsl(172, 66%, 50%)',
  'hsl(199, 89%, 48%)',
  'hsl(45, 93%, 47%)',
  'hsl(280, 65%, 60%)',
];

const PortfolioChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-foreground text-lg">Portfolio Allocation</h3>
          <p className="text-sm text-muted-foreground">ESG-Weighted Distribution</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-[180px] w-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioAllocation}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {portfolioAllocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(220, 18%, 10%)',
                  border: '1px solid hsl(220, 14%, 18%)',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: 'hsl(210, 40%, 98%)' }}
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
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-foreground font-medium">{item.name}</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-muted-foreground">{item.value}%</span>
                <span className="text-primary font-medium">ESG {item.esg}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioChart;
