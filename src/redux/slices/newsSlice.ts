import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface Interface {

}



const initialState:Interface=[];

export const newsSlice=createSlice({
    name:'news',
    initialState,
    reducers:{
        setNewsArr(state,action){
           return state
        },
    }
})
export const {setNewsArr}=newsSlice.actions

