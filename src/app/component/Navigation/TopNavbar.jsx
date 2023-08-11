'use client'

import React, { useContext } from 'react'
// import './TopNavbar.css'?\
import Avatar from '@mui/material/Avatar';
import {FiSearch} from 'react-icons/fi'
import {FaLessThan} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import Link from 'next/link'
// import { AppContext, useTestContext } from '@/app/context/TestContext';

const TopNavbar = () => {

  // const {myName} = useTestContext(AppContext)
  // console.log(myName)

  return (
    <header class="text-gray-400 bg-white/30 backdrop-blur-md body-font sticky">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <div className='flex gap-2'>
      <Link href='/'>
        <div className='text-3xl cursor-pointer'>
          <FaLessThan/>
        </div>
      </Link>
      <Link href='/secondpage'>
        <div className='text-3xl cursor-pointer'>
          <FaGreaterThan/>
        </div>
      </Link>
    </div>
    <div className='flex gap-1 justify-center items-center'>
        <input className='bg-[#F7F8FF] border-2 border-gray-400 p-2 rounded-xl w-[300px]' type="search" name="" id=""  placeholder='Search...'/>
        <span className='text-3xl relative right-12'><FiSearch/></span>
    </div>
    <div className='flex justify-center items-center gap-3'>
        <Avatar className='shadow-xl' style={{backgroundColor:'gray',width:'60px',height:'60px'}}>N</Avatar>
        <div>
            <h1 className='font-semibold'>Username</h1>
        </div>
    </div>
  </div>
</header>
  )
}

export default TopNavbar
