import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RevenueSection from '../RevenueSection';

describe('RevenueSection component', () => {
    it('renders input field and button', () => {
        const handleRevenueChange = jest.fn();
        const handleCalculateCommission = jest.fn();

        const { getByPlaceholderText, getByText } = render(
            <RevenueSection
                handleRevenueChange={handleRevenueChange}
                handleCalculateCommission={handleCalculateCommission}
            />
        );

        const inputElement = getByPlaceholderText('Enter revenue value...');
        expect(inputElement).toBeInTheDocument();

        const calculateButton = getByText('Calculate');
        expect(calculateButton).toBeInTheDocument();
    });

    it('calls provided functions on input change and button click', () => {
        const handleRevenueChange = jest.fn();
        const handleCalculateCommission = jest.fn();

        const { getByPlaceholderText, getByText } = render(
            <RevenueSection
                handleRevenueChange={handleRevenueChange}
                handleCalculateCommission={handleCalculateCommission}
            />
        );

        const inputElement = getByPlaceholderText('Enter revenue value...');
        fireEvent.change(inputElement, { target: { value: '500' } });
        expect(handleRevenueChange).toHaveBeenCalledWith(500);

        const calculateButton = getByText('Calculate');
        fireEvent.click(calculateButton);
        expect(handleCalculateCommission).toHaveBeenCalled();
    });

    it('matches the SubWidget snapshot', () => {
        const handleRevenueChange = jest.fn();
        const handleCalculateCommission = jest.fn();

        const { container } = render(
            <RevenueSection
                handleRevenueChange={handleRevenueChange}
                handleCalculateCommission={handleCalculateCommission}
            />
        );       
        expect(container).toMatchSnapshot();
    });
});
