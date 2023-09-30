/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import { NextResponse } from "next/server"
import Navbar from "../component/Navigation/Navbar"
import BottomNavigation from "../component/Navigation/MobileNavigation/BottomNavigation"
import TopNavigation from "../component/Navigation/MobileNavigation/TopNavigation"

const page = () => {
    const router = useRouter()
    const [user , setUser] = useState({
        username:"",
        email:"",
        password:""
    })

    const onSignup = async()=>{
        try{
            const response = await axios.post('/api/users/signup',user)
            console.log("Signup successful",response.data)
            router.push('/login')
        }catch(error){
            console.log(error.message)
            return NextResponse.json({error:error.message})
        }
    }

  return (
    <>

    <div className="flex flex-row justify-between w-[100vw]">
        <div className="lg:hidden">
            <TopNavigation/>
        </div>
        <div className="lg:w-[15%] lg:visible lg:block hidden">
            <Navbar/>
        </div>
        <div className="lg:hidden">
            <BottomNavigation/>
        </div>
        <div className="lg:w-[85%] xxsm:w-[100%] bg-[#F7F8FF]">
        <div className="flex justify-center items-center h-screen xxsm:pb-5 lg:pb-0">
        <div className="p-5 h-auto w-auto flex flex-col gap-5">
            <div><img className="lg:w-[200px] xxsm:w-[100px]" src='/IMG/authimg (2).png' alt="" /></div>
            <div className="leading-10">
                <h1 className="lg:text-3xl xxsm:text-2xl font-semibold">Welcome, Create your account</h1>
                <h4 className="lg:text-md text-gray-400">Enter your email and create a password</h4>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <input
                    className="w-full border-2 border-gray-400 p-3 rounded-lg"
                    placeholder="Username" 
                    type="text" 
                    name="username"
                    value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                    />
                </div>
                <div className="flex gap-5 lg:flex-row xxsm:flex-col">
                    <div>
                        <input 
                        className="w-full border-2 border-gray-400 p-3 rounded-lg"
                        placeholder="Email"
                        type="text" 
                        name="email"
                        value={user.email}
                        onChange={(e)=>setUser({...user,email:e.target.value})}
                        />
                    </div>
                    <div>
                        <input 
                        className="w-full border-2 border-gray-400 p-3 rounded-lg"
                        placeholder="Password"
                        type="password" 
                        name="password"
                        value={user.password}
                        onChange={(e)=>setUser({...user,password:e.target.value})}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="px-7 py-3 border-2 border-gray-400 rounded-md bg-white text-gray-400 font-semibold" onClick={onSignup}>
                    Submit
                </button>
            </div>
        </div>
    </div> 
        </div>
    </div> 
    </>
  )
}

export default page
