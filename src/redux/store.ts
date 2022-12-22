import { configureStore } from '@reduxjs/toolkit'
import news from "./slices/newsSlice";

export const store = configureStore({
    reducer: {
        news
    },
})

export type RootState= ReturnType<typeof store.getState>