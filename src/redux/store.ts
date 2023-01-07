import {configureStore} from "@reduxjs/toolkit";
import {fetchPostApi} from "../api/post.api";
import {fetchUserApi} from "../api/user.api";
import {fetchLoginApi} from "../api/login.api";
import {filterSlice} from "./slices/filterSlice";
import {shortLinkApi} from "../api/short_link.api";



export const store = configureStore({
    reducer:{
        [fetchPostApi.reducerPath]:fetchPostApi.reducer,
        [fetchUserApi.reducerPath]:fetchUserApi.reducer,
        [fetchLoginApi.reducerPath]:fetchLoginApi.reducer,
        [shortLinkApi.reducerPath]:shortLinkApi.reducer,
        filter:filterSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            fetchPostApi.middleware,
            fetchUserApi.middleware,
            shortLinkApi.middleware,
            fetchLoginApi.middleware]),
})

export type RootState= ReturnType<typeof store.getState>