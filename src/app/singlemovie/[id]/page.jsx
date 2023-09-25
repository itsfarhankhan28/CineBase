/* eslint-disable react/jsx-key */
'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import Info from '@/app/component/MovieContent/Info'
import Trailer from '@/app/component/MovieContent/Trailer'
import Navbar from '@/app/component/Navigation/Navbar'
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

const page = ({params}) => {
    const [singledata,setSingledata] = useState()

    const getSingleMovie = async()=>{
        const response = await axios.get(`https://trendingmovies-0fsd.onrender.com/trendingmovies/${params.id}`)
        const singlemoviedata = response.data
        console.log(singlemoviedata)
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
            <div className='w-[85%] h-auto bg-[#F7F8FF] overflow-y-visible pb-10 flex flex-col gap-5'>
                {/* Movie trailer */}
                <div>
                {singledata.media.map((items)=>{
                    return (
                        <Trailer video={items.videourl}/>
                    )
                })}
                </div>
                <div className='mx-auto'>
                    {/* Movie Information */}
                    <div>
                    {singledata.media.map((items)=>{
                        return (
                            <Info 
                            poster={items.imageurl}
                            moviename={singledata.moviename}
                            genre={singledata.genres}
                            ratings={singledata.ratings}
                            movietime={singledata.movietime}
                            shortdescription={singledata.shortdescription}
                            />
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page
