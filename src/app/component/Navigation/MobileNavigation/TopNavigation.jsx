import React from 'react'
import {BsCameraReelsFill} from 'react-icons/bs'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { NextResponse } from 'next/server'

const TopNavigation = () => {

    const [user,setUser] = useState()

    const getUserDetials = async()=>{
        try{
            const response = await axios.get('/api/users/user')
            console.log(response.data.data.username)
            setUser(response.data.data.username)
        }catch(error){
            return NextResponse.json({error:error.message})
        }
    }

    useEffect(()=>{
        getUserDetials
    },[])

  return (
    <div className='top-0 fixed w-full h-[50px] py-2 px-2 flex justify-between items-center backdrop-blur-lg shadow-xl z-50'>
        <div className='flex gap-1 justify-start items-baseline'>
            <div className='text-[30px]'><BsCameraReelsFill/></div>
            <h1 className='text-[20px] font-bold'>CineBase</h1>
        </div>
        <div>
            <h1 className='text-gray-400 font-semibold text-md'>{user ? user : "Username"}</h1>
        </div>
    </div>
  )
}

export default TopNavigation
