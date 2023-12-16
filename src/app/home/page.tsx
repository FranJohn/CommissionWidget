'use client'
import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import CommissionWidget from '@/app/components/CommissionWidget';
import InputField from '../components/InputFeild';
import SubWidget from '../components/SubWidget';
import { calculateCommission, CommissionResult, commissionScheme } from '../utils/commissionCalculator';
import { formatCommission } from '../utils/currency';
import { simulateAPICall } from '../utils/apiService';
import LoadingSpinner from '../components/Loading';

const HomePage: React.FC = () => {
    /**
     * State to manage the revenue value.
     * @type {number | null}
     */
    const [revenue, setRevenue] = useState<number | null>(null);
    const [commissions, setCommissions] = useState<CommissionResult | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    
    /**
     * Function to handle changes in revenue input.
     * @param {number | null} value - The value entered for revenue.
     * @returns {void}
     */
    const handleRevenueChange = (value: number | null) => {
        setRevenue(value);
    };

    const handleCalculateCommission = async () => {
        setLoading(true);
        try {
            const commissions = await simulateAPICall(revenue); 
            setCommissions(commissions);
        } catch (error) {
            console.error('API call failed:', error);
        }
        finally {
            setLoading(false);
        }
    };

    return (  
        <CommissionWidget title="Commission">
            {loading && ( <LoadingSpinner /> )}
            <SubWidget title="Calculate Commission">
                <InputField
                    placeholder="Enter revenue value..."
                    onChange={handleRevenueChange}
                />   
                <button onClick={handleCalculateCommission}>Calculate</button>
            </SubWidget>    
            <SubWidget title="Total Revenue">
                <p>{formatCommission(commissions?.totalCommission || 0)}</p>
            </SubWidget>    
            {commissionScheme.map((band, index) => {
                const { amount } = commissions?.bandCommissions[index] || { amount: 0 };
                const commissionAmount = formatCommission(amount);
                return (
                    <SubWidget key={index} title={`band: £${band.min} - £${band.max || '∞'}`}>
                        <p>{commissionAmount}</p>
                    </SubWidget>
                );
            })}
        </CommissionWidget>
    )
;
};

export default HomePage;
