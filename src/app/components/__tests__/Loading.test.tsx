import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '../Loading';

describe('LoadingSpinner Component', () => {
    it('renders the LoadingSpinner component', () => {
        const { container } = render(<LoadingSpinner />);
        const loadingSpinner = container.querySelector('.loading-spinner');
        expect(loadingSpinner).toBeInTheDocument();
    });

    it('matches the LoadingSpinner snapshot', () => {
        const { container } = render(<LoadingSpinner />);
        expect(container).toMatchSnapshot();
    });
});
