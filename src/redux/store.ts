import {configureStore} from "@reduxjs/toolkit";
import {fetchPostApi} from "../api/post.api";
import {fetchUserApi} from "../api/user.api";
import {fetchLoginApi} from "../api/login.api";


export const store = configureStore({
    reducer:{
        [fetchPostApi.reducerPath]:fetchPostApi.reducer,
        [fetchUserApi.reducerPath]:fetchUserApi.reducer,
        [fetchLoginApi.reducerPath]:fetchLoginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            fetchPostApi.middleware,
            fetchUserApi.middleware,
            fetchLoginApi.middleware]),
})

// export const rootReducer= combineReducers({
//     news: newsSlice.reducer
// })
// export const store = createStore(rootReducer,applyMiddleware(thunk));
export type RootState= ReturnType<typeof store.getState>