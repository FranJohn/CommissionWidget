import { calculateCommission, CommissionResult } from '../commissionCalculator';

describe('calculateCommission function', () => {
    it('calculates correct commission for given revenue', () => {
        const revenue = 17000;
        const expected: CommissionResult = {
        totalCommission: 1650,
        bandCommissions: [
            { band: '£0 - £5000', amount: 0 },
            { band: '£5000 - £10000', amount: 500 },
            { band: '£10000 - £15000', amount: 750 },
            { band: '£15000 - £20000', amount: 400 },
        ],
        };
        const result = calculateCommission(revenue);
        expect(result).toEqual(expected);
    });

    it('returns zero commission for zero revenue', () => {
        const revenue = 0;
        const expected: CommissionResult = {
        totalCommission: 0,
        bandCommissions: [],
        };
        const result = calculateCommission(revenue);
        expect(result).toEqual(expected);
    });

    it('should not error at negative revenue', () => {
        const result = calculateCommission(-1000);
        expect(result.totalCommission).toEqual(0);
        expect(result.bandCommissions).toHaveLength(0);
    });

    it('should calculate commission for maximum revenue in a band', () => {
        const result = calculateCommission(20000);
        const expected: CommissionResult = {
            totalCommission: 2250,
            bandCommissions: [
            { band: '£0 - £5000', amount: 0 },
            { band: '£5000 - £10000', amount: 500 },
            { band: '£10000 - £15000', amount: 750 },
            { band: '£15000 - £20000', amount: 1000 },
            ],
        };
        expect(result.totalCommission).toEqual(2250); 
        expect(result.bandCommissions).toHaveLength(4); 
        expect(result).toEqual(expected);
    });
    it('should handle revenue beyond the defined bands', () => {
        const result = calculateCommission(30000);
        const expected: CommissionResult = {
            totalCommission: 4750,
            bandCommissions: [
            { band: '£0 - £5000', amount: 0 },
            { band: '£5000 - £10000', amount: 500 },
            { band: '£10000 - £15000', amount: 750 },
            { band: '£15000 - £20000', amount: 1000 },
            { band: '£20000 - £∞', amount: 2500 },
            ],
        };
        expect(result.totalCommission).toEqual(4750); 
        expect(result.bandCommissions).toHaveLength(5); 
        expect(result).toEqual(expected);

    });
});
