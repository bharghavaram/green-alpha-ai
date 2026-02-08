import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { PricePoint } from "@/hooks/useLivePrices";

interface MiniSparklineProps {
  data: PricePoint[];
  color?: string;
  height?: number;
}

const MiniSparkline = ({ data, color = "hsl(180, 100%, 50%)", height = 40 }: MiniSparklineProps) => {
  if (!data || data.length < 2) return null;

  // Determine trend for color
  const isUp = data[data.length - 1].price >= data[0].price;
  const lineColor = isUp ? "hsl(150, 100%, 45%)" : "hsl(0, 85%, 60%)";
  const finalColor = color === "auto" ? lineColor : color;

  return (
    <div style={{ height, width: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 2, right: 0, left: 0, bottom: 2 }}>
          <defs>
            <linearGradient id={`spark-${finalColor.replace(/[^a-z0-9]/gi, "")}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={finalColor} stopOpacity={0.3} />
              <stop offset="100%" stopColor={finalColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="price"
            stroke={finalColor}
            strokeWidth={1.5}
            fill={`url(#spark-${finalColor.replace(/[^a-z0-9]/gi, "")})`}
            isAnimationActive={false}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniSparkline;
