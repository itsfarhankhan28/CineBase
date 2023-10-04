/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SciFiCards from '../component/Cards/SciFiCards';
import { useQuery } from 'react-query';
import Loader from '../component/Loader/Loader';
import Link from 'next/link';

const SciFi = () => {

    const {isLoading,isError,data} = useQuery(
        'SciFiMovies',
        async()=>{
            const moviesdata = await axios.get('https://moviesapi3.onrender.com/movies?genres=Sci-Fi')
            return moviesdata.data
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
    <div className='lg:w-[1100px] mx-auto flex flex-col gap-5 z-10'>
        <h1 className='font-semibold lg:text-3xl xxsm:text-xl'>Science Fiction Movies:-</h1>
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
                        <div className='flex gap-5 z-10' key={items.id}>
                            <SwiperSlide>
                            <Link href={`/singlemovietwo/${items._id}`}>
                                <SciFiCards 
                                moviename={`${items.moviename}`} 
                                movieposter={`${item.imageurl}`}
                                ratings={`${items.ratings}`}
                                year={`${items.year}`}
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

export default SciFi
