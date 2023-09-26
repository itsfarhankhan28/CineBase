import React from 'react'
import Display from './CardsDisplay/Display'

const AnimationCards = (props) => {
  return (
    <>
    <div>
        <div
        style={{'--image-url': `url(${props.movieposter})`}}  
        className={`lg:w-[350px] xxsm:w-[200px] lg:h-[350px] xxsm:h-[200px] rounded-2xl shadow-xl flex items-end bg-[image:var(--image-url)] bg-center bg-cover cursor-pointer`}>
            <Display moviename={props.moviename} ratings={props.ratings} year={props.year}/>
        </div>
    </div>  
    </>
  )
}

export default AnimationCards
 