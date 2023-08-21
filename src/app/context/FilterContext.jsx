'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { BrowseMoviesContext } from "./AllMoviesContext";
import reducer from '../reducer/FilterMoviesreducer'
import { DisplaySettings } from "@mui/icons-material";

const FilterContext = createContext()

const initialstate = {
    filter_movies : [],
    all_filter_movies : [],
    sorting_value:"Sci-Fi",
    filter:{
        text:"",
        director:"Michael Bay"
    }
}

const FilterProvider = ({children})=>{

    const {allmovies} = BrowseMoviesContext()
    console.log(allmovies)

    const[state,dispatch] = useReducer(reducer,initialstate)

    const sorting = ()=>{
        dispatch({type:"SORTED_MOVIES"})
    }

    const onChangeSearch = (event)=>{
        let name = event.target.name
        let value = event.target.value

        return dispatch({type:"ON_SEARCH_CHANGE" , payload:{name,value}})
    }

    useEffect(()=>{
        dispatch({type:"SEARCH_FILTER_MOVIES"})
        dispatch({type:"SORTING_VALUE",payload:allmovies})
    },[allmovies ,state.sorting_value,state.filter])

    useEffect(()=>{
        dispatch({type:"FILTER_MOVIES",payload:allmovies})
    },[allmovies])

    return <FilterContext.Provider value={{...state , sorting , onChangeSearch}}>
        {children}
    </FilterContext.Provider>
}

const FilterMoviesContext = ()=>{
    return useContext(FilterContext)
}

export {FilterContext,FilterProvider,FilterMoviesContext}
