import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loader from '../component/Loader/Loader'
import AnimationCards from '../component/Cards/AnimationCards'

const ComingSoon = () => {

    const {isLoading,isError,error,data} = useQuery(
        'Coming Soon Movies',
        async()=>{
            const response = await axios.get('https://coming-soon-movies-api.vercel.app/movies/get')
            return response.data
        }
    )

    if(isLoading){
        return(
            <Loader/>
        )
    }

    if(isError){
        return (
            <h1>{error}</h1>
        )
    }


  return (
    <div className='lg:w-[1100px] mx-auto pt-5 flex flex-col gap-5'>
        <h1 className='text-3xl font-semibold'>UpComing Movies:-</h1>
        <div className='flex gap-5'>
            {data.map((items)=>{
                return (
                    items.media.map((item)=>{
                        return (
                            <>
                            <div className='flex gap-5'>
                            <AnimationCards
                            moviename={`${items.moviename}`}
                            movieposter={`${item.imageurl}`}
                            />
                            </div>
                            </>
                        )
                    })
                )
            })}
        </div>
    </div>
  )
}

export default ComingSoon
