'use client'

import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import  axios  from 'axios'
import reducer from '../reducer/Tmoviesreducer'

const AppContext = createContext()

const initialstate = {
    isLoading : false,
    isError : false,
    moviesdata : [],
    trendingmovies : []
}

const AppProvider = ({children})=>{

    const [state , dispatch] = useReducer(reducer,initialstate)

    const getMovies = async()=>{
        dispatch({type:"SET_LOADING"})
        try{
            const moviesdata = await axios.get('https://movies-api-trending.vercel.app/trendingmovies/get')
            const movies = await moviesdata.data
            dispatch({type:"MOVIES_API_DATA",payload:movies})
        }catch(err){
            dispatch({type:"API_FETCH_ERROR"})
        }
    }

    useEffect(()=>{
        getMovies()
    },[])

    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
}

const useTestContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,useTestContext,AppContext}
