import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import SubWidget from '../SubWidget';

describe('SubWidget Component', () => {
    it('renders with the provided title', () => {
        const title = 'Test Title';
        const { getByText } = render(<SubWidget title={title}>Children</SubWidget>);
        expect(getByText(title)).toBeInTheDocument();
    });

    it('renders children content', () => {
        const childContent = 'Childrent';
        const { getByText } = render(<SubWidget title="Test Title">{childContent}</SubWidget>);
        expect(getByText(childContent)).toBeInTheDocument();
    });
});