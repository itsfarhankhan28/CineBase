import React from 'react'
import Display from './CardsDisplay/Display'
import DisplayTwo from './CardsDisplay/DisplayTwo'

const AnimationCards = (props) => {
  return (
    <>
    <div className='flex flex-col gap-2 h-[250px]'>
        <div
        style={{'--image-url': `url(${props.movieposter})`}}  
        className={`lg:w-[350px] xxsm:w-[165px] lg:h-[90%] xxsm:h-[300px] rounded-2xl shadow-xl flex items-end bg-[image:var(--image-url)] bg-center bg-cover cursor-pointer`}>
        </div>
        <div className='h-[10%]'>
          <DisplayTwo moviename={props.moviename}/>
        </div>
    </div>  
    </>
  )
}

export default AnimationCards
 