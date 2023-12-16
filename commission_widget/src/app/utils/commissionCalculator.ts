/**
 * Represents a Commission Band with defined minimum, maximum, and rate.
 */
export interface CommissionBand {
    min: number;
    max: number | null;
    rate: number;
}

/**
 * Commission scheme with defined bands and rates.
 */
export const commissionScheme: CommissionBand[] = [
    { min: 0, max: 5000, rate: 0 },
    { min: 5000, max: 10000, rate: 0.1 },
    { min: 10000, max: 15000, rate: 0.15 },
    { min: 15000, max: 20000, rate: 0.2 },
    { min: 20000, max: null, rate: 0.25 },
];

/**
 * Represents the resulting commission calculations.
 */
export interface CommissionResult {
    totalCommission: number;
    bandCommissions: { band: string; amount: number }[];
}

/**
 * Calculate commission based on the given revenue using defined commission bands.
 * @param {number} revenue - The revenue for which the commission is calculated.
 * @returns {CommissionResult} - The calculated commission result.
 */
export const calculateCommission = (revenue: number | null): CommissionResult => {
    // Handle a null click
    if (revenue === null) {
        revenue = 0;
    }

    let totalCommission = 0;
    const bandCommissions: { band: string; amount: number }[] = [];

    let remainingRevenue = revenue;

    for (const band of commissionScheme) {
        if (remainingRevenue <= 0) {
            break;
        }
        console.log(remainingRevenue);

        const bandRange = band.max ? Math.min(band.min + remainingRevenue, band.max) - band.min : remainingRevenue;
        const bandCommission = bandRange * band.rate;
        console.log(bandCommission);
        totalCommission += bandCommission;
        bandCommissions.push({ band: `£${band.min} - £${band.max || '∞'}`, amount: bandCommission });

        remainingRevenue -= bandRange;
    }

    return { totalCommission, bandCommissions };
};