'use client'

import React from 'react'
import { AppProvidertwo } from '../context/AllMoviesContext'
import AllMovies from '../sections/AllMovies'
import Navbar from '../component/Navigation/Navbar'
import Sidebar from '../component/Navigation/Sidebar'
import TopNavbar from '../component/Navigation/TopNavbar'
// import { AllMoviesContext, BrowseMoviesContext } from '../context/AllMoviesContext'

const page = () => {

  return (
    <AppProvidertwo>
      <div className='flex flex-row justify-between w-[100vw]'>
        <div className='w-[15%]'>
          <Navbar/>
        </div>
        <div className='w-[75%] h-auto bg-[#F7F8FF] overflow-y-visible pb-10'>
          <div>
            <TopNavbar/>
          </div>
          <div className='mt-10'>
            <AllMovies/>
          </div>
        </div>
        <div className='w-[10%]'>
          <Sidebar/>
        </div>
      </div>
    </AppProvidertwo>
  )
}

export default page