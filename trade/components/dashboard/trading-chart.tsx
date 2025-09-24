'use client'

import { Bar, CartesianGrid, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ErrorBar, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { chartData } from "@/lib/data"
import { useTheme } from "next-themes"

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-2 bg-card border rounded-md shadow-lg text-card-foreground text-sm">
        <p className="font-bold">{label}</p>
        <p>Open: <span className="font-mono">{data.open.toLocaleString()}</span></p>
        <p>High: <span className="font-mono">{data.high.toLocaleString()}</span></p>
        <p>Low: <span className="font-mono">{data.low.toLocaleString()}</span></p>
        <p>Close: <span className="font-mono">{data.close.toLocaleString()}</span></p>
      </div>
    );
  }
  return null;
};

export function TradingChart() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const candlestickData = chartData.map(d => ({
    ...d,
    body: [d.open, d.close],
    wick: [d.low, d.high]
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>BTC/USD Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={candlestickData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "hsl(var(--border))" : "hsl(var(--border))"} />
              <XAxis dataKey="date" tick={{ fill: isDarkMode ? 'white' : 'black', fontSize: 12 }} />
              <YAxis 
                domain={['dataMin - 1000', 'dataMax + 1000']} 
                orientation="right" 
                tickFormatter={(value) => value.toLocaleString()} 
                tick={{ fill: isDarkMode ? 'white' : 'black', fontSize: 12 }} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="body" barSize={10}>
                {candlestickData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.close >= entry.open ? '#22c55e' : '#ef4444'} />
                ))}
                 <ErrorBar dataKey="wick" width={2} strokeWidth={1} stroke={isDarkMode ? 'white' : 'black'} direction="y" />
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
