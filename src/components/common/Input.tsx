import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error}) => {

    return (
        <div style={{ marginBottom: '1rem' }}>
            {label && (
                <label htmlFor={label} className='input-label'>
                    {label}
                </label>
            )}
            <input className='input-field'/>
            {error && (
                <span style={{ color: 'red', fontSize: '0.875rem' }}>{error}</span>
            )}
        </div>
    );
};

export default Input;