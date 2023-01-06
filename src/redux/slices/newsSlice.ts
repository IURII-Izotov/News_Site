import { createSlice} from "@reduxjs/toolkit";

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
            state.items = action.payload;
        },
    }
})
export const {setNewsArr}=newsSlice.actions

