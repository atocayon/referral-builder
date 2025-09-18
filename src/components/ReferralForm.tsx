import React from 'react';
import Input from './common/Input';
import Button from './common/Button';

interface ReferralFormProps {
    className?: string;
}

const ReferralForm: React.FC<ReferralFormProps> = ({className = '' }) => {
    return (
        <div className={`referral-form ${className}`}>
            <h2>Referral Builder</h2>
            <div className='referral-form-section-title'>Personal Details</div>
            <div className='referral-form-inputs-container'>
                <Input label="Given Name" name="firstName" type="text" />
                <Input label="Surname" name="surname" type="text" />
                <Input label="Email" name="email" type="email" />
                <Input label="Phone" name="phone" type="tel" />
            </div>
            <div className='referral-form-section-title address-form'>Address</div>
            <div className='referral-form-inputs-container'>
                <Input label="Home Name or #" name="homeName" type="text" />
                <Input label="Street" name="street" type="text" />
                <Input label="Suburb" name="suburb" type="text" />
                <Input label="State" name="state" type="text" />
                <Input label="Postcode" name="postcode" type="text" />
                <Input label="Country" name="country" type="text" />
            </div>
            <div className='referral-form-inputs-container'>
                <Button className="btn btn-default" label="Upload Avatar" />
                <Button className="btn btn-success" label="Create Referral" />
            </div>
        </div>
    );
};

export default ReferralForm;