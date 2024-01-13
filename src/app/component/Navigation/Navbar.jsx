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
import {BsFillPersonFill} from 'react-icons/bs'

const navlinksMenu = [
    {
        name:'Browse',
        href:'/browsemovies',
        icon:<HiOutlineSearchCircle/>
    },
    {
        name:'Coming Soon',
        href:'/comingsoonmovies',
        icon:<MdUpcoming/>
    }
]

const navlinksSocial = [
    {
        name:'Friends',
        href:'/friends',
        icon:<GiThreeFriends/>
    },
    {
        name:'Social',
        href:'/social',
        icon:<HiUserGroup/>
    }
]

const navlinksGeneral = [
    {
        name:'Settings',
        href:'/settings',
        icon:<IoIosSettings/>
    }
]
 
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
    <div className='border-r-2 border-gray-200 h-screen fixed py-10 w-[15%] flex flex-col justify-between'>
      <div className='flex flex-col gap-5 h-[80%] items-center pl-5'>
        <div className='w-full h-[20%] flex gap-1 justify-start items-baseline'>
            <div className='text-[50px]'><BsCameraReelsFill/></div>
            <h1 className='text-[30px] font-bold'>CineBase</h1>
        </div>
        <div className='flex flex-col gap-3 w-full h-[30%]'>
            <h1 className='font-semibold text-xl text-gray-400'>Menu</h1>
            <div className='flex flex-col'>
                {navlinksMenu.map((links)=>{
                    return (
                        <>
                        <div className='flex gap-4 items-center p-2 hover:bg-slate-200 w-[170px] rounded-lg'>
                            <div className='text-2xl text-gray-400'>{links.icon}</div> 
                            <Link href={`${links.href}`}><div className='text-gray-400 font-semibold cursor-pointer text-lg'>{links.name}</div></Link>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        <div className='flex flex-col gap-3 w-full h-[30%]'>
            <h1 className='font-semibold text-xl text-gray-400'>Social</h1>
            <div className='flex flex-col'>
                {navlinksSocial.map((links)=>{
                    return (
                        <>
                        <div className='flex gap-4 items-center p-2 hover:bg-slate-200 w-[170px] rounded-lg'>
                            <div className='text-2xl text-gray-400'>{links.icon}</div> 
                            <Link href={`${links.href}`}><div className='text-gray-400 font-semibold cursor-pointer text-lg'>{links.name}</div></Link>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        <div className='flex flex-col gap-3 w-full h-[30%]'>
            <h1 className='font-semibold text-xl text-gray-400'>General</h1>
            <div className='flex flex-col'>
                {navlinksGeneral.map((links)=>{
                    return (
                        <>
                        <div className='flex gap-4 items-center p-2 hover:bg-slate-200 w-[170px] rounded-lg'>
                            <div className='text-2xl text-gray-400'>{links.icon}</div> 
                            <Link href={`${links.href}`}><div className='text-gray-400 font-semibold cursor-pointer text-lg'>{links.name}</div></Link>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
      </div>
      <div className='px-5 flex flex-col'>
        <div className='rounded-2xl flex justify-center items-center flex-col gap-3 py-3 bg-slate-100'>
            <div className='text-5xl text-gray-400'><BsFillPersonFill/></div>
            {user ? 
            <>
            <div className='text-gray-400 flex items-center gap-2 px-8 py-1 bg-slate-200 rounded-lg'>
                <div className='text-3xl'><FiLogOut/></div>
                <button onClick={onLogout} className='text-lg font-semibold'>Logout</button>
            </div>
            </>
            :
            <>
            <div className='text-gray-400 flex items-center gap-2 px-8 py-1 bg-slate-200 rounded-lg'>
                <div className='text-3xl'><FiLogIn/></div>
                <button onClick={onLogIn} className='text-lg font-semibold'>Login</button>
            </div>
            </>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
