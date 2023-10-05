'use client'

import Navbar from './component/Navigation/Navbar'
import Slider from './component/Slider/Slider'
import Trending from './sections/Trending'
import Animation from './sections/Animation'
import SciFi from './sections/SciFi'
import { AppProvider } from './context/TestContext'
import BottomNavigation from './component/Navigation/MobileNavigation/BottomNavigation'
import TopNavigation from './component/Navigation/MobileNavigation/TopNavigation'

export default function Home() {

  return (
    <>
    <AppProvider>
      <div className='lg:flex flex-row justify-between lg:w-[100vw]'>

        {/* Top navigation for Mobile screen */}
        <div className='lg:hidden z-50'>
          <TopNavigation/>
        </div>

        {/* Navigation for large screen */}
        <div className='w-[15%] lg:visible lg:block hidden'>
          <Navbar/>
        </div>

        {/*Bottom Navigation for Mobile screen */}
        <div className='lg:hidden z-50'>
          <BottomNavigation/>
        </div>

        <div className='lg:w-[85%] h-auto bg-[#F7F8FF] overflow-y-visible lg:pb-10 xxsm:pb-20 xxsm:pl-3 lg:pl-0'>
          <div className='lg:mt-5 xxsm:mt-14'>

            <div className='lg:visible xxsm:hidden lg:block'>
              <Slider/>
            </div>

            <div className='mt-10'>
              <Trending/>
            </div>

            <div className='mt-10'>
              <Animation/>
            </div>

            <div className='mt-10'>
              <SciFi/>
            </div>

          </div>
        </div>
      </div>
    </AppProvider>
    </>
  )
}
