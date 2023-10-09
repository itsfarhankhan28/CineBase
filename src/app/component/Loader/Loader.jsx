import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Loader = () => {
  return (
    <div className='mx-auto w-[1100px] flex gap-16'>
        <Box className="flex flex-col gap-3" style={{ width: 300 }}>
            <Skeleton width={350} height={220} variant='rounded' animation="wave" />
            <Skeleton width={200} height={30} variant='rounded' animation="wave"/>
        </Box>
        <Box className="flex flex-col gap-3" style={{ width: 300 }}>
            <Skeleton width={350} height={220} variant='rounded' animation="wave" />
            <Skeleton width={200} height={30} variant='rounded' animation="wave"/>
        </Box>
        <Box className="flex flex-col gap-3" style={{ width: 300 }}>
            <Skeleton width={350} height={220} variant='rounded' animation="wave" />
            <Skeleton width={200} height={30} variant='rounded' animation="wave"/>
        </Box>
    </div>
  )
}

export default Loader
