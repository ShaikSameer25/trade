'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { getAiTradingSignal } from '@/app/actions'
import type { GenerateTradingSignalOutput } from '@/ai/flows/ai-trading-signals'
import { Bot, Loader2, Sparkles } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  assetType: z.string().min(1, 'Please select an asset type.'),
  marketData: z.string().min(50, 'Market data must be at least 50 characters.'),
  riskAppetite: z.string().min(1, 'Please select your risk appetite.'),
})

const defaultMarketData = `Recent price action for BTC/USD shows consolidation around the $68,000 level after a recent uptrend. Trading volume has decreased slightly. The RSI is at 55, indicating neutral momentum. Key support is at $66,500 and resistance at $70,000. Macroeconomic factors include upcoming inflation data announcements.`

export function AiSignalGenerator() {
  const [result, setResult] = useState<GenerateTradingSignalOutput | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assetType: 'Crypto',
      marketData: defaultMarketData,
      riskAppetite: 'medium',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setResult(null)
    const response = await getAiTradingSignal(values)
    if (response.success && response.data) {
      setResult(response.data)
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error || 'An unknown error occurred.',
      })
    }
    setIsLoading(false)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Generate Signal</CardTitle>
              <CardDescription>Fill in the details below to get an AI-generated signal.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="assetType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asset Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an asset type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Forex">Forex</SelectItem>
                        <SelectItem value="Stocks">Stocks</SelectItem>
                        <SelectItem value="Crypto">Crypto</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Market Data / Context</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide some context about the current market..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="riskAppetite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Risk Appetite</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your risk appetite" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="very low">Very Low</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="very high">Very High</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate AI Signal
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Bot /> AI Signal Result</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4 text-muted-foreground">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p>Thinking...</p>
            </div>
          ) : result ? (
            <div className="space-y-4 text-sm">
                <div>
                    <h3 className="font-bold text-base text-primary">Signal:</h3>
                    <p className="text-lg font-semibold p-3 bg-secondary rounded-md">{result.signal}</p>
                </div>
                 <div>
                    <h3 className="font-bold text-base text-primary">Reasoning:</h3>
                    <p className="p-3 bg-secondary rounded-md">{result.reason}</p>
                </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>Your generated signal will appear here.</p>
            </div>
          )}
        </CardContent>
         <CardFooter className="text-xs text-muted-foreground">
            Disclaimer: AI signals are for informational purposes only and not financial advice.
        </CardFooter>
      </Card>
    </div>
  )
}
