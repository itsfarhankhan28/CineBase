'use client'

import React from 'react'
import {HiOutlineSearchCircle} from 'react-icons/hi'
import {MdUpcoming} from 'react-icons/md'
import {GiThreeFriends} from 'react-icons/gi'
import {HiUserGroup} from 'react-icons/hi'
import {IoIosSettings} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {BsCameraReelsFill} from 'react-icons/bs'

import Link from 'next/link'
 
const Navbar = () => {
  return (
    <div className='border-r-2 border-gray-200 h-screen fixed py-10 w-[15%] bg-[#F7F8FF]'>
      <div className='flex gap-5 flex-col h-[80%] items-center pl-5'>
        <div className='w-full h-[20%] flex gap-1 justify-start items-baseline'>
            <div className='text-[50px]'><BsCameraReelsFill/></div>
            <h1 className='text-[30px] font-bold'>CineBase</h1>
        </div>
        <div className='flex flex-col gap-3 w-full h-[30%]'>
            <h1 className='font-semibold text-xl text-gray-400'>Menu</h1>
            <div className='flex gap-4 items-center'>
                <div className='text-2xl text-gray-400'><HiOutlineSearchCircle/></div>
                <Link href='/secondpage'><div className='text-gray-400 font-semibold cursor-pointer'>Browse</div></Link>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='text-2xl text-gray-400'><MdUpcoming/></div>
                <div className='text-gray-400 font-semibold cursor-pointer'>Coming Soon</div>
            </div>
        </div>
        <div className='flex flex-col gap-3 w-full h-[30%]'>
            <h1 className='font-semibold text-xl text-gray-400 cursor-pointer'>Social</h1>
            <div className='flex gap-4 items-center'>
                <div className='text-2xl text-gray-400'><GiThreeFriends/></div>
                <div className='text-gray-400 font-semibold cursor-pointer'>Friends</div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='text-2xl text-gray-400'><HiUserGroup/></div>
                <div className='text-gray-400 font-semibold cursor-pointer'>Social</div>
            </div>
        </div>
        <div className='flex flex-col gap-3 w-full h-[20%]'>
            <h1 className='font-semibold text-xl text-gray-400 cursor-pointer'>General</h1>
            <div className='flex gap-4 items-center'>
                <div className='text-2xl text-gray-400'><IoIosSettings/></div>
                <div className='text-gray-400 font-semibold cursor-pointer'>Settings</div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='text-2xl text-gray-400'><FiLogOut/></div>
                <div className='text-gray-400 font-semibold cursor-pointer'>Logout</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
