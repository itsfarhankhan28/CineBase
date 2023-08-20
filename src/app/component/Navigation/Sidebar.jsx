'use client'

import React from 'react'
import Avatar from '@mui/material/Avatar';
import { BrowseMoviesContext } from '@/app/context/AllMoviesContext';

const Sidebar = () => {

  const {allmovies} = BrowseMoviesContext()

  const getuniquedata = (data)=>{
    let newval = data.map((curelem)=>{
      return curelem.director
    })
    return newval = [...new Set(newval)]
    // console.log(newval)
  }
  console.log(allmovies)
  const filterMovies = getuniquedata(allmovies)
  console.log(filterMovies)

  return (
    <>
    <div className='flex justify-center lg:visible px-5'>
        <div className='flex flex-col gap-8 justify-center items-center h-screen fixed overflow-y-scroll'>
          <h1 className='text-gray-400 text-center text-xl'>See what your favourite Directors got for you</h1>
          {filterMovies?.map((item)=>{
            console.log(item)
            return(
              <>
                <button
                // key={index}
                type='button'
                name='director'
                value={item}
                >
                  <div className='flex flex-col items-center gap-1 cursor-pointer'>
                    <Avatar className='shadow-xl' style={{backgroundColor:'gray',width:'60px',height:'60px'}}>N</Avatar>
                    <h1 className='text-gray-400'>{item}</h1>
                  </div>
                </button>
              </>
            )
          })}
          {/* {filterMovies} */}
        </div>
    </div> 
    </>
  )
}

export default Sidebar
