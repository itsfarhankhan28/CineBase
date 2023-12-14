/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React from 'react'
import Navbar from '../component/Navigation/Navbar'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from 'next-themes';

const page = () => {

    // const {resolvedTheme,setTheme,theme} = useTheme()
    const {theme, setTheme } = useTheme()

  return (
    <div className='flex h-screen w-full'>
      <div className="w-[15%]">
        <Navbar/>
      </div>
      <div className='w-[85%]'>
        <div className='px-10 py-5 flex flex-col gap-5'>
            <h1 className='text-5xl font-semibold text-gray-400'>Settings:-</h1>
            <div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Appearance</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{display:"flex",justifyContent:"space-between",alignItems:"end"}}>
                    <Typography className='font-semibold text-gray-400'>
                        Enable Dark Mode
                    </Typography>
                    {/* <button onClick={()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                        {resolvedTheme === 'dark' ? 'light' : 'dark'}
                    </button> */}
                      <section>
                      {/* <button onClick={()=>setTheme("light")}>
                        Light
                      </button>
                      <button onClick={()=>setTheme("dark")}>
                        Dark
                      </button> */}
                      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
                      </section>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
