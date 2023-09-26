import React from 'react'

const Info = (props) => {
  return (
    <div className='w-[1000px] h-[300px] flex gap-5 p-10'>
      <div className='w-[30%]'>
        <img className='w-full h-auto rounded-2xl' src={`${props.poster}`} alt="" />
      </div>
      <div className='w-[70%] flex flex-col gap-3'>
        <div>
          <h1 className='font-semibold text-3xl'>{props.moviename}</h1>
        </div>
        <div>
          <h1 className='font-semibold'>Short Description:-</h1>
          <p>{props.shortdescription}</p>
        </div>
          <div>
            <div className='flex justify-between w-[400px]'>
              <h1 className='font-semibold'>Ratings:<span className='font-normal'>{props.ratings}</span></h1>
              <div>|</div>
              <h1 className='font-semibold'>Runtime:<span className='font-normal'>{props.movietime}</span></h1>
              <div>|</div>
              <h1 className='font-semibold'>Runtime:<span className='font-normal'>{props.year}</span></h1>
            </div>
          </div>
        <div className=''>
            <h1 className='font-semibold'>Genres:-<span className='font-normal'>{props.genre}</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Info
