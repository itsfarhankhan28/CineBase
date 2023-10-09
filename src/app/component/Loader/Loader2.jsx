import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Loader2 = () => {
  return (
    <div className='mx-auto w-[1100px] flex gap-52'> 
        <Box className="flex gap-5" style={{ width: 300 }}>
            <Box>
                <Skeleton width={240} height={230} variant='rounded' animation="wave" />
            </Box>
            <Box className="flex flex-col justify-between">
                <Box>
                <Skeleton width={200} height={30} variant='rounded' animation="wave"/>
                </Box>
                <Box className="flex flex-col gap-2">
                    <Skeleton width={150} height={20} variant='rounded' animation="wave"/>
                    <Skeleton width={150} height={20} variant='rounded' animation="wave"/>  
                </Box>
            </Box>
        </Box>
        <Box className="flex gap-5" style={{ width: 300 }}>
            <Box>
                <Skeleton width={240} height={230} variant='rounded' animation="wave" />
            </Box>
            <Box className="flex flex-col justify-between">
                <Box>
                <Skeleton width={200} height={30} variant='rounded' animation="wave"/>
                </Box>
                <Box className="flex flex-col gap-2">
                    <Skeleton width={150} height={20} variant='rounded' animation="wave"/>
                    <Skeleton width={150} height={20} variant='rounded' animation="wave"/>  
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Loader2
