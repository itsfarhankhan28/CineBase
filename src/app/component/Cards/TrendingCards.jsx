import React from 'react'
import Display from './CardsDisplay/Display'

const TrendingCards = (props) => {
  return (
    <>
    <div>
        <div
        style={{'--image-url': `url(${props.movieposter})`}}  
        className={`lg:w-[350px] xxsm:w-[165px] lg:h-[350px] xxsm:h-[300px] rounded-2xl shadow-xl flex items-end bg-[image:var(--image-url)] bg-center bg-cover cursor-pointer`}>
            <Display moviename={props.moviename} year={props.year} ratings={props.ratings}/>
        </div>
    </div>  
    </>
  )
}

export default TrendingCards
 