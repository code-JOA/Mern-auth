// import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const Store = ConfigStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware(),
    devTools: true
});

export default store;