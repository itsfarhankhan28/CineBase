/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React from 'react'
import TrendingCards from '../component/Cards/TrendingCards'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { useTestContext } from '../context/TestContext';
import Link from 'next/link';
import Loader2 from '../component/Loader/Loader2';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchtrendingmovies } from '@/utils/slices/TrendingMoviesSlice';

const TrendingMovieAPI = 'https://movies-api-trending.vercel.app/trendingmovies'

const Trending = () => {
    const trendingdata = useSelector((store)=>store.trendingmovies.trendingmovies)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchtrendingmovies())
    },[])

    if(!trendingdata){
        return(
            <Loader2/>
        )
    }

  return (
    <>
    {/* {console.log(TrendingMovieAPI)} */}
    <div className='lg:w-[1100px] mx-auto flex flex-col gap-5 z-10'>
        <h1 className='font-semibold lg:text-3xl xxsm:text-xl'>Trending Movies:-</h1>
        <div className=''>
                    <Swiper
                    breakpoints={{
                        350:{
                            slidesPerView:1
                        },
                        768:{
                            slidesPerView:2
                        },
                        1024:{
                            slidesPerView:2
                        }
                    }}
                    >
            {trendingdata.map((items)=>{
                console.log(items._id)
                return(
                items.media.map((item)=>{
                    return (
                        <div className='flex lg:gap-5'>
                            <SwiperSlide>
                            <Link 
                            href='/[movieurl]'
                            as={`/singlemovie/${items._id}?apiEndpoint=${TrendingMovieAPI}`}
                            >
                                <TrendingCards
                                moviename={`${items.moviename}`} 
                                movieposter={`${item.imageurl}`}
                                year={`${items.year}`}
                                ratings={`${items.ratings}`}
                                />
                            </Link>
                            </SwiperSlide>
                        </div>
                    )
                })
                )
            })}
            </Swiper>
        </div>
    </div>
    </>
  )
}

export default Trending
