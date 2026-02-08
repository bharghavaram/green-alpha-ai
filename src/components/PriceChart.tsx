import { motion } from "framer-motion";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { PricePoint } from "@/hooks/useLivePrices";

interface PriceChartProps {
  selectedStock?: string;
  liveData?: PricePoint[];
}

const PriceChart = ({ selectedStock = "TCS", liveData }: PriceChartProps) => {
  const displayData = liveData && liveData.length > 0 ? liveData : [];

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
          <p className="text-sm text-muted-foreground">
            {liveData ? "Live streaming • Updates every 2s" : "6-month historical trend"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {liveData && (
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success shadow-[0_0_8px_hsl(150_100%_45%)]" />
              </span>
              <span className="text-[10px] text-success font-bold uppercase tracking-wider">Live</span>
            </div>
          )}
          <div 
            className="flex items-center gap-2 text-xs px-3 py-1.5 bg-primary/20 border border-primary/40"
            style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}
          >
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(180_100%_50%)]" />
            <span className="text-primary font-bold uppercase tracking-wider">{selectedStock}</span>
          </div>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={displayData}>
            <defs>
              <linearGradient id="colorPriceLive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(180, 100%, 50%)" stopOpacity={0.4} />
                <stop offset="50%" stopColor="hsl(320, 100%, 60%)" stopOpacity={0.1} />
                <stop offset="95%" stopColor="hsl(180, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 55%)', fontSize: 10, fontFamily: 'Rajdhani' }}
              interval="preserveStartEnd"
              minTickGap={40}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 55%)', fontSize: 11, fontFamily: 'Rajdhani' }}
              domain={['dataMin - 20', 'dataMax + 20']}
              width={60}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(260, 25%, 8%)',
                border: '1px solid hsl(180, 100%, 50%, 0.3)',
                borderRadius: '0',
                boxShadow: '0 0 20px hsl(180, 100%, 50%, 0.2)',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
              labelStyle={{ color: 'hsl(180, 100%, 95%)', fontFamily: 'Orbitron', textTransform: 'uppercase', fontSize: 10 }}
              itemStyle={{ color: 'hsl(180, 100%, 50%)' }}
              formatter={(value: number) => [`₹${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`, 'Price']}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="hsl(180, 100%, 50%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPriceLive)"
              isAnimationActive={false}
              dot={false}
              style={{ filter: 'drop-shadow(0 0 8px hsl(180 100% 50% / 0.5))' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PriceChart;
