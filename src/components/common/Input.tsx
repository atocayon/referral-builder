import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, name, value, onChange, type = "text", ...rest }) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            {label && (
                <label htmlFor={name} className='input-label'>
                    {label}
                </label>
            )}
            <input
                className='input-field'
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                {...rest}
            />
            {error && (
                <span style={{ color: 'red', fontSize: '0.875rem' }}>{error}</span>
            )}
        </div>
    );
};

export default Input;