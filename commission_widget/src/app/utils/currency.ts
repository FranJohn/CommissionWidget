export const formatCommission = (amount: number): string => {
    return amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP', 
    });
};