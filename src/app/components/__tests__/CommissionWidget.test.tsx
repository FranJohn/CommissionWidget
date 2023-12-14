import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import CommissionWidget from '../CommissionWidget';

describe('CommissionWidget Component', () => {
  it('renders with the provided title', () => {
    const title = 'Test Title';
    const { getByText } = render(<CommissionWidget title={title}>Child content</CommissionWidget>);
    expect(getByText(title)).toBeInTheDocument();
  });

  it('renders children content', () => {
    const childContent = 'Child content';
    const { getByText } = render(<CommissionWidget title="Test Title">{childContent}</CommissionWidget>);
    expect(getByText(childContent)).toBeInTheDocument();
  });
});
