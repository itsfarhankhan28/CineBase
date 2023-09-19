'use client'

import React from 'react'
import { BrowseMoviesContext } from '../context/AllMoviesContext'
import AllMoviesCards from '../component/Cards/AllMoviesCards'
import { FilterMoviesContext } from '../context/FilterContext';
import Loader from '../component/Loader/Loader';

const AllMovies = () => {
    
    const {filter_movies} = FilterMoviesContext()
    console.log(filter_movies)

    const {isLoading} = BrowseMoviesContext()
    if(isLoading){
        return(
            <Loader/>
        )
    }

  return (
    <div className='w-[1000px] mx-auto'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-3xl'>CineBase Collection:-</h1>
        </div>
        <div className='flex flex-wrap gap-5 mt-5'>
            {filter_movies.map((items)=>{
                return(
                items.media.map((item)=>{
                    return (
                        <div className='flex gap-5' key={items.id}>
                            <AllMoviesCards moviename={`${items.moviename}`} movieposter={`${item.imageurl}`}/>
                        </div>
                    )
                })
                )
            })}
        </div>
    </div>
  )
}

export default AllMovies
