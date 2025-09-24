import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Bot, CandlestickChart, LineChart } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CandlestickChart className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">TradeSim</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Features
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Practice Trading, <span className="text-primary">Risk-Free</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    TradeSim provides a realistic virtual trading environment. Hone your skills with stocks, forex, and crypto using virtual funds before you risk real capital.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <CandlestickChart className="w-48 h-48 lg:w-72 lg:h-72 text-primary/20" />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From live data to AI-powered insights, our platform is packed with features to accelerate your learning curve.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center text-center p-6 gap-4">
                  <LineChart className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Live Market Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Access real-time pricing for forex, stocks, and crypto to make informed trading decisions.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center text-center p-6 gap-4">
                  <Bot className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">AI Trading Signals</h3>
                  <p className="text-sm text-muted-foreground">
                    Leverage our GenAI tool to get potential market insights and trading signals based on your risk profile.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center text-center p-6 gap-4">
                  <CandlestickChart className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Track your performance with a detailed trade history, P/L ratios, and portfolio visualizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 TradeSim. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
