'use client'

import Navbar from './component/Navigation/Navbar'
import Sidebar from './component/Navigation/Sidebar'
import Slider from './component/Slider/Slider'
import Trending from './sections/Trending'
import Animation from './sections/Animation'
import SciFi from './sections/SciFi'
import { AppProvider } from './context/TestContext'
import { QueryClientProvider,QueryClient, } from 'react-query'

export default function Home() {

  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <AppProvider>
      <div className='flex flex-row justify-between w-[100vw] '>
        <div className='w-[15%]'>
          <Navbar/>
        </div>
        <div className='w-[85%] h-auto bg-[#F7F8FF] overflow-y-visible pb-10'>
          <div className='mt-5'>
            <div>
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
    </QueryClientProvider>
    </>
  )
}
