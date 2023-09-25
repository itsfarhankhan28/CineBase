/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React from 'react'
import TrendingCards from '../component/Cards/TrendingCards'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTestContext } from '../context/TestContext';
import Loader from '../component/Loader/Loader';
import Link from 'next/link';

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
                console.log(items._id)
                return(
                items.media.map((item)=>{
                    return (
                        <div className='flex'>
                            <SwiperSlide>
                            <Link href={`/singlemovie/${items._id}`}>
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
  )
}

export default Trending
