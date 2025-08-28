import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ---------- ASYNC THUNK ----------
export const fetchTodaysEnrollments = createAsyncThunk(
    "latestStudents/fetchToday",
    async ({ page = 1, limit = 20 }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/latest/enrollment`,
                {
                    params: { page, limit },
                    withCredentials: true,
                }
            );

            return {
                students: response.data.students || [],
                totalPages: response.data.pages || 1,
                total: response.data.total || 0,
                currentPage: page,
            };

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message ||
                "Failed to fetch today's enrollments"
            );
        }
    }
);

// ---------- SLICE ----------
const latestStudentSlice = createSlice({
    name: "latestStudents",
    initialState: {
        latestEnrollStudents: [],
        loading: false,
        error: null,
        currentPage: 1,
        totalPages: 1,
        todaysTotal: 0,
    },

    reducers: {
        clearLatestStudents(state) {
            state.latestEnrollStudents = [];
            state.loading = false;
            state.error = null;
            state.currentPage = 1;
            state.totalPages = 1;
            state.todaysTotal = 0;
            localStorage.clear();
        },
        deleteLatestStudent(state, action) {
            const studentID = action.payload;
            state.latestEnrollStudents = state.latestEnrollStudents.filter((s) => s._id !== studentID);
            state.total = Math.max(0, state.total - 1);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTodaysEnrollments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodaysEnrollments.fulfilled, (state, action) => {
                state.loading = false;
                state.latestEnrollStudents = action.payload.students;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.todaysTotal = action.payload.total;
            })
            .addCase(fetchTodaysEnrollments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearLatestStudents, deleteLatestStudent } = latestStudentSlice.actions;
export default latestStudentSlice.reducer;
