'use client'
import React, { ReactNode } from 'react';

/**
 * Props for the CommissionWidget component.
 */
interface CommissionWidgetInterface {
    children: ReactNode;
    title: string;
}

/**
 * CommissionWidget component for handling commission calculations.
 * @param {CommissionWidgetProps} props - The props for CommissionWidget.
 * @returns {JSX.Element} JSX for CommissionWidget component.
 */
const CommissionWidget: React.FC<CommissionWidgetInterface> = ({ children, title }) => {
    return (
        <div className="widget-title-container">
            <h2>{title}</h2>
            <div className="widget-container">
                {children}
            </div>
        </div>
    );
};

export default CommissionWidget;
