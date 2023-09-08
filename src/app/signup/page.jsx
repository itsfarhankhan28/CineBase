/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"

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
        }catch(err){
            console.log(err)
        }
    }

  return (
    <>
    <div className="flex justify-center items-center h-screen">
        <div className="p-5 border border-black">
            <h1>Signup page</h1>
            <div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    name="username"
                    value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                    />
                </div>
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
                    <button onClick={onSignup}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default page
