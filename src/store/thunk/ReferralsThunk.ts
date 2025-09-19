import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Referral } from "../slice/ReferralsSlice";

export const fetchReferrals = createAsyncThunk(
  "referrals/fetchReferrals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:4000/api/referrals");
      return response.data as Referral[];
    } catch {
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const updateReferral = createAsyncThunk(
  "referrals/updateReferral",
  async (referral: Referral, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/referrals/${referral.id}`,
        referral
      );
      return response.data as Referral[];
    } catch {
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const deleteReferral = createAsyncThunk(
  "referrals/deleteReferral",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/referrals/${id}`
      );
      return response.data as Referral[];
    } catch {
      return rejectWithValue("An unknown error occurred");
    }
  }
);
