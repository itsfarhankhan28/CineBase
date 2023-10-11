'use client'

import React from 'react'
import Navbar from '../component/Navigation/Navbar'
import BottomNavigation from '../component/Navigation/MobileNavigation/BottomNavigation'
import ComingSoon from '../sections/ComingSoon'


const page = () => {
  return (
    <div className='flex'>
        <div className='w-[15%] lg:visible lg:block hidden'>
            <Navbar/>
        </div>
        <div className='lg:hidden z-50'>
            <BottomNavigation/>
        </div>
        <div className='lg:w-[85%] h-auto min-h-screen overflow-y-visible lg:pb-10 xxsm:pb-20 lg:pl-0 xxsm:pl-3'>
            <ComingSoon/>
        </div>
    </div>
  )
}

export default page
