import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const CarouselLoader = () => {
  return (
    <div className='mx-auto w-[1100px]'>
        <Box style={{ width: 1100 }}>
            <Skeleton width={1100} height={500} variant='rounded' animation="wave" />
        </Box>
    </div>
  )
}

export default CarouselLoader
