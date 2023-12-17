import React from 'react';
import SubWidget from './SubWidget';
import InputField from './InputFeild';

/**
 * Props for the RevenueSection component.
 */
interface RevenueSectionProps {
    handleRevenueChange: (value: number | null) => void;
    handleCalculateCommission: () => void;
}

/**
 * A component to represent the revenue section with input and calculate button.
 * @param {RevenueSectionProps} props - Properties for the RevenueSection component.
 * @returns {JSX.Element} - JSX for the RevenueSection component.
 */
const RevenueSection: React.FC<RevenueSectionProps> = ({ handleRevenueChange, handleCalculateCommission }) => {
    return (
        <SubWidget title={["Calculate Commission"]}>
            <InputField
                placeholder="Enter revenue value..."
                onChange={handleRevenueChange}
            />   
            <button onClick={handleCalculateCommission} data-testid="calculate-button">Calculate</button>
        </SubWidget>
    );
};

export default RevenueSection;
