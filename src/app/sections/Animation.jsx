/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AnimationCards from '../component/Cards/AnimationCards';
import { useQuery } from 'react-query';;
import Loader from '../component/Loader/Loader';

const Animation = () => {
    const {isLoading,isError,data} = useQuery(
        'AnimatedMovies',
        async()=>{
            const moviedata = await axios.get('https://moviesapi3.onrender.com/movies?genres=Animation')
            return moviedata.data
        }
    )

    if(isLoading){
        return(
            <Loader/>
        )
    }

    if(isError){
        return <h1>Error...</h1>
    }

  return (
    <div className='lg:w-[1100px] xxsm:w-full mx-auto flex flex-col gap-5 z-10'>
        <h1 className='font-semibold lg:text-3xl xxsm:text-xl'>Animated Movies:-</h1>
        <div className=''>
                    <Swiper
                    breakpoints={{
                        350:{
                            slidesPerView:2
                        },
                        768:{
                            slidesPerView:2
                        },
                        1024:{
                            slidesPerView:3
                        }
                    }}
                    >
            {data.map((items)=>{
                return(
                items.media.map((item)=>{
                    return (
                        <div className='flex lg:gap-5' key={items.id}>
                            <SwiperSlide>
                                <AnimationCards 
                                moviename={`${items.moviename}`} 
                                movieposter={`${item.imageurl}`}
                                ratings={`${items.ratings}`}
                                year={`${items.year}`}
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

export default Animation
