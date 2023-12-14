'use client'

import React from 'react'
import AllMovies from '../sections/AllMovies'
import Navbar from '../component/Navigation/Navbar'
import TopNavbar from '../component/Navigation/TopNavbar'
import BottomNavigation from '../component/Navigation/MobileNavigation/BottomNavigation'
import TopNavigation from '../component/Navigation/MobileNavigation/TopNavigation'

const page = () => {

  return (
          <div className='flex flex-row justify-between lg:w-[100vw]'>
            {/* Navigation for large screen */}
            <div className='w-[15%] lg:visible lg:block hidden'>
              <Navbar/>
            </div>

            <div className='lg:hidden z-50'>
              <BottomNavigation/>
            </div>

            {/* Top navigation for Mobile screen */}
            <div className='lg:hidden z-50'>
              <TopNavigation/>
            </div>

            <div className='lg:w-[85%] h-auto min-h-screen overflow-y-visible lg:pb-10 xxsm:pb-20 lg:pl-0 xxsm:pl-3'>
              {/* Top navigation for large screen */}
              <div className='lg:visible hidden lg:block'>
                <TopNavbar/>
              </div>
              <div className='lg:mt-10 xxsm:mt-14'>
                <AllMovies/>
              </div>
            </div>
            {/* <div className='w-[10%]'>
              <Sidebar/>
            </div> */}
          </div>
  )
}

export default page