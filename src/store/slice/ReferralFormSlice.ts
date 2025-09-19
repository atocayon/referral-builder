import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ReferralFormState {
    name: string;
    email: string;
    phone: string;
    referralCode: string;
    message: string;
}

const initialState: ReferralFormState = {
    name: '',
    email: '',
    phone: '',
    referralCode: '',
    message: '',
};

const referralFormSlice = createSlice({
    name: 'referralForm',
    initialState,
    reducers: {
        setName(state: ReferralFormState, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setEmail(state: ReferralFormState, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPhone(state: ReferralFormState, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setReferralCode(state: ReferralFormState, action: PayloadAction<string>) {
            state.referralCode = action.payload;
        },
        setMessage(state: ReferralFormState, action: PayloadAction<string>) {
            state.message = action.payload;
        },
        resetForm(state: ReferralFormState) {
            Object.assign(state, initialState);
        },
    },
});

export const {
    setName,
    setEmail,
    setPhone,
    setReferralCode,
    setMessage,
    resetForm,
} = referralFormSlice.actions;

export default referralFormSlice.reducer;