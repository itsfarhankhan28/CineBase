'use client'

import React from 'react'
import { AllMoviesContext, BrowseMoviesContext } from '../context/AllMoviesContext'
import AllMoviesCards from '../component/Cards/AllMoviesCards'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { FilterMoviesContext } from '../context/FilterContext';

const AllMovies = () => {
    
    const {filter_movies , sorting} = FilterMoviesContext()
    console.log(filter_movies)

    const {isLoading, allmovies} = BrowseMoviesContext()
    if(isLoading){
        return(
            <>
            <div className='mx-auto w-[1000px]'>
                <Box style={{ width: 300 }}>
                    <Skeleton width={300} height={300} variant='rounded' animation="wave" />
                </Box>
            </div>
            </>
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
