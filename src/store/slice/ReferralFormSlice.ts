import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { submitReferralForm } from '../thunk/ReferralFormThunk'; 


interface FormFields {
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
export interface ReferralFormState extends FormFields {
    errors: Partial<Record<keyof FormFields, string>> & { general?: string };
    successMessage?: string;
    isLoading: boolean;
}

export type FormFieldName = keyof FormFields;

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
        handleFormInputChange(state: ReferralFormState, action: PayloadAction<{ name: FormFieldName; value: string }>) {
            const { name, value } = action.payload;
            state[name] = value;
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
    setErrors,
    resetForm,
    clearSuccessMessage,
    handleFormInputChange
} = referralFormSlice.actions;

export default referralFormSlice.reducer;