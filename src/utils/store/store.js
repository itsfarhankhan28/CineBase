import { configureStore } from "@reduxjs/toolkit";
import AllMoviesSlice from "../slices/AllMoviesSlice";
import TrendingMoviesSlice from "../slices/TrendingMoviesSlice";

const store = configureStore({
    reducer:{
        allmovies:AllMoviesSlice,
        trendingmovies:TrendingMoviesSlice
    }
})

export default store