import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the payload type for the form data
interface ReferralFormData {
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

interface ReferralResponse {
    success: boolean;
    message: string;
}

export const submitReferralForm = createAsyncThunk<
    ReferralResponse,
    ReferralFormData
>(
    'referralForm/submit',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/referrals',
                formData
            );
            return response.data as ReferralResponse;
        } catch {
            return rejectWithValue({ message: 'Submission failed' });
        }
    }
);