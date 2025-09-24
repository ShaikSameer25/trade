'use server';

/**
 * @fileOverview An AI-powered trading signal generator.
 *
 * - generateTradingSignal - A function that generates trading signals.
 * - GenerateTradingSignalInput - The input type for the generateTradingSignal function.
 * - GenerateTradingSignalOutput - The return type for the generateTradingSignal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTradingSignalInputSchema = z.object({
  assetType: z
    .string()
    .describe('The type of asset to generate a trading signal for (e.g., Forex, Stocks, Crypto).'),
  marketData: z.string().describe('Real-time market data for the specified asset.'),
  riskAppetite: z
    .string()
    .describe(
      'The users risk appetite. Can be one of: very high, high, medium, low, very low.'
    ),
});
export type GenerateTradingSignalInput = z.infer<typeof GenerateTradingSignalInputSchema>;

const GenerateTradingSignalOutputSchema = z.object({
  signal: z.string().describe('The generated trading signal.'),
  reason: z.string().describe('The reasoning behind the generated trading signal.'),
});
export type GenerateTradingSignalOutput = z.infer<typeof GenerateTradingSignalOutputSchema>;

export async function generateTradingSignal(
  input: GenerateTradingSignalInput
): Promise<GenerateTradingSignalOutput> {
  return generateTradingSignalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTradingSignalPrompt',
  input: {schema: GenerateTradingSignalInputSchema},
  output: {schema: GenerateTradingSignalOutputSchema},
  prompt: `You are an AI-powered trading signal generator. Based on the provided market data and the user's risk appetite, you will generate a trading signal and provide a reason for the signal.

Asset Type: {{{assetType}}}
Market Data: {{{marketData}}}
Risk Appetite: {{{riskAppetite}}}

Trading Signal:`,
});

const generateTradingSignalFlow = ai.defineFlow(
  {
    name: 'generateTradingSignalFlow',
    inputSchema: GenerateTradingSignalInputSchema,
    outputSchema: GenerateTradingSignalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
