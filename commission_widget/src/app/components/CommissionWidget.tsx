'use client'
import React, { useState } from 'react';

const CommissionWidget: React.FC = () => {
    const [revenue, setRevenue] = useState<number | null>(null);

    const handleRevenueChange = (value: number | null) => {
        setRevenue(value);
    };

    return (
        <div className="widget-container">
            <h2>Commission Calculator</h2>
            <p className="revenue-input-area"> Revenue input area input=onChange(handleRevenueChange)</p>
            <p className="commission-display-area"> Commision display area input= revenue</p>
        </div>
    );
};

export default CommissionWidget;
