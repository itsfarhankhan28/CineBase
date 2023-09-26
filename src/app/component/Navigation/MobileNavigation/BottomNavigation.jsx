import React from 'react'
import {HiOutlineSearchCircle} from 'react-icons/hi'
import {MdUpcoming} from 'react-icons/md'
import {GiThreeFriends} from 'react-icons/gi'
import {HiUserGroup} from 'react-icons/hi'
import {IoIosSettings} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'

const BottomNavigation = () => {
  return (
    <div className='w-full h-[100px] bg-[#F7F8FF] bottom-0 fixed flex justify-center items-center z-50 shadow-xl border-t-2 border-gray-200'>
        <div className='flex gap-5 justify-center items-center'>
            <div className='text-[40px]'>
                <HiOutlineSearchCircle/>
            </div>
            <div className='text-[40px]'>
                <MdUpcoming/>
            </div>
            <div className='text-[40px]'>
                <GiThreeFriends/>
            </div>
            <div className='text-[40px]'>
                <HiUserGroup/>
            </div>
            <div className='text-[40px]'>
                <IoIosSettings/>
            </div>
            <div className='text-[40px]'>
                <FiLogOut/>
            </div>
        </div>
    </div>
  )
}

export default BottomNavigation
