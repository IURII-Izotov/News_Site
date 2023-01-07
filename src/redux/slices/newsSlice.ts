import { createSlice} from "@reduxjs/toolkit";

interface Interface {
    resultShortLink:boolean
    statusShortLink:string
}

const initialState:Interface={
    resultShortLink:false,
    statusShortLink:''
};

export const newsSlice=createSlice({
    name:'news',
    initialState,
    reducers:{

    }
})
export const {}=newsSlice.actions

