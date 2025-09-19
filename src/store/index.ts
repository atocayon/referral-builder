import { configureStore } from '@reduxjs/toolkit';
import ReferralFormSlice from './slice/ReferralFormSlice';
import ReferralsSlice from './slice/ReferralsSlice';

const store = configureStore({
    reducer: {
        referralForm: ReferralFormSlice,
        referrals: ReferralsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;