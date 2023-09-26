'use client'

import Navbar from './component/Navigation/Navbar'
import Sidebar from './component/Navigation/Sidebar'
import Slider from './component/Slider/Slider'
import Trending from './sections/Trending'
import Animation from './sections/Animation'
import SciFi from './sections/SciFi'
import { AppProvider } from './context/TestContext'
import { QueryClientProvider,QueryClient, } from 'react-query'
import BottomNavigation from './component/Navigation/MobileNavigation/BottomNavigation'

export default function Home() {

  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <AppProvider>
      <div className='lg:flex flex-row justify-between lg:w-[100vw]'>
        {/* Navigation for large screen */}
        <div className='w-[15%] lg:visible lg:block hidden'>
          <Navbar/>
        </div>
        {/* Navigation for Mobile screen */}
        <div className='lg:hidden z-50'>
          <BottomNavigation/>
        </div>
        <div className='lg:w-[85%] h-auto bg-[#F7F8FF] overflow-y-visible lg:pb-10 xxsm:pb-32'>
          <div className='lg:mt-5'>
            <div className='lg:visible xxsm:hidden lg:block'>
              <Slider/>
            </div>
            <div className='lg:mt-10'>
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
    </QueryClientProvider>
    </>
  )
}
