import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { tradeHistory } from "@/lib/data"
import { cn } from "@/lib/utils"

export function TradeHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trade History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">P/L</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tradeHistory.map((trade) => (
              <TableRow key={trade.id}>
                <TableCell className="font-medium">{trade.asset}</TableCell>
                <TableCell>
                  <Badge variant={trade.type === 'Buy' ? 'default' : 'destructive'} className={cn(trade.type === 'Buy' ? 'bg-green-600' : 'bg-red-600')}>
                    {trade.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{trade.amount.toLocaleString()}</TableCell>
                <TableCell className="text-right">${trade.price.toLocaleString()}</TableCell>
                <TableCell className={cn(
                  "text-right font-medium",
                  trade.pnl >= 0 ? 'text-green-500' : 'text-red-500'
                )}>
                  ${trade.pnl.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge variant={trade.status === 'Open' ? 'secondary' : 'outline'}>
                    {trade.status}
                  </Badge>
                </TableCell>
                <TableCell>{trade.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
