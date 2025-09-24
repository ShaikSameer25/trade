'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { wallet } from "@/lib/data"
import { cn } from "@/lib/utils"

export function OrderPanel() {
  const { toast } = useToast()

  const handleOrder = (side: 'Buy' | 'Sell') => {
    toast({
      title: 'Order Placed',
      description: `Your ${side} order has been successfully submitted.`,
    })
  }

  const renderOrderForm = (side: 'Buy' | 'Sell') => (
    <div className="space-y-4">
      <Tabs defaultValue="market">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="limit">Limit</TabsTrigger>
          <TabsTrigger value="stop">Stop</TabsTrigger>
        </TabsList>
        <TabsContent value="market" className="space-y-4 pt-4">
          <div>
            <Label htmlFor="amount-market">Amount (USD)</Label>
            <Input id="amount-market" placeholder="e.g., 100" />
          </div>
        </TabsContent>
        <TabsContent value="limit" className="space-y-4 pt-4">
          <div>
            <Label htmlFor="price-limit">Price (USD)</Label>
            <Input id="price-limit" placeholder="e.g., 68000" />
          </div>
          <div>
            <Label htmlFor="amount-limit">Amount (USD)</Label>
            <Input id="amount-limit" placeholder="e.g., 100" />
          </div>
           <div>
            <Label htmlFor="take-profit-limit">Take Profit</Label>
            <Input id="take-profit-limit" placeholder="e.g., 70000" />
          </div>
           <div>
            <Label htmlFor="stop-loss-limit">Stop Loss</Label>
            <Input id="stop-loss-limit" placeholder="e.g., 67000" />
          </div>
        </TabsContent>
        <TabsContent value="stop" className="space-y-4 pt-4">
           <div>
            <Label htmlFor="price-stop">Stop Price (USD)</Label>
            <Input id="price-stop" placeholder="e.g., 67500" />
          </div>
          <div>
            <Label htmlFor="amount-stop">Amount (USD)</Label>
            <Input id="amount-stop" placeholder="e.g., 100" />
          </div>
           <div>
            <Label htmlFor="take-profit-stop">Take Profit</Label>
            <Input id="take-profit-stop" placeholder="e.g., 70000" />
          </div>
           <div>
            <Label htmlFor="stop-loss-stop">Stop Loss</Label>
            <Input id="stop-loss-stop" placeholder="e.g., 67000" />
          </div>
        </TabsContent>
      </Tabs>
      <Button
        onClick={() => handleOrder(side)}
        className={cn("w-full", side === 'Buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700')}
      >
        {side} BTC
      </Button>
    </div>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Place Order</CardTitle>
        <p className="text-sm text-muted-foreground">
          Balance: ${wallet.balance.toLocaleString()}
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value="buy" className="pt-4">
            {renderOrderForm('Buy')}
          </TabsContent>
          <TabsContent value="sell" className="pt-4">
            {renderOrderForm('Sell')}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
