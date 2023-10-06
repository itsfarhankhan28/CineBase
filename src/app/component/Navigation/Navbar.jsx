'use client'

import React, { useEffect, useState } from 'react'
import {HiOutlineSearchCircle} from 'react-icons/hi'
import {MdUpcoming} from 'react-icons/md'
import {GiThreeFriends} from 'react-icons/gi'
import {HiUserGroup} from 'react-icons/hi'
import {IoIosSettings} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {BsCameraReelsFill} from 'react-icons/bs'
import axios from 'axios'
import Link from 'next/link'
import { NextResponse } from 'next/server'
import { useRouter } from 'next/navigation'
import {FiLogIn} from 'react-icons/fi'
 
const Navbar = () => {
    const router = useRouter()
    const [user,setUser] = useState()
    const onLogout = async()=>{
        try{
            await axios.get('/api/users/logout')
            console.log("Logout successful")
            router.push('/login')
        }catch(error){
            return NextResponse.json({error:error.message})
        }
    }

    const getUserDetails = async()=>{
        try{
            const userdetails = await axios.get('/api/users/user')
            console.log(userdetails.data.data.username)
            setUser(userdetails.data.data.username)
        }catch(error){
            return NextResponse.json({error:error.message})
        }
    }

    const onLogIn = ()=>{
        router.push('/login')
    }

    useEffect(()=>{
        getUserDetails()
    },[])

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
                <Link href='/browsemovies'><div className='text-gray-400 font-semibold cursor-pointer'>Browse</div></Link>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='text-2xl text-gray-400'><MdUpcoming/></div>
                <Link href='/comingsoonmovies'><div className='text-gray-400 font-semibold cursor-pointer'>Coming Soon</div></Link>
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
                {user ? 
                <>
                <div className='text-2xl text-gray-400'><FiLogOut/></div>
                <button onClick={onLogout} className='text-gray-400 font-semibold cursor-pointer'>Logout</button>
                </> :
                <>
                <div className='text-2xl text-gray-400'><FiLogIn/></div>
                <button onClick={onLogIn} className='text-gray-400 font-semibold cursor-pointer'>LogIn</button>
                </> }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
