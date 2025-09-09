import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ---------- ASYNC THUNK ----------
export const fetchAllStudents = createAsyncThunk(
    "students/fetchAll",
    async ({ page = 1, limit = 20 }, { rejectWithValue }) => {
        try {
            // const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/all`,
            const res = await axios.get(`/api/v1/admin/all`,
                {
                    params: { page, limit },
                    withCredentials: true,
                }
            );

            return {
                students: res.data.students || [],
                totalPages: res.data.pages || 1,
                total: res.data.total || 0,
                currentPage: page,
            };

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch all students"
            );
        }
    }
);

// ---------- SLICE ----------
const studentSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
        loading: false,
        error: null,
        selectedStudent: {},
        currentPage: 1,
        totalPages: 1,
        allTotal: 0,
    },

    reducers: {
        clearStudent(state) {
            state.students = [];
            state.loading = false;
            state.error = null;
            state.selectedStudent = {};
            state.currentPage = 1;
            state.totalPages = 1;
            state.allTotal = 0;
            localStorage.clear();
        },
        deleteStudent(state, action) {
            const studentID = action.payload;
            state.students = state.students.filter((s) => s._id !== studentID);
            state.total = Math.max(0, state.total - 1);
        },
        setSelectedStudent(state, action) {
            state.selectedStudent = action.payload;
        },
        setPage(state, action) {
            state.currentPage = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllStudents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllStudents.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload.students;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.allTotal = action.payload.total;
            })
            .addCase(fetchAllStudents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearStudent, setSelectedStudent, deleteStudent, setPage } = studentSlice.actions;
export default studentSlice.reducer;
