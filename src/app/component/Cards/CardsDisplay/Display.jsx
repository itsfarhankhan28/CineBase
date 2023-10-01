import React from 'react'

const Display = (props) => {
  return (
    <div className='h-full w-full p-3 flex flex-col justify-between'>
      <div>
        <h1 className='font-semibold lg:text-xl'>{props.moviename}</h1>
      </div>
      <div className='flex flex-col justify-between'>
        <h1 className='font-semibold'>Released In: <span className='font-normal'>{props.year}</span></h1>
        <h1 className='font-semibold'>Ratings: <span className='font-normal'>{props.ratings}</span></h1>
      </div>
    </div>
  )
}

export default Display
