import React from 'react'
import {HiOutlineSearchCircle} from 'react-icons/hi'
import {MdUpcoming} from 'react-icons/md'
import {GiThreeFriends} from 'react-icons/gi'
import {HiUserGroup} from 'react-icons/hi'
import {IoIosSettings} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import Link from 'next/link'

const BottomNavigation = () => {
  return (
    <div className='w-full h-[70px] bg-[#F7F8FF] bottom-0 fixed flex justify-center items-center z-50 shadow-xl border-t-2 border-gray-200'>
        <div className='flex gap-7 justify-center items-center'>
            <Link href='/secondpage'>
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
                <FiLogOut/>
            </div>
        </div>
    </div>
  )
}

export default BottomNavigation
