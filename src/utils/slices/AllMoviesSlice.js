import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchmovies = createAsyncThunk('fetchedMovies',async()=>{
    const response = await axios.get('https://movies-api-others.vercel.app/movies/get')
    const data = response.data
    return data
})

const AllMoviesSlice = createSlice({
    name:'allmovies',
    initialState:{
        allmovies:[],
        filteredmovies:[]
    },
    reducers:{
        searchMovies:(state,action)=>{
            state.filteredmovies = state.allmovies.filter((movies)=>{
                return movies.moviename.toLowerCase().includes(action.payload.toLowerCase())
            })
        },
        filterMovies:(state,action)=>{
            state.filteredmovies = state.allmovies.filter((movies)=>{
                return movies.genres.includes(action.payload)
            })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchmovies.pending,(state)=>{
            state.status = 'pending'
        }),
        builder.addCase(fetchmovies.fulfilled,(state,action)=>{
            state.status = 'successded',
            state.allmovies = action.payload,
            state.filteredmovies = action.payload
        }),
        builder.addCase(fetchmovies.rejected,(state)=>{
            state.status = 'rejected'
        })
    }
})

export const {searchMovies,filterMovies} = AllMoviesSlice.actions

export default AllMoviesSlice.reducer