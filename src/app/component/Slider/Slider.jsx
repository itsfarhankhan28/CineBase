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
                    <SplideSlide data-splide-interval="2000">
                      <img className='h-[500px] w-[1100px] rounded-2xl' src={`${item.imageurl}`} alt="Image 1"/>
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