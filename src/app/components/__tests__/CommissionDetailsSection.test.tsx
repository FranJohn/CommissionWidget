import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import CommissionDetailsSection from '../CommissionDetailsSection';

describe('CommissionDetailsSection component', () => {
    it('renders total revenue and commission bands', () => {
        const commissions = {
            totalCommission: 1400,
            bandCommissions: [
                { band: 'Band 1', amount: 200 },
                { band: 'Band 2', amount: 300 },
                { band: 'Band 3', amount: 400 },
                { band: 'Band 4', amount: 500 },
            ],
        };

        const { getByText } = render(<CommissionDetailsSection commissions={commissions} />);

        const totalRevenueElement = getByText('£1,400.00'); 
        expect(totalRevenueElement).toBeInTheDocument();

        const band1CommissionElement = getByText('£200.00'); 
        expect(band1CommissionElement).toBeInTheDocument();

        const band2CommissionElement = getByText('£300.00'); 
        expect(band2CommissionElement).toBeInTheDocument();

        const band3CommissionElement = getByText('£400.00'); 
        expect(band3CommissionElement).toBeInTheDocument();

        const band4CommissionElement = getByText('£500.00'); 
        expect(band4CommissionElement).toBeInTheDocument();

    });

    it('renders total revenue and handles undefined commissions', () => {
        const { queryByText, getAllByText } = render(<CommissionDetailsSection commissions={undefined} />);

        const totalRevenueElement = queryByText('Total Revenue');
        expect(totalRevenueElement).toBeInTheDocument();

        const bandCommissionElements = getAllByText('Commission Band:');
        expect(bandCommissionElements).toHaveLength(5); 
        bandCommissionElements.forEach(element => {
            expect(element).toBeInTheDocument();
        });
    });

    it('matches the CommissionDetailsSection snapshot', () => {
        const commissions = {
            totalCommission: 1400,
            bandCommissions: [
                { band: 'Band 1', amount: 200 },
                { band: 'Band 2', amount: 300 },
                { band: 'Band 3', amount: 400 },
                { band: 'Band 4', amount: 500 },
            ],
        };

        const { container } = render(<CommissionDetailsSection commissions={commissions} />);       
        expect(container).toMatchSnapshot();
      });
});
