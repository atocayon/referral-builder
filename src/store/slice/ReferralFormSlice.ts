import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { submitReferralForm } from '../thunk/ReferralFormThunk'; 

interface ReferralFormState {
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
    errors: {
        firstName?: string;
        surname?: string;
        email?: string;
        phone?: string;
        homeName?: string;
        street?: string;
        suburb?: string;
        state?: string;
        postcode?: string;
        country?: string;
        general?: string;
    };
    successMessage?: string;
    isLoading: boolean;
}

const initialState: ReferralFormState = {
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    homeName: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
    errors: {},
    successMessage: '',
    isLoading: false,
};

const referralFormSlice = createSlice({
    name: 'referralForm',
    initialState,
    reducers: {
        setFirstName(state, action: PayloadAction<string>) {
            state.firstName = action.payload;
        },
        setSurname(state, action: PayloadAction<string>) {
            state.surname = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setHomeName(state, action: PayloadAction<string>) {
            state.homeName = action.payload;
        },
        setStreet(state, action: PayloadAction<string>) {
            state.street = action.payload;
        },
        setSuburb(state, action: PayloadAction<string>) {
            state.suburb = action.payload;
        },
        setState(state, action: PayloadAction<string>) {
            state.state = action.payload;
        },
        setPostcode(state, action: PayloadAction<string>) {
            state.postcode = action.payload;
        },
        setCountry(state, action: PayloadAction<string>) {
            state.country = action.payload;
        },
        setErrors(state, action: PayloadAction<ReferralFormState['errors']>) {
            state.errors = action.payload;
        },
        resetForm(state) {
            Object.assign(state, initialState);
        },
        clearSuccessMessage(state) {
            state.successMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitReferralForm.pending, (state) => {
                state.errors = {};
                state.successMessage = '';
                state.isLoading = true;
            })
            .addCase(submitReferralForm.fulfilled, (state, action) => {
                Object.assign(state, initialState);
                state.successMessage = action.payload.message || "Referral created successfully";
                state.isLoading = false;
            })
            .addCase(submitReferralForm.rejected, (state) => {
                state.errors = { ...state.errors, general: "Submission failed" };
                state.successMessage = '';
                state.isLoading = false;
            });
    },
});

export const {
    setFirstName,
    setSurname,
    setEmail,
    setPhone,
    setHomeName,
    setStreet,
    setSuburb,
    setState,
    setPostcode,
    setCountry,
    setErrors,
    resetForm,
    clearSuccessMessage,
} = referralFormSlice.actions;

export default referralFormSlice.reducer;