/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import ReferralForm from "../components/ReferralForm";
import ReferralTable from "../components/ReferralTable";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchReferrals } from "../store/thunk/ReferralsThunk";

const ReferralBuilder: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
    const { referrals } = useSelector((state: RootState) => state.referrals);
    
    useEffect(() => { 
        dispatch(fetchReferrals());
    }, [dispatch]);

  const tableHeaders = ["Given Name", "Surname", "Email", "Phone", "Actions"];
  return (
    <div className="referral-builder-page">
      <div className="referral-builder-page-form-container">
        <ReferralForm />
      </div>
      <div className="referral-builder-page-table-container">
        <ReferralTable referrals={referrals} thead={tableHeaders} />
      </div>
    </div>
  );
};

export default ReferralBuilder;
