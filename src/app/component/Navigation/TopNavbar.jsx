'use client'

import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {FaLessThan} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { NextResponse } from 'next/server';
import {BsFillPersonFill} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { searchMovies } from '@/utils/slices/AllMoviesSlice';

const TopNavbar = () => {
  const [user,setUser] = useState()
  const [searchVal, setSearchVal] = useState('')

  const getUserdata = async()=>{
    try{
      const userdata = await axios.get('/api/users/user')
      console.log(userdata.data.data.username)
      setUser(userdata.data.data.username)
    }catch(error){
      return NextResponse.json({error:error.message})
    }
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    getUserdata()
    dispatch(searchMovies(searchVal))
  },[searchVal,dispatch])

  return (
    <header class="text-gray-400 bg-white/30 backdrop-blur-md body-font sticky">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <div className='flex gap-2'>
      <Link href='/'>
        <div className='text-3xl cursor-pointer'>
          <FaLessThan/>
        </div>
      </Link>
      <Link href='/comingsoonmovies'>
        <div className='text-3xl cursor-pointer'>
          <FaGreaterThan/>
        </div>
      </Link>
    </div>

    {/* search */}
    <form
    onSubmit={(e)=>e.preventDefault()} 
    className='flex gap-1 justify-center items-center'>
        <input 
        className='bg-[#F7F8FF] border-2 border-gray-400 p-2 rounded-xl w-[300px]' 
        type="text" 
        name="text" 
        id="text"  
        placeholder='Search...'
        value={searchVal}
        onChange={(e)=>setSearchVal(e.target.value)}/>
        <span className='text-3xl relative right-12'><FiSearch/></span>
    </form>


    <div className='flex justify-center items-center gap-2'>
        <div className='text-[40px]'><BsFillPersonFill/></div>
        <div>
            <h1 className='font-semibold'>{user ? user : "Username"}</h1>
        </div>
    </div>
  </div>
</header>
  )
}

export default TopNavbar
