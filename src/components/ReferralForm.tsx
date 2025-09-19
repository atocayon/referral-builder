import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store'; // Adjust path if needed
import {
    setErrors,
    type ReferralFormState,
    handleFormInputChange,
    type FormFieldName,
} from '../store/slice/ReferralFormSlice';
import Input from './common/Input';
import Button from './common/Button';
import { submitReferralForm } from '../store/thunk/ReferralFormThunk';
import { fetchReferrals } from '../store/thunk/ReferralsThunk';

interface ReferralFormProps {
    className?: string;
}

const ReferralForm: React.FC<ReferralFormProps> = ({ className = '' }) => {
    const dispatch = useDispatch<AppDispatch>();
    const form = useSelector((state: RootState) => state.referralForm);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(handleFormInputChange({ name: name as FormFieldName, value }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const requiredFields: string[] = [
            'firstName',
            'surname',
            'email',
            'phone',
            'homeName',
            'street',
            'suburb',
            'state',
            'postcode',
            'country',
        ];

        const newErrors: { [key: string]: string } = {};
        requiredFields.forEach((field) => {
            if (!form[field as keyof ReferralFormState] || (typeof form[field as keyof ReferralFormState] === 'string' && form[field as keyof ReferralFormState] === '')) {
                newErrors[field] = 'This field is required';
            }
        });

        dispatch(setErrors(newErrors));
        if (Object.keys(newErrors).length === 0) {
            await dispatch(submitReferralForm(form))
            await dispatch(fetchReferrals());
        }
    };

    return (
        <div className={`referral-form ${className}`}>
            <h2>Referral Builder</h2>
            <div className='referral-form-section-title'>Personal Details</div>
            <div className='referral-form-inputs-container'>
                <Input label="Given Name" name="firstName" type="text" value={form.firstName} onChange={handleInputChange} error={form.errors.firstName} />
                <Input label="Surname" name="surname" type="text" value={form.surname} onChange={handleInputChange} error={form.errors.surname} />
                <Input label="Email" name="email" type="email" value={form.email} onChange={handleInputChange} error={form.errors.email} />
                <Input label="Phone" name="phone" type="tel" value={form.phone} onChange={handleInputChange} error={form.errors.phone} />
            </div>
            <div className='referral-form-section-title address-form'>Address</div>
            <div className='referral-form-inputs-container'>
                <Input label="Home Name or #" name="homeName" type="text" value={form.homeName} onChange={handleInputChange} error={form.errors.homeName} />
                <Input label="Street" name="street" type="text" value={form.street} onChange={handleInputChange} error={form.errors.street} />
                <Input label="Suburb" name="suburb" type="text" value={form.suburb} onChange={handleInputChange} error={form.errors.suburb} />
                <Input label="State" name="state" type="text" value={form.state} onChange={handleInputChange} error={form.errors.state} />
                <Input label="Postcode" name="postcode" type="text" value={form.postcode} onChange={handleInputChange} error={form.errors.postcode} />
                <Input label="Country" name="country" type="text" value={form.country} onChange={handleInputChange} error={form.errors.country} />
            </div>
            <div className='referral-form-inputs-container'>
                <Button className="btn btn-default" label="Upload Avatar" />
                <Button className="btn btn-success" label="Create Referral" onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default ReferralForm;