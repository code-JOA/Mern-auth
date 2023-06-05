import { configureStore } from "@reduxjs/toolkit";
import authReducer./slices/authSlice from ''



const Store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});

export default store;