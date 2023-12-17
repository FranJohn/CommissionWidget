import React from 'react';
import { v4 } from 'uuid';
import SubWidget from './SubWidget';
import { CommissionResult } from '../utils/commissionCalculator';
import { formatCommission } from '../utils/currency';
import { commissionScheme } from '../utils/commissionCalculator';

const CommissionDetailsSection: React.FC<{ commissions: CommissionResult | undefined }> = ({ commissions }) => {
    return (
        <React.Fragment>
            <SubWidget title={["Total Revenue"]}>
                <p>{formatCommission(commissions?.totalCommission || 0)}</p>
            </SubWidget>    
            {commissionScheme.map((band, index) => {
                    const { amount } = commissions?.bandCommissions[index] || { amount: 0 };
                    const commissionAmount = formatCommission(amount);
                    const maxValue =  band.max !== null ? `- £${band.max}` : `+`;
                    return (
                        <SubWidget key={v4()} title={["Commission Band:", `£${band.min} ${maxValue}`]}>
                            <p>{commissionAmount}</p>
                        </SubWidget>
                    );
            })}  
        </React.Fragment>      
    );
};

export default CommissionDetailsSection;