import { configureStore } from '@reduxjs/toolkit';

import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const Store = ConfigStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware(),
    devTools: true
});

export default store;