import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        removeMovie:(state,action)=>{
            state.movies=null;
        }
    }
})
export const {addNowPlayingMovies} =movieSlice.actions;
export default movieSlice.reducer;