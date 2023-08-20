'use client'

import React from 'react'
import Avatar from '@mui/material/Avatar';
// import { FilterMoviesContext } from '@/app/context/FilterContext';
import { BrowseMoviesContext } from '@/app/context/AllMoviesContext';

const Sidebar = () => {

  const {allmovies} = BrowseMoviesContext()

  const getuniquedata = (data)=>{
    let newval = data.map((curelem)=>{
      return curelem.director
    })
    newval = [...new Set(newval)]
    console.log(newval)
  }
  console.log(allmovies)
  const filterMovies = getuniquedata(allmovies)

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
