import { motion } from "framer-motion";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { priceHistory } from "@/data/stockData";

interface PriceChartProps {
  selectedStock?: string;
}

const PriceChart = ({ selectedStock = "TCS" }: PriceChartProps) => {
  const stockKey = selectedStock.replace(".NS", "") as keyof typeof priceHistory[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative bg-card/60 backdrop-blur-xl border border-primary/20 p-6"
      style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-60" />
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-bold text-foreground text-lg uppercase tracking-wider">Price Movement</h3>
          <p className="text-sm text-muted-foreground">6-month historical trend</p>
        </div>
        <div 
          className="flex items-center gap-2 text-xs px-3 py-1.5 bg-primary/20 border border-primary/40"
          style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
        >
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(180_100%_50%)]" />
          <span className="text-primary font-bold uppercase tracking-wider">{selectedStock}</span>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={priceHistory}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(180, 100%, 50%)" stopOpacity={0.4} />
                <stop offset="50%" stopColor="hsl(320, 100%, 60%)" stopOpacity={0.1} />
                <stop offset="95%" stopColor="hsl(180, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 55%)', fontSize: 11, fontFamily: 'Rajdhani' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 55%)', fontSize: 11, fontFamily: 'Rajdhani' }}
              domain={['dataMin - 100', 'dataMax + 100']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(260, 25%, 8%)',
                border: '1px solid hsl(180, 100%, 50%, 0.3)',
                borderRadius: '0',
                boxShadow: '0 0 20px hsl(180, 100%, 50%, 0.2)',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
              labelStyle={{ color: 'hsl(180, 100%, 95%)', fontFamily: 'Orbitron', textTransform: 'uppercase' }}
              itemStyle={{ color: 'hsl(180, 100%, 50%)' }}
            />
            <Area
              type="monotone"
              dataKey={stockKey}
              stroke="hsl(180, 100%, 50%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
              style={{ filter: 'drop-shadow(0 0 8px hsl(180 100% 50% / 0.5))' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PriceChart;
