'use client'

import { useState } from "react"
import type { Asset } from "@/lib/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type AssetSelectorProps = {
  assets: Asset[]
}

export function AssetSelector({ assets }: AssetSelectorProps) {
  const [selectedAsset, setSelectedAsset] = useState<Asset>(assets[0])

  const handleSelect = (assetId: string) => {
    const asset = assets.find(a => a.id === assetId)
    if (asset) {
      setSelectedAsset(asset)
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <Select defaultValue={selectedAsset.id} onValueChange={handleSelect}>
            <SelectTrigger className="w-[180px] text-lg font-semibold border-0 shadow-none focus:ring-0">
              <SelectValue placeholder="Select asset" />
            </SelectTrigger>
            <SelectContent>
              {assets.map(asset => (
                <SelectItem key={asset.id} value={asset.id}>{asset.name} ({asset.symbol})</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
                <div className="text-muted-foreground">Price</div>
                <div className="text-lg font-bold">${selectedAsset.price.toLocaleString()}</div>
            </div>
            <div>
                <div className="text-muted-foreground">24h Change</div>
                <div className={cn(
                    "text-lg font-bold",
                    selectedAsset.change24h >= 0 ? "text-green-500" : "text-red-500"
                )}>
                    {selectedAsset.change24h.toFixed(2)}%
                </div>
            </div>
            <div>
                <div className="text-muted-foreground">24h Volume</div>
                <div className="text-lg font-bold">{selectedAsset.volume24h}</div>
            </div>
             <div>
                <div className="text-muted-foreground">Asset Type</div>
                <div className="text-lg font-bold">{selectedAsset.type}</div>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
