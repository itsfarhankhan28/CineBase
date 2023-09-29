import React from 'react'

const Info = (props) => {
  return (
    <div className='lg:w-[1000px] lg:h-[300px] flex lg:flex-row xxsm:flex-col gap-5 p-10'>
      <div className='lg:w-[30%]'>
        <img className='lg:w-full lg:h-auto xxsm:h-[250px] xxsm:w-[250px] rounded-2xl xxsm:shadow-xl' src={`${props.poster}`} alt="" />
      </div>
      <div className='lg:w-[70%] flex flex-col gap-3'>
        <div>
          <h1 className='font-semibold text-3xl'>{props.moviename}</h1>
        </div>
        <div>
          <h1 className='font-semibold'>Short Description:-</h1>
          <p>{props.shortdescription}</p>
        </div>
          <div>
            <div className='flex xxsm:flex-col lg:flex-row xxsm:gap-1 lg:gap-0 justify-between lg:w-[400px]'>
              <h1 className='font-semibold'>Ratings:<span className='font-normal'>{props.ratings}</span></h1>
              <div className='lg:visible lg:block hidden'>|</div>
              <h1 className='font-semibold'>Runtime:<span className='font-normal'>{props.movietime}</span></h1>
              <div className='lg:visible lg:block hidden'>|</div>
              <h1 className='font-semibold'>Released In:<span className='font-normal'>{props.year}</span></h1>
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
