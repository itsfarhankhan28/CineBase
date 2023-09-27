import React from 'react'

const Display = (props) => {
  return (
    <div className='min-h-[110px] w-full p-3 backdrop-blur-3xl text-white rounded-br-lg rounded-bl-lg flex flex-col justify-between'>
      <div>
        <h1 className='font-semibold lg:text-lg'>{props.moviename}</h1>
      </div>
      <div className='flex justify-between'>
        <h1 className='lg:text-lg'>{props.year}</h1>
        <h1 className='lg:text-lg'>{props.ratings}</h1>
      </div>
    </div>
  )
}

export default Display
