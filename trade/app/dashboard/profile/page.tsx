import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { user, wallet, tradeHistory } from "@/lib/data";
import { DollarSign, Percent, Rocket, TrendingUp } from "lucide-react";

export default function ProfilePage() {
    const totalPnl = tradeHistory.reduce((acc, trade) => acc + trade.pnl, 0);
    const wins = tradeHistory.filter(t => t.pnl > 0).length;
    const losses = tradeHistory.filter(t => t.pnl <= 0).length;
    const winRate = losses === 0 ? 100 : (wins / (wins + losses)) * 100;

    return (
        <div className="space-y-6">
             <h1 className="text-3xl font-bold">Profile & Wallet</h1>
            <Card>
                <CardHeader className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                        <Rocket className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="text-center md:text-left">
                        <CardTitle className="text-2xl">{user.name}</CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                   {/* Additional profile info could go here */}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Virtual Wallet</CardTitle>
                    <CardDescription>Your simulated trading funds.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Current Balance</p>
                            <p className="text-2xl font-semibold">${(wallet.balance + totalPnl).toLocaleString()}</p>
                        </div>
                    </div>
                     <div className="flex items-center space-x-4 rounded-md border p-4">
                        <TrendingUp className="h-8 w-8 text-green-500" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Total Profit/Loss</p>
                            <p className={`text-2xl font-semibold ${totalPnl >= 0 ? 'text-green-500' : 'text-red-500'}`}>${totalPnl.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-y-4 rounded-md border p-4">
                        <Percent className="h-8 w-8 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Win Rate</p>
                            <p className="text-2xl font-semibold">{winRate.toFixed(1)}%</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
