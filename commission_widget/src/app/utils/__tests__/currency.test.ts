import '@testing-library/jest-dom';
import { formatCommission } from '../currency';

describe('formatCommission function', () => {
    it('should format the commission amount correctly', () => {
        expect(formatCommission(1234)).toBe('£1,234.00');
        expect(formatCommission(1000000)).toBe('£1,000,000.00');
        expect(formatCommission(500)).toBe('£500.00');
    });

    it('should handle zero commission', () => {
        expect(formatCommission(0)).toBe('£0.00');
    });

    it('should handle negative commission', () => {
        expect(formatCommission(-1000)).toBe('-£1,000.00');
    });
});