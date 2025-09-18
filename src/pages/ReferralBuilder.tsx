import React from 'react';
import ReferralForm from '../components/ReferralForm';
import ReferralTable from '../components/ReferralTable';

const ReferralBuilder: React.FC = () => {
    return (
        <div className='referral-builder-page'>
            <div className='referral-builder-page-form-container'>
                <ReferralForm />
            </div>
            <div className='referral-builder-page-table-container'>
                <ReferralTable referrals={[]} />
            </div>
            
        </div>
    );
};

export default ReferralBuilder;