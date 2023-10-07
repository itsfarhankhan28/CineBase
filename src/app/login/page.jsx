/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { NextResponse } from "next/server"
import axios from 'axios'
import Navbar from "../component/Navigation/Navbar"
import BottomNavigation from "../component/Navigation/MobileNavigation/BottomNavigation"
import TopNavigation from "../component/Navigation/MobileNavigation/TopNavigation"

const page = () => {
    const router = useRouter()
    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const onLogin = async()=>{
        try{
            const response = await axios.post('/api/users/login',user)
            console.log(response)
            NextResponse.json(response,"User Login successful")
            router.push('/browsemovies')
        }catch(err){
            return NextResponse.json({error:"Error in Logging In"})
        }
    }

  return (
    <div className="flex">
        <div className="lg:hidden">
            <TopNavigation/>
        </div>
        <div className="lg:w-[15%] lg:visible lg:block hidden">
            <Navbar/>
        </div>
        <div className="lg:hidden">
            <BottomNavigation/>
        </div>
        <div className="flex justify-center items-center h-screen border lg:w-[85%] xxsm:w-[100%] bg-[#F7F8FF]">
      <div className="p-5 flex flex-col gap-3">
        <div>
            <img className="lg:w-[200px] xxsm:w-[150px]" src="/IMG/authimg (2).png" alt="" />
        </div>
        <div className="leading-10">
            <h1 className="lg:text-3xl xxsm:text-2xl font-semibold">Welcome back</h1>
            <h1 className="lg:text-md text-gray-400">Please enter your email and password</h1>
        </div>
        <div className="flex gap-5 lg:flex-row xxsm:flex-col">
            <div>
                <input 
                className="w-full p-3 border-2 border-gray-400 rounded-md"
                placeholder="Email"
                type="text" 
                name="email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                />
            </div>
            <div>
                <input
                className="w-full p-3 border-2 border-gray-400 rounded-md"
                placeholder="Password" 
                type="password" 
                name="password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                />
            </div>
        </div>
        <div className="mt-3 flex justify-end">
            <button className="border-2 border-gray-400 rounded-md px-7 py-3 font-semibold text-gray-400 bg-white" onClick={onLogin}>
                Login
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
