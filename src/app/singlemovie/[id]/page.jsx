/* eslint-disable react/jsx-key */
'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import Info from '@/app/component/MovieContent/Info'
import Trailer from '@/app/component/MovieContent/Trailer'
import Navbar from '@/app/component/Navigation/Navbar'
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Description from '@/app/component/MovieContent/Description'
import Actors from '@/app/component/MovieContent/Actors'

const page = ({params}) => {
    const [singledata,setSingledata] = useState()

    const getSingleMovie = async()=>{
        const response = await axios.get(`https://trendingmovies-0fsd.onrender.com/trendingmovies/${params.id}`)
        const singlemoviedata = response.data
        console.log(singlemoviedata.year)
        setSingledata(singlemoviedata)
    }

    useEffect(()=>{
        getSingleMovie()
    },[])

    console.log("singledata: ",singledata)

    if(!singledata){
        return (
            <h1>Loading ...</h1>
        )
    }

  return (
    <>
        <div className='flex justify-between w-[100vw]'>
            <div className='w-[15%]'>
                <Navbar/>
            </div>
            <div className='w-[85%] h-auto bg-[#F7F8FF] overflow-y-visible pb-10 flex flex-col gap-10'>
                {/* Movie trailer */}
                <div>
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
                <div className='flex gap-5 mx-auto w-[1000px] p-5'>
                    <div className=' w-[50%]'>
                        <Description storyline={singledata.storyline}/>
                    </div>
                    <div className=' w-[50%]'>
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
