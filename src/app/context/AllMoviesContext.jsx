'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/AllMoviesreducer'
// import { AppContext } from "./TestContext";

const AllMoviesContext = createContext()

const initialstate = {
    isLoading:false,
    isError:false,
    allmovies:[]
}

const AppProvidertwo = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialstate)

    const getAllMovies = async()=>{
        dispatch({type:'IS_LOADING'})
        try{
            const allmovies = await axios.get('https://movies-api-others.vercel.app/movies/get')
            const allmoviesdata = allmovies.data
            dispatch({type:'ALL_MOVIES_DATA',payload:allmoviesdata})
        }catch(err){
            dispatch({type:'API_ERROR'})
        }
    }

    useEffect(()=>{
        getAllMovies()
    },[])

    return <AllMoviesContext.Provider value={{...state}}>
        {children}
    </AllMoviesContext.Provider>
}

const BrowseMoviesContext = ()=>{
    return useContext(AllMoviesContext)
}

export {AppProvidertwo,BrowseMoviesContext,AllMoviesContext}