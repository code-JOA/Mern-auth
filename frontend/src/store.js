// import { configureStore } from '@reduxjs/toolkit';
// // import authReducer from './slices/authSlice'



// const Store = configureStore({
//     reducer: {},
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
//     devTools: true
// });

// export default store;



import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
    reducer: {
    auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
});

export default store;
