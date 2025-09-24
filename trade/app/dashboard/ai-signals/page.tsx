import { AiSignalGenerator } from "@/components/dashboard/ai-signal-generator";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AiSignalsPage() {
  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">AI-Powered Trading Signals</CardTitle>
          <CardDescription>
            Leverage generative AI to get potential market insights. Select an asset, provide market context, and define your risk appetite to generate a trading signal. This tool is for educational purposes only.
          </CardDescription>
        </CardHeader>
      </Card>
      <AiSignalGenerator />
    </div>
  );
}
