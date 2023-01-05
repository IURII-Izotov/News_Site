import {createSlice} from "@reduxjs/toolkit";
type FilterSort={
    name:string,
    sortProperty:'rating'|'price'|'title'|'-rating'|'-price'|'-title'
}

const initialState={
    searchText:'',
    filterValue:[]
}

export const filterSlice=createSlice({
    name:'filters',
    initialState,
    reducers:{
        setSearchText(state,action){
            state.searchText = action.payload
        },
        setFilterValue(state,action){
            state.filterValue = action.payload
        },

    }
})
export const {setSearchText,setFilterValue}=filterSlice.actions

export default filterSlice.reducer