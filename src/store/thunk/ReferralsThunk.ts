import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Referral } from '../slice/ReferralsSlice';

export const fetchReferrals = createAsyncThunk(
    'referrals/fetchReferrals',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:4000/api/referrals');
            return response.data as Referral[];
        } catch {
            return rejectWithValue('An unknown error occurred');
        }
    }
);