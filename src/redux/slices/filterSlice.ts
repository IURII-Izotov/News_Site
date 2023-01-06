import {createSlice} from "@reduxjs/toolkit";

const initialState={
    searchText:'',
    filterValue:''
}

export const filterSlice=createSlice({
    name:'filters',
    initialState,
    reducers:{
        setSearchText(state,action){
            console.log(action.payload)
            state.searchText = action.payload
        },
        setFilterValue(state,action){
            state.filterValue = action.payload
        },

    }
})
export const {setSearchText,setFilterValue}=filterSlice.actions

export default filterSlice.reducer