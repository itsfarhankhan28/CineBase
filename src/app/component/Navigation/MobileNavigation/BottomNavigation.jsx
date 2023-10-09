import React from 'react'
import {HiOutlineSearchCircle} from 'react-icons/hi'
import {MdUpcoming} from 'react-icons/md'
import {GiThreeFriends} from 'react-icons/gi'
import {HiUserGroup} from 'react-icons/hi'
import {IoIosSettings} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import Link from 'next/link'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { FiLogIn } from 'react-icons/fi'

const BottomNavigation = () => {

    const [user,setUser] = useState()

    const getUserdetails = async()=>{
        const response = await axios.get('/api/users/user')
        console.log(response.data.data.username)
        setUser(response.data.data.username)
    }

    useEffect(()=>{
        getUserdetails()
    })

  return (
    <div className='w-full h-[70px] bg-[#F7F8FF] bottom-0 fixed flex justify-center items-center z-50 shadow-xl border-t-2 border-gray-200'>
        <div className='flex gap-7 justify-center items-center'>
            <Link href='/browsemovies'>
                <div className='text-[35px] text-gray-400'>
                    <HiOutlineSearchCircle/>
                </div>
            </Link>
            <div className='text-[35px] text-gray-400'>
                <MdUpcoming/>
            </div>
            <div className='text-[35px] text-gray-400'>
                <GiThreeFriends/>
            </div>
            <div className='text-[35px] text-gray-400'>
                <HiUserGroup/>
            </div>
            <div className='text-[35px] text-gray-400'>
                <IoIosSettings/>
            </div>
            <div className='text-[35px] text-gray-400'>
                if(user ? <FiLogOut/> : <FiLogIn/>)
            </div>
        </div>
    </div>
  )
}

export default BottomNavigation
