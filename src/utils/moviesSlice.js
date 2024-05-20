import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying: null,
        popularMovies: null,
        addTrailer:null,
        topRated:null,
        upcomming:null
    },
    reducers:{
        addNowPlaying: (state,action) =>{
            state.nowPlaying = action.payload;
        },
        addTopRated: (state,action) =>{
            state.topRated = action.payload;
        },
        popularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTrailer:(state,action) =>{
            state.addTrailer = action.payload;
        },
        addUpcomming:(state,action)=>{
            state.upcomming = action.payload
        }
    }
})

export const {addNowPlaying,addTrailer,popularMovies,addTopRated,addUpcomming} = movieSlice.actions;
export default movieSlice.reducer;