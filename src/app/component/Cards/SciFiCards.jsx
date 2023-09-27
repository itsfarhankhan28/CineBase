import React from 'react'
import Display from './CardsDisplay/Display'

const SciFiCards = (props) => {
  return (
    <>
    <div>
        <div
        style={{'--image-url': `url(${props.movieposter})`}}  
        className={`lg:w-[350px] xxsm:w-[165px] xxsm:h-[300px] lg:h-[350px] rounded-2xl shadow-xl flex items-end bg-[image:var(--image-url)] bg-center bg-cover cursor-pointer`}>
            <Display moviename={props.moviename} ratings={props.ratings} year={props.year}/>
        </div>
    </div>  
    </>
  )
}

export default SciFiCards
 