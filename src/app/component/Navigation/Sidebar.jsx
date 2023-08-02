'use client'

import React from 'react'
import Avatar from '@mui/material/Avatar';

const Sidebar = () => {
  return (
    <>
    <div className='py-20 flex justify-center  lg:visible'>
        <div className='flex flex-col gap-8 justify-center items-center h-[80%] fixed'>
            <Avatar className='shadow-xl' style={{backgroundColor:'gray',width:'60px',height:'60px'}}>N</Avatar>
            <Avatar className='shadow-xl' style={{backgroundColor:'gray',width:'60px',height:'60px'}}>N</Avatar>
            <Avatar className='shadow-xl' style={{backgroundColor:'gray',width:'60px',height:'60px'}}>N</Avatar>
            <Avatar className='shadow-xl' style={{backgroundColor:'gray',width:'60px',height:'60px'}}>N</Avatar>
            <Avatar className='shadow-xl' style={{backgroundColor:'gray',width:'60px',height:'60px'}}>N</Avatar>
        </div>
    </div> 
    </>
  )
}

export default Sidebar
