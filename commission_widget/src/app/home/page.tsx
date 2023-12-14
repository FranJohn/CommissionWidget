'use client'
import React, { useState } from 'react';
import CommissionWidget from '@/app/components/CommissionWidget';
import InputField from '../components/InputFeild';
import SubWidget from '../components/SubWidget';
import calculateCommission from '../utils/commissionCalculator';

const HomePage: React.FC = () => {
    /**
     * State to manage the revenue value.
     * @type {number | null}
     */
    const [revenue, setRevenue] = useState<number | null>(null);
    const [commissions, setCommissions] = useState<number | null>(null);

    /**
     * Function to handle changes in revenue input.
     * @param {number | null} value - The value entered for revenue.
     * @returns {void}
     */
    const handleRevenueChange = (value: number | null) => {
        setRevenue(value);
    };

    const handleCalculateCommission = () => {
        calculateCommissions(revenue);
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
        <h3>Revenue is:{revenue} </h3>        
        </SubWidget>    
    </CommissionWidget>
  )
;
};

export default HomePage;
