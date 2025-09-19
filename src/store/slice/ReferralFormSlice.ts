import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Updated to match input names from ReferralForm
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
    };
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
} = referralFormSlice.actions;

export default referralFormSlice.reducer;