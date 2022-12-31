import {configureStore} from "@reduxjs/toolkit";
import {fetchNewsApi} from "../api/news.api";
import {fetchUserApi} from "../api/user.api";
import {fetchLoginApi} from "../api/login.api";


export const store = configureStore({
    reducer:{
        [fetchNewsApi.reducerPath]:fetchNewsApi.reducer,
        [fetchUserApi.reducerPath]:fetchUserApi.reducer,
        [fetchLoginApi.reducerPath]:fetchLoginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            fetchNewsApi.middleware,
            fetchUserApi.middleware,
            fetchLoginApi.middleware]),
})

// export const rootReducer= combineReducers({
//     news: newsSlice.reducer
// })
// export const store = createStore(rootReducer,applyMiddleware(thunk));
export type RootState= ReturnType<typeof store.getState>