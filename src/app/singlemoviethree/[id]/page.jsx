'use client'
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TopNavigation from '@/app/component/Navigation/MobileNavigation/TopNavigation'
import Navbar from '@/app/component/Navigation/Navbar'
import BottomNavigation from '@/app/component/Navigation/MobileNavigation/BottomNavigation'
import Trailer from '@/app/component/MovieContent/Trailer'
import Info from '@/app/component/MovieContent/Info'
import Description from '@/app/component/MovieContent/Description'
import Actors from '@/app/component/MovieContent/Actors'

const page = ({params}) => {
    const [singledata,setSingledata] = useState()

    const getSingleMovie = async()=>{
        const response = await axios.get(`https://latest-movies-api.vercel.app/movies/${params.id}`)
        const singlemoviedata = response.data
        setSingledata(singlemoviedata)
    }

    useEffect(()=>{
        getSingleMovie()
    },[])

    if(!singledata){
        return (
            <h1>Loading...</h1>
        )
    }

  return (
    <>
        <div className='flex justify-between w-[100vw]'>
            <div className='lg:hidden'>
                <TopNavigation/>
            </div>
            <div className='w-[15%] lg:visible lg:block hidden'>
                <Navbar/>
            </div>
            <div className='lg:hidden z-50'>
                <BottomNavigation/>
            </div>
            <div className='lg:w-[85%] h-auto bg-[#F7F8FF] overflow-y-visible pb-16 flex flex-col lg:gap-10 xxsm:pt-7 lg:pt-0'>
                {/* Movie trailer */}
                <div className='lg:visible lg:block hidden'>
                    {singledata.media.map((items)=>{
                        return (
                            <Trailer video={items.videourl}/>
                        )
                    })}
                </div>
                {/* Movie Information */}
                <div className='mx-auto'>
                    {singledata.media.map((items)=>{
                        return (
                            <Info 
                            poster={items.imageurl}
                            moviename={singledata.moviename}
                            genre={singledata.genres}
                            ratings={singledata.ratings}
                            movietime={singledata.movietime}
                            shortdescription={singledata.shortdescription}
                            year={singledata.year}
                            />
                        )
                    })}
                </div>
                {/* Movies Description and Actors,Directors and Producers */}
                <div className='flex lg:flex-row xxsm:flex-col-reverse gap-5 mx-auto lg:w-[1000px] p-5 z-10'>
                    <div className=' lg:w-[50%] lg:py-0 xxsm:px-3'>
                        <Description storyline={singledata.storyline}/>
                    </div>
                    <div className=' lg:w-[50%]'>
                        <Actors 
                        actors={singledata.stars}
                        director={singledata.director}
                        writer={singledata.writer}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page
