import React from 'react'
import Display from './CardsDisplay/Display'
import DisplayTwo from './CardsDisplay/DisplayTwo'

const SciFiCards = (props) => {
  return (
    <>
    <div className='flex flex-col gap-2 h-[250px]'>
        <div
        style={{'--image-url': `url(${props.movieposter})`}}  
        className={`lg:w-[350px] xxsm:w-[165px] xxsm:h-[300px] lg:h-[90%] rounded-2xl shadow-xl flex items-end bg-[image:var(--image-url)] bg-center bg-cover cursor-pointer`}>
            {/* <Display moviename={props.moviename} ratings={props.ratings} year={props.year}/> */}
        </div>
        <div className='h-[10%]'>
          <DisplayTwo moviename={props.moviename}/>
        </div>
    </div>  
    </>
  )
}

export default SciFiCards
 