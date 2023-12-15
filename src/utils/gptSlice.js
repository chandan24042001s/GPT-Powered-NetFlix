import { createSlice } from "@reduxjs/toolkit";

const GPTSearch=createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch:false,
        gptMovieNames: null,
        tmdbResults:null
    },
    reducers:{
        toggleGPTSearchView:(state,action)=>{
            state.showGPTSearch=!state.showGPTSearch
        },
        addGpMovieResult:(state,action)=>{
            const {gptMovieNames,tmdbResults}=action.payload;
            state.gptMovieNames=gptMovieNames;
            state.tmdbResults=tmdbResults;
        }
    }
})


export const {toggleGPTSearchView,addGpMovieResult}=GPTSearch.actions;
export default GPTSearch.reducer;