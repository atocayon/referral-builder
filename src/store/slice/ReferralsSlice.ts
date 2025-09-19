import { createSlice } from '@reduxjs/toolkit';
import { fetchReferrals } from '../thunk/ReferralsThunk';

export interface Referral {
    id: string;
    firstName: string;
    surname: string;
    email: string;
    phone: string;
    homeName: string;
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    country: string;
}

interface ReferralsState {
    referrals: Referral[];
    loading: boolean;
    error: string | null;
}

const initialState: ReferralsState = {
    referrals: [],
    loading: false,
    error: null,
};

const referralsSlice = createSlice({
    name: 'referrals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReferrals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReferrals.fulfilled, (state, action) => {
                state.referrals = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchReferrals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch referrals';
            });
    },
});

export default referralsSlice.reducer;
