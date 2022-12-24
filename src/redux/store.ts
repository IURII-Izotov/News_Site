
import  {newsSlice} from "./slices/newsSlice";
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from 'redux';
export const rootReducer= combineReducers({
    news: newsSlice.reducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk));
export type RootState= ReturnType<typeof store.getState>