/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { NextResponse } from "next/server"
import axios from 'axios'

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
            router.push('/profile')
        }catch(err){
            return NextResponse.json({error:"Error in Logging In"})
        }
    }

  return (
    <div className="flex justify-center items-center h-screen border">
      <div className="p-5 border border-black">
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="text" 
                name="email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                />
            </div>
            <div>
                <button onClick={onLogin}>
                    Login
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
