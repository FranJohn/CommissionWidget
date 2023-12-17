import { calculateCommission, CommissionResult } from './commissionCalculator';

export const simulateAPICall = (revenue: number | null): Promise<CommissionResult> => {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous call with setTimeout 1 second
        setTimeout(() => {
            const commissions = calculateCommission(revenue); 
            resolve(commissions); 
        }, 1000); 
    });
};
