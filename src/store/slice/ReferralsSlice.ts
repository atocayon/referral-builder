import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  deleteReferral,
  fetchReferrals,
  updateReferral,
} from "../thunk/ReferralsThunk";

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
  referral: Referral | null;
  loading: boolean;
  error: string | null;
}

const initialState: ReferralsState = {
  referrals: [],
  referral: null,
  loading: false,
  error: null,
};

const referralsSlice = createSlice({
  name: "referrals",
  initialState,
  reducers: {
    editReferral: (state: ReferralsState, action: PayloadAction<Referral>) => {
      state.referral = action.payload;
    },
    cancelEdit: (state: ReferralsState) => {
      state.referral = null;
    },
    onReferralChange: (
      state: ReferralsState,
      action: PayloadAction<{ name: keyof Referral; value: string }>
    ) => {
      if (state.referral) {
        const { name, value } = action.payload;
        state.referral = { ...state.referral, [name]: value };
      }
    },
  },
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
        state.error = action.error.message || "Failed to fetch referrals";
      })
      .addCase(updateReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateReferral.fulfilled, (state, action) => {
        state.referrals = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update referral";
      })

      .addCase(deleteReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReferral.fulfilled, (state, action) => {
        state.referrals = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update referral";
      });
  },
});

export const { editReferral, cancelEdit, onReferralChange } =
  referralsSlice.actions;

export default referralsSlice.reducer;
