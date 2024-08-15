import { configureStore } from '@reduxjs/toolkit'

export const RootStore = configureStore({
    reducer: {
        // Test1: Test1Reducer
    },
});

export type StoreType = ReturnType<typeof RootStore.getState>;

