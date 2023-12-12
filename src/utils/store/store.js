import { configureStore } from "@reduxjs/toolkit";
import AllMoviesSlice from "../slices/AllMoviesSlice";

const store = configureStore({
    reducer:{
        allmovies:AllMoviesSlice
    }
})

export default store