import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  placeholder?: string;
  onChange: (value: number) => void;
}

/**
 * InputField component for rendering an input field for commission value entry.
 * @param {InputFieldProps} props - Properties for the InputField component.
 * @returns {JSX.Element} - JSX for the InputField component.
 */
const InputField: React.FC<InputFieldProps> = ({ placeholder = '', onChange }) => {
    /**
     * Function to handle changes in the input field.
     * @param {ChangeEvent<HTMLInputElement>} event - The change event object.
     * @returns {void}
     */
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        // Ensure the input can only be numbers
        const sanitizedValue = value.replace(/[^\d.]|(?<=\..*)\./g, '');
        if (value !== sanitizedValue) {
            // Show an alert if non-numeric characters are entered
            alert('Please enter only numbers.');
        }
        onChange(+sanitizedValue);
    };

    /**
     * Function to handle focus on the input field.
     * Removes incorrect characters while keeping valid characters intact.
     * @param {React.FocusEvent<HTMLInputElement>} event - The focus event object.
     * @returns {void}
     */
    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const newValue = value.replace(/[^\d.]|(?<=\..*)\./g, ''); // Remove only wrong characters
        if (value !== newValue) {
            event.target.value = newValue;
            onChange(+newValue);
        }
    };


    // Input type is text to allow decimal points for fractions (type number not always supported in old browsers)
    return (
        <div className="input-wrapper">
            <input
                type="text"
                placeholder={placeholder}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                className="custom-input"
            />
        </div>
    );
};

export default InputField;
