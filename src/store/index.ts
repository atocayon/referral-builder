import { configureStore } from '@reduxjs/toolkit';
import ReferralFormSlice from './slice/ReferralFormSlice';

const store = configureStore({
    reducer: {
        referralForm: ReferralFormSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;