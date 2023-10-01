import React from 'react'
import Display from './CardsDisplay/Display'

const AllMoviesCards = (props) => {
  return (
    <div className='flex  gap-2 lg:w-[500px] '>
        <div
        style={{'--image-url': `url(${props.movieposter})`}}  
        className={`lg:w-[50%] xxsm:w-[165px] xxsm:h-[250px] lg:h-[300px] rounded-2xl shadow-xl flex justify-center items-end bg-[image:var(--image-url)] bg-center bg-cover cursor-pointer`}>
            {/* <Display moviename={props.moviename} year={props.year} ratings={props.ratings}/> */}
        </div>
        <div  className='lg:w-[50%] xxsm:w-min'>
          <Display moviename={props.moviename} year={props.year} ratings={props.ratings}/>
        </div>
    </div>
  )
}

export default AllMoviesCards
