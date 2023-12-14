'use client'
import React, { ReactNode } from 'react';

/**
 * Props for the CommissionWidget component.
 */
interface CommissionWidgetInterface {
    children: ReactNode;
}

/**
 * CommissionWidget component for handling commission calculations.
 * @param {CommissionWidgetProps} props - The props for CommissionWidget.
 * @returns {JSX.Element} JSX for CommissionWidget component.
 */
const CommissionWidget: React.FC<CommissionWidgetInterface> = ({ children }) => {
    return (
        <div className="widget-container">
            {children}
        </div>
    );
};

export default CommissionWidget;
