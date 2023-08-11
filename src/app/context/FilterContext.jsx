'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { BrowseMoviesContext } from "./AllMoviesContext";
import reducer from '../reducer/FilterMoviesreducer'

const FilterContext = createContext()

const initialstate = {
    filter_movies : [],
    all_filter_movies : [],
}

const FilterProvider = ({children})=>{

    const {allmovies} = BrowseMoviesContext()
    console.log(allmovies)

    const[state,dispatch] = useReducer(reducer,initialstate)

    const sorting = ()=>{
        dispatch({type:"SORTED_MOVIES"})
    }

    useEffect(()=>{
        dispatch({type:"FILTER_MOVIES",payload:allmovies})
    },[allmovies])

    return <FilterContext.Provider value={{...state , sorting}}>
        {children}
    </FilterContext.Provider>
}

const FilterMoviesContext = ()=>{
    return useContext(FilterContext)
}

export {FilterContext,FilterProvider,FilterMoviesContext}
