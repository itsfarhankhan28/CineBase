/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React from 'react'
import TrendingCards from '../component/Cards/TrendingCards'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTestContext } from '../context/TestContext';
import Loader from '../component/Loader/Loader';

const Trending = () => {

    const {isLoading,moviesdata} = useTestContext()

    if(isLoading){
        return(
            <Loader/>
        )
    }

  return (
    <div className='w-[1100px] mx-auto flex flex-col gap-5'>
        <h1 className='font-semibold text-3xl'>Trending Movies:-</h1>
        <div className=''>
                    <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    >
            {moviesdata.map((items)=>{
                return(
                items.media.map((item)=>{
                    return (
                        <div className='flex' key={items.id}>
                            <SwiperSlide>
                                <TrendingCards 
                                moviename={`${items.moviename}`} 
                                movieposter={`${item.imageurl}`}
                                year={`${items.year}`}
                                ratings={`${items.ratings}`}
                                />
                            </SwiperSlide>
                        </div>
                    )
                })
                )
            })}
            </Swiper>
        </div>
    </div>
  )
}

export default Trending
