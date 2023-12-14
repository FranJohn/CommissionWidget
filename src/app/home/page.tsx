'use client'
import React, { useState } from 'react';
import CommissionWidget from '@/app/components/CommissionWidget';
import InputField from '../components/InputFeild';
//import calculateCommission from '../utils/commissionCalculator';

const HomePage: React.FC = () => {
    /**
     * State to manage the revenue value.
     * @type {number | null}
     */
    const [revenue, setRevenue] = useState<number | null>(null);

    /**
     * Function to handle changes in revenue input.
     * @param {number | null} value - The value entered for revenue.
     * @returns {void}
     */
    const handleRevenueChange = (value: number | null) => {
        setRevenue(value);
    };

    const handleCalculateCommission = () => {
        //calculateCommission(revenue);
    }
    
  return (  
    <CommissionWidget>
        <h2>Commission</h2>
        <InputField
            placeholder="Enter revenue value..."
            onChange={handleRevenueChange}
        />   
        <button onClick={handleCalculateCommission}>Calculate</button>
        <h3>Revenue is:{revenue} </h3>        
        <p className="commission-display-area"> Commision display area input= revenue</p>
    </CommissionWidget>
  )
;
};

export default HomePage;
