// import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";


const Store = configureStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware(),
    devTools: true
});

export default store;