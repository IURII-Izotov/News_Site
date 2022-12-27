import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface Interface {
    items:any[]
    status:string
}

const initialState:Interface={
    items:[],
    status:''
};

export const newsSlice=createSlice({
    name:'news',
    initialState,
    reducers:{
        setNewsArr(state,action){
            console.log(action.payload)
            state.items = action.payload;
        },
    }
})
export const {setNewsArr}=newsSlice.actions

