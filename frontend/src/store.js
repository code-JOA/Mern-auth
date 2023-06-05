import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'



const Store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});

export default store;