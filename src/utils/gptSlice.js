import { createSlice } from "@reduxjs/toolkit";

const GPTSearch=createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch:false
    },
    reducers:{
        toggleGPTSearchView:(state,action)=>{
            state.showGPTSearch=!state.showGPTSearch
        }
    }
})


export const {toggleGPTSearchView}=GPTSearch.actions;
export default GPTSearch.reducer;