import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import SubWidget from '../SubWidget';

describe('SubWidget Component', () => {
    it('renders with the provided title', () => {
        const title = ['Test Title'];
        const { getByText } = render(<SubWidget title={title}>Children</SubWidget>);
        expect(getByText(title[0])).toBeInTheDocument();
    });

    it('renders with the provided two line title', () => {
        const title = ['Test Title', 'Second Test Title'];
        const { getByText } = render(<SubWidget title={title}>Children</SubWidget>);
        expect(getByText(title[0])).toBeInTheDocument();
        expect(getByText(title[1])).toBeInTheDocument();
    });

    it('renders children content', () => {
        const childContent = 'Children';
        const { getByText } = render(<SubWidget title={["Test Title"]}>{childContent}</SubWidget>);
        expect(getByText(childContent)).toBeInTheDocument();
    });

    it('matches the SubWidget snapshot', () => {
        const childContent = 'Children';
        const { container } = render(<SubWidget title={["Test Title"]}>{childContent}</SubWidget>);
        expect(container).toMatchSnapshot();
    });
});
