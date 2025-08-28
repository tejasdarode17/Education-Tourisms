import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ---------- ASYNC THUNK ----------
export const checkAdminAuth = createAsyncThunk(
    "auth/checkAdminAuth",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/check-auth`, {
                withCredentials: true,
            });

            console.log(res.data);
            if (res.data.success) return res.data.admin;
            return rejectWithValue("Not authenticated");
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Auth check failed");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        adminData: {},
        loading: false,
        error: null,
    },

    reducers: {
        setUser(state, action) {
            state.isAuthenticated = true;
            state.adminData = action.payload;
            state.error = null;
        },
        clearUser(state) {
            state.isAuthenticated = false;
            state.adminData = {};
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(checkAdminAuth.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(checkAdminAuth.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.adminData = action.payload;
            })
            .addCase(checkAdminAuth.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.adminData = {};
                state.error = action.payload;
            });
    },


});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
