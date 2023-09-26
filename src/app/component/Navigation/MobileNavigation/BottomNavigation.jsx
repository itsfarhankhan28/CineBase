import React from 'react'
import {HiOutlineSearchCircle} from 'react-icons/hi'
import {MdUpcoming} from 'react-icons/md'
import {GiThreeFriends} from 'react-icons/gi'
import {HiUserGroup} from 'react-icons/hi'
import {IoIosSettings} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'

const BottomNavigation = () => {
  return (
    <div className='w-full h-[150px] bg-[#F7F8FF] border border-black bottom-0 fixed p-3 flex justify-center items-center'>
        <div className='flex gap-3 justify-center items-center'>
            <div className='text-2xl'>
                <HiOutlineSearchCircle/>
            </div>
            <div className='text-2xl'>
                <MdUpcoming/>
            </div>
            <div className='text-2xl'>
                <GiThreeFriends/>
            </div>
            <div className='text-2xl'>
                <HiUserGroup/>
            </div>
            <div className='text-2xl'>
                <IoIosSettings/>
            </div>
            <div className='text-2xl'>
                <FiLogOut/>
            </div>
        </div>
    </div>
  )
}

export default BottomNavigation
