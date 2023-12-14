'use client'

import React from 'react'
import AllMoviesCards from '../component/Cards/AllMoviesCards'
import Link from 'next/link';
import Loader2 from '../component/Loader/Loader2';
import { useDispatch,useSelector } from 'react-redux';
import { fetchmovies } from '@/utils/slices/AllMoviesSlice';
import { useEffect } from 'react';
import Dropdown from '../component/DropDown/Dropdown';

const OtherMoviesAPI = 'https://movies-api-others.vercel.app/movies'

const AllMovies = () => {

    const moviesdata = useSelector((store)=>store.allmovies.filteredmovies)
    console.log(moviesdata)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchmovies())
    },[dispatch])

    if(!moviesdata){
        return(
            <Loader2/>
        )
    }

  return (
    <div className='lg:w-[1100px] mx-auto'>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold lg:text-3xl xxsm:text-xl'>CineBase Collection:-</h1>
            <Dropdown/>
        </div>
        <div className='flex flex-wrap gap-x-5 gap-y-10 mt-5'>
            {moviesdata.map((items)=>{
                return(
                items.media.map((item)=>{
                    return (
                        <div className='flex gap-5' key={items.id}>
                        <Link 
                        href='/[movieurl]'
                        as={`singlemovie/${items._id}?apiEndpoint=${OtherMoviesAPI}`}
                        >
                            <AllMoviesCards 
                            moviename={`${items.moviename}`}
                            movieposter={`${item.imageurl}`}
                            ratings={`${items.ratings}`}
                            year={`${items.year}`}
                            />
                        </Link>
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
