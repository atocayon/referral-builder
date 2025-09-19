import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReferrals = createAsyncThunk(
    'referrals/fetchReferrals',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:4000/api/referrals');
            return response.data;
        } catch {
            return rejectWithValue('An unknown error occurred');
        }
    }
);