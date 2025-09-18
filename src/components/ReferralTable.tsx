import React from 'react';

interface Referral {
    id: number;
    name: string;
    email: string;
    date: string;
    status: string;
}

interface ReferralTableProps {
    referrals: Referral[];
}

const ReferralTable: React.FC<ReferralTableProps> = ({ referrals }) => {
    return (
        <table className='referral-table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {referrals.map((referral, idx) => (
                    <tr key={referral.id}>
                        <td>{idx + 1}</td>
                        <td>{referral.name}</td>
                        <td>{referral.email}</td>
                        <td>{referral.date}</td>
                        <td>{referral.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ReferralTable;