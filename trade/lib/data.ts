export type Asset = {
  id: string;
  name: string;
  symbol: string;
  type: 'Crypto' | 'Stock' | 'Forex';
  price: number;
  change24h: number;
  volume24h: string;
};

export const assets: Asset[] = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC/USD', type: 'Crypto', price: 68123.45, change24h: 2.5, volume24h: '45.6B' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH/USD', type: 'Crypto', price: 3540.12, change24h: -1.2, volume24h: '22.1B' },
  { id: 'tsla', name: 'Tesla Inc.', symbol: 'TSLA', type: 'Stock', price: 177.48, change24h: 1.8, volume24h: '98.7M' },
  { id: 'aapl', name: 'Apple Inc.', symbol: 'AAPL', type: 'Stock', price: 214.29, change24h: 0.5, volume24h: '60.2M' },
  { id: 'eurusd', name: 'EUR/USD', symbol: 'EUR/USD', type: 'Forex', price: 1.0712, change24h: -0.25, volume24h: 'N/A' },
  { id: 'gbpjpy', name: 'GBP/JPY', symbol: 'GBP/JPY', type: 'Forex', price: 201.55, change24h: 0.8, volume24h: 'N/A' },
];

export const user = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
};

export const wallet = {
  balance: 10000,
  currency: 'USD',
};

export const tradeHistory = [
  { id: 1, asset: 'BTC/USD', type: 'Buy', amount: 0.1, price: 67500, pnl: 62.34, status: 'Closed', date: '2024-07-21 10:30:00' },
  { id: 2, asset: 'TSLA', type: 'Sell', amount: 10, price: 180, pnl: -25.20, status: 'Closed', date: '2024-07-21 09:15:00' },
  { id: 3, asset: 'ETH/USD', type: 'Buy', amount: 2, price: 3500, pnl: 80.24, status: 'Open', date: '2024-07-20 14:00:00' },
  { id: 4, asset: 'EUR/USD', type: 'Buy', amount: 5000, price: 1.0700, pnl: 6.00, status: 'Closed', date: '2024-07-20 11:45:00' },
  { id: 5, asset: 'AAPL', type: 'Buy', amount: 5, price: 210, pnl: 21.45, status: 'Open', date: '2024-07-19 16:20:00' },
];

export const chartData = [
  { date: '2024-07-01', open: 62000, high: 63500, low: 61800, close: 63200 },
  { date: '2024-07-02', open: 63200, high: 64000, low: 62800, close: 63800 },
  { date: '2024-07-03', open: 63800, high: 64200, low: 63000, close: 63100 },
  { date: '2024-07-04', open: 63100, high: 63900, low: 62500, close: 63700 },
  { date: '2024-07-05', open: 63700, high: 65000, low: 63500, close: 64900 },
  { date: '2024-07-08', open: 64900, high: 66000, low: 64800, close: 65800 },
  { date: '2024-07-09', open: 65800, high: 66200, low: 65000, close: 65100 },
  { date: '2024-07-10', open: 65100, high: 65500, low: 64500, close: 64800 },
  { date: '2024-07-11', open: 64800, high: 67000, low: 64700, close: 66900 },
  { date: '2024-07-12', open: 66900, high: 68000, low: 66500, close: 67800 },
  { date: '2024-07-15', open: 67800, high: 68500, low: 67000, close: 67200 },
  { date: '2024-07-16', open: 67200, high: 67800, low: 66800, close: 67500 },
  { date: '2024-07-17', open: 67500, high: 69000, low: 67300, close: 68800 },
  { date: '2024-07-18', open: 68800, high: 69500, low: 68000, close: 68200 },
  { date: '2024-07-19', open: 68200, high: 68900, low: 67800, close: 68100 },
];

export const portfolioPerformance = [
  { date: 'Jan', balance: 10000 },
  { date: 'Feb', balance: 10500 },
  { date: 'Mar', balance: 10250 },
  { date: 'Apr', balance: 11000 },
  { date: 'May', balance: 11500 },
  { date: 'Jun', balance: 11300 },
  { date: 'Jul', balance: 12050 },
];
