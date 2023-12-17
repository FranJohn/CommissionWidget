import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputFeild from '../InputFeild';

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('InputFeild component', () => {
    it('should render with placeholder text', () => {
        const { getByPlaceholderText } = render(<InputFeild placeholder="Enter value" onChange={() => {}} />);
        const inputElement = getByPlaceholderText('Enter value');
        expect(inputElement).toBeInTheDocument();
    });

    it('should handle change events', () => {
        const onChange = jest.fn();
        const { getByPlaceholderText } = render(<InputFeild placeholder="Enter value" onChange={onChange} />);
        const inputElement = getByPlaceholderText('Enter value');
        
        fireEvent.change(inputElement, { target: { value: '1234567890' } });
        expect(onChange).toHaveBeenCalledWith(1234567890);

        fireEvent.change(inputElement, { target: { value: 't1&f4!n3?' } });
        expect(onChange).toHaveBeenCalledWith(143);

        fireEvent.change(inputElement, { target: { value: '456.789' } });
        expect(onChange).toHaveBeenCalledWith(456.789);

        fireEvent.change(inputElement, { target: { value: '956..' } });
        expect(onChange).toHaveBeenCalledWith(956);

        fireEvent.change(inputElement, { target: { value: '9.5.6.' } });
        expect(onChange).toHaveBeenCalledWith(9.56);
    });

    it('should handle focus events', () => {
        const onChange = jest.fn();
        const { getByPlaceholderText } = render(<InputFeild placeholder="Enter value" onChange={onChange} />);
        const inputElement = getByPlaceholderText('Enter value');

        fireEvent.focus(inputElement);
        expect(onChange).not.toHaveBeenCalled();

        fireEvent.change(inputElement, { target: { value: '34' } });
        fireEvent.focus(inputElement);
        expect(onChange).toHaveBeenCalledWith(34);
    });

    it('matches the InputFeild snapshot', () => {
        const onChange = jest.fn();
        const { container } = render(<InputFeild placeholder="Enter value" onChange={onChange} />);
        expect(container).toMatchSnapshot();
    });
});
