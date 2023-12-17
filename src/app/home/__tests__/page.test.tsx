import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '../page';
import * as apiService from '../../utils/apiService';

jest.mock('../../utils/apiService', () => ({
    ...jest.requireActual('../../utils/apiService'), // Keep the actual implementation for other functions
    simulateAPICall: jest.fn(),
}));

describe('HomePage Component', () => {
    test('calculates commission when revenue changes', async () => {
        const commissions = {
            totalCommission: 1400,
            bandCommissions: [
                { band: 'Band 1', amount: 200 },
                { band: 'Band 2', amount: 300 },
                { band: 'Band 3', amount: 400 },
                { band: 'Band 4', amount: 500 },
            ],
        };

        const simulateAPICallMock = jest.spyOn(apiService, 'simulateAPICall');
        simulateAPICallMock.mockResolvedValue(commissions);

        const { getByPlaceholderText, getByTestId } = render(<HomePage />);

        const revenueInput = getByPlaceholderText('Enter revenue value...');
        fireEvent.change(revenueInput, { target: { value: '1400' } });

        const calculateButton = getByTestId('calculate-button');
        fireEvent.click(calculateButton);

        await waitFor(() => {
        expect(simulateAPICallMock).toHaveBeenCalledWith(1400);
        });
    });
});
