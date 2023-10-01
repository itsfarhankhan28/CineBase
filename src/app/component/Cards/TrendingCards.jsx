import React from 'react'
import Display from './CardsDisplay/Display'

const TrendingCards = (props) => {
  return (
    <>
    <div className='flex gap-2 lg:w-[500px]'>
        <div
        style={{'--image-url': `url(${props.movieposter})`}}  
        className={`lg:w-[50%] xxsm:w-[165px] lg:h-[250px] xxsm:h-[250px] rounded-2xl shadow-xl flex items-end bg-[image:var(--image-url)] bg-center bg-cover cursor-pointer`}>
        </div>
        <div className='lg:w-[50%] xxsm:w-min'>
        <Display moviename={props.moviename} year={props.year} ratings={props.ratings}/>
        </div>
    </div>  
    </>
  )
}

export default TrendingCards
 