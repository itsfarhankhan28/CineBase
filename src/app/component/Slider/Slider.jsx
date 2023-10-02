/* eslint-disable @next/next/no-img-element */

import { useQuery } from 'react-query';
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import CarouselLoader from '../Loader/CarouselLoader';

const Slider = ()=> {

  const {isLoading,isError,data} = useQuery(
    'CarouselImage',
    async()=>{
      const movieposter = await axios.get('https://moviesapi3.onrender.com/movies?genres=Sci-Fi')
      return movieposter.data
    }
  )

  if(isLoading){
    return (
      <CarouselLoader/>
    )
  }

  if(isError){
    return (
      <h1>Error...</h1>
    )
  }
  console.log(data.map((item)=>{
    return(
      item.media.map((items)=>{
        return(
          items.imageurl
        )
      })
    )
  }))

  return (
    <>

      <div className='w-[1100px] h-[500px] mx-auto'>
        <Splide
        options={{
          autoplay:true,
          type:'loop',
          pauseOnHover:true,
          arrows:false
        }}>
          {data.map((items)=>{
            return (
              items.media.map((item)=>{
                return (
                  <>
                    <SplideSlide data-splide-interval="3000">
                      <img className='h-[500px] w-[1100px] rounded-2xl brightness-[55%] relative' src={`${item.imageurl}`} alt="Image 1"/>
                      <h1 className='absolute font-Carousel-font text-white bottom-28 left-5 font-semibold text-5xl'>{items.moviename}</h1>
                        <div className='flex gap-5 absolute left-5 bottom-16 text-white'>
                          <h1 className='font-semibold text-xl'>Released In: <span className='font-normal text-lg'>{items.year}</span></h1>
                          <h1 className='font-semibold text-xl'>Ratings: <span className='font-normal text-lg'>{items.ratings}</span></h1>
                        </div>
                      <div className='text-white absolute bottom-6 left-5'>
                      <h1 className='font-semibold text-xl'>Genres: <span className='font-normal text-lg'>{items.genres}</span></h1>
                      </div>
                    </SplideSlide>
                  </>
                )
              })
            )
          })}
        </Splide>
      </div>
    </>
  );
}

export default Slider;