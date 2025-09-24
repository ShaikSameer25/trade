'use server';

import { generateTradingSignal, GenerateTradingSignalInput, GenerateTradingSignalOutput } from '@/ai/flows/ai-trading-signals';

export async function getAiTradingSignal(input: GenerateTradingSignalInput): Promise<{ success: boolean; data?: GenerateTradingSignalOutput, error?: string }> {
    try {
        const result = await generateTradingSignal(input);
        return { success: true, data: result };
    } catch (error) {
        console.error('Error generating AI trading signal:', error);
        return { success: false, error: 'Failed to generate trading signal. Please try again.' };
    }
}
