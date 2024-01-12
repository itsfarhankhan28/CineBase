/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React from 'react'
import Navbar from '../component/Navigation/Navbar'

const page = () => {

  return (
    <div className='flex h-screen w-full'>
      <div className="w-[15%]">
        <Navbar/>
      </div>
      <div className='w-[85%]'>
        <div className='px-10 py-5 flex flex-col gap-5'>
            <h1 className='text-5xl font-semibold text-gray-400'>Settings:-</h1>
            <h1 className='text-3xl text-gray-300'>Coming Soon...</h1>
        </div>
      </div>
    </div>
  )
}

export default page
