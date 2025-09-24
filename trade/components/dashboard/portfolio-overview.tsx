'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { portfolioPerformance, tradeHistory, wallet } from "@/lib/data"
import { useTheme } from "next-themes"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

export function PortfolioOverview() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const totalPnl = tradeHistory.reduce((acc, trade) => acc + trade.pnl, 0);
  const wins = tradeHistory.filter(t => t.pnl > 0).length;
  const losses = tradeHistory.filter(t => t.pnl <= 0).length;
  const winRate = losses === 0 ? 100 : (wins / (wins + losses)) * 100;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Balance</CardTitle>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${(wallet.balance + totalPnl).toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Initial balance: ${wallet.balance.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total P/L</CardTitle>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${totalPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            ${totalPnl.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">Across all trades</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{winRate.toFixed(1)}%</div>
          <p className="text-xs text-muted-foreground">{wins} wins / {losses} losses</p>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolioPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "hsl(var(--border))" : "hsl(var(--border))"} />
            <XAxis dataKey="date" tick={{ fill: isDarkMode ? 'white' : 'black', fontSize: 12 }} />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} tick={{ fill: isDarkMode ? 'white' : 'black', fontSize: 12 }} />
            <Tooltip
                contentStyle={{
                    backgroundColor: isDarkMode ? 'hsl(var(--card))' : 'white',
                    borderColor: 'hsl(var(--border))',
                }}
            />
            <Line type="monotone" dataKey="balance" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
