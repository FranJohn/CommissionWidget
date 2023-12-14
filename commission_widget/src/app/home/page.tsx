'use client'
import React, { useState } from 'react';
import CommissionWidget from '@/app/components/CommissionWidget';
import InputField from '../components/InputFeild';
import SubWidget from '../components/SubWidget';
import { calculateCommission, CommissionResult, commissionScheme } from '../utils/commissionCalculator';
import { formatCommission } from '../utils/currency';

const HomePage: React.FC = () => {
    /**
     * State to manage the revenue value.
     * @type {number | null}
     */
    const [revenue, setRevenue] = useState<number | null>(null);
    const [commissions, setCommissions] = useState<CommissionResult | undefined>(undefined);
    
    /**
     * Function to handle changes in revenue input.
     * @param {number | null} value - The value entered for revenue.
     * @returns {void}
     */
    const handleRevenueChange = (value: number | null) => {
        setRevenue(value);
    };

    const handleCalculateCommission = () => {
        const commissions = calculateCommission(revenue)
        setCommissions(commissions);
    }
    
  return (  
    <CommissionWidget title="Commission">
        <SubWidget title="Calculate Commission">
            <InputField
                placeholder="Enter revenue value..."
                onChange={handleRevenueChange}
            />   
            <button onClick={handleCalculateCommission}>Calculate</button>
        </SubWidget>    
        <SubWidget title="Total Revenue">
            <p>{commissions ? formatCommission(commissions.totalCommission) : ''}</p>
        </SubWidget>    
        {commissions?.bandCommissions && commissions?.bandCommissions.map((band, index) => {
            console.log(band);
            console.log(band.amount);
            const commissionAmount = commissions ? formatCommission(band.amount) : '';
            return (
                <SubWidget title={`band: £${commissionScheme[index].min} - £${commissionScheme[index].max || '∞'}`}>
                    <p>{commissionAmount}</p>
                </SubWidget>
            );
        })}
    </CommissionWidget>
  )
;
};

export default HomePage;
