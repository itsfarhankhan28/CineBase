import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchtrendingmovies = createAsyncThunk('/fetchedmovies',async()=>{
    const response = await axios.get('https://movies-api-trending.vercel.app/trendingmovies')
    const data = response.data
    return data
})

const TrendingMoviesSlice = createSlice({
    name:'trendingmovies',
    initialState:{
        trendingmovies:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchtrendingmovies.pending,(state)=>{
            state.status = 'pending'
        }),
        builder.addCase(fetchtrendingmovies.fulfilled,(state,action)=>{
            state.status = 'succeded'
            state.trendingmovies = action.payload
        }),
        builder.addCase(fetchtrendingmovies.rejected,(state)=>{
            state.status = 'rejected'
        })
    }
})

export default TrendingMoviesSlice.reducer