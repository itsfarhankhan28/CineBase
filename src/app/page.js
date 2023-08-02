import Image from 'next/image'
import Navbar from './component/Navigation/Navbar'
import Sidebar from './component/Navigation/Sidebar'
import TopNavbar from './component/Navigation/TopNavbar'
import Slider from './component/Slider/Slider'
import Trending from './sections/Trending'
import Animation from './sections/Animation'
import SciFi from './sections/SciFi'
import { AppProvider } from './context/TestContext'

export default function Home() {
  return (
    <>
    <AppProvider>
      <div className='flex flex-row justify-between w-[100vw] '>
        <div className='w-[15%]'>
          <Navbar/>
        </div>
        <div className='w-[75%] h-auto bg-[#F7F8FF] overflow-y-visible pb-10'>
          <div>
            <TopNavbar/>
          </div>
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
        <div className='w-[10%]'>
          <Sidebar/>
        </div>
      </div>
    </AppProvider>
    </>
  )
}
