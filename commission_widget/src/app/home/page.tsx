'use client'
import React, { useState } from 'react';
import CommissionWidget from '../components/CommissionWidget';
import RevenueSection from '../components/RevenueSection';
import CommissionDetailsSection from '../components/CommissionDetailsSection';
import { CommissionResult } from '../utils/commissionCalculator';
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
            {loading && (<LoadingSpinner />)}
            <div className="subwidget-container">
                <RevenueSection
                    handleRevenueChange={handleRevenueChange}
                    handleCalculateCommission={handleCalculateCommission}
                />
                <CommissionDetailsSection commissions={commissions} />
            </div>
        </CommissionWidget>
    );
};

export default HomePage;
