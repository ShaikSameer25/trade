import { PortfolioOverview } from "@/components/dashboard/portfolio-overview";
import { TradeHistory } from "@/components/dashboard/trade-history";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <PortfolioOverview />
      <TradeHistory />
    </div>
  );
}
