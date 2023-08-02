/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from 'react'
import TrendingCards from '../component/Cards/TrendingCards'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css/core';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AnimationCards from '../component/Cards/AnimationCards';
import SciFiCards from '../component/Cards/SciFiCards';

const SciFi = () => {

    const [movies , setMovies] = useState([])

    const getMovies = async()=>{
        try{
            const moviesdata = await axios.get('https://moviesapi3.onrender.com/movies?genres=Sci-Fi')
            const actualdata = moviesdata.data
            setMovies(actualdata)
            console.log(movies)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getMovies()
    },[])

  return (
    <div className='w-[1000px] mx-auto flex flex-col gap-5'>
        <h1 className='font-semibold text-3xl'>Science Fiction Movies:-</h1>
        <div className=''>
                    <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    >
            {movies.map((items)=>{
                return(
                items.media.map((item)=>{
                    return (
                        <div className='flex gap-5' key={items.id}>
                            <SwiperSlide>
                                <SciFiCards moviename={`${items.moviename}`} movieposter={`${item.imageurl}`}/>
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

export default SciFi
