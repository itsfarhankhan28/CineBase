import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Loader = () => {
  return (
    <div className='mx-auto w-[1100px] flex gap-5'>
        <Box style={{ width: 300 }}>
            <Skeleton width={300} height={300} variant='rounded' animation="wave" />
        </Box>
        <Box style={{ width: 300 }}>
            <Skeleton width={300} height={300} variant='rounded' animation="wave" />
        </Box>
        <Box style={{ width: 300 }}>
            <Skeleton width={300} height={300} variant='rounded' animation="wave" />
        </Box>
    </div>
  )
}

export default Loader
