import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsApi} from "../../api/newsApi";

interface Interface {
    items:any[]
    status:string
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',async (params,thunkAPI)=>{

        const {data} = await newsApi.getPostList();
        console.log(data)
        setNewsArr(data);
    }
)

const initialState:Interface={
    items:[],
    status:''
};

export const newsSlice=createSlice({
    name:'news',
    initialState,
    reducers:{
        setNewsArr(state,action){
            state.items = action.payload;
        },
    }
})
export const {setNewsArr}=newsSlice.actions

