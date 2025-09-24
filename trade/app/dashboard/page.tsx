import { AssetSelector } from "@/components/dashboard/asset-selector";
import { OrderPanel } from "@/components/dashboard/order-panel";
import { TradingChart } from "@/components/dashboard/trading-chart";
import { assets } from "@/lib/data";

export default function TradingPage() {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
      <div className="lg:col-span-2 xl:col-span-3 space-y-4">
        <AssetSelector assets={assets} />
        <TradingChart />
      </div>
      <div className="lg:col-span-1 xl:col-span-1">
        <OrderPanel />
      </div>
    </div>
  );
}
