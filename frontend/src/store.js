// import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";


const Store = ConfigStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware(),
    devTools: true
});

export default store;