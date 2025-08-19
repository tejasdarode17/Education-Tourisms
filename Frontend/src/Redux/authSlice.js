import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        adminData: {}
    },
    reducers: {
        setUser(state, action) {
            state.adminData = action.payload || {}
            state.isAuthenticated = true
        },
        clearUser(state, action) {
            state.adminData = {}
            state.isAuthenticated = false
        }
    }
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;