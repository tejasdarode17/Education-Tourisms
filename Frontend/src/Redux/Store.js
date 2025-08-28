import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "../../src/Redux/authSlice";
import studentSlice from "../../src/Redux/studentSlice";
import latestStudentSlice from "./LatestStudents";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const studentsPersistConfig = {
    key: "students",
    storage,
};

const latestStudentsPersistConfig = {
    key: "latestStudents",
    storage,
};

const rootReducer = combineReducers({
    auth: authSlice, // Not persisted
    students: persistReducer(studentsPersistConfig, studentSlice), // Persisted
    latestStudents: persistReducer(latestStudentsPersistConfig, latestStudentSlice), // Persisted
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Ignore serialization warnings
        }),
});

export const persistor = persistStore(store);

export default store;
