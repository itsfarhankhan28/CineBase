import React from 'react'

const Trailer = (props) => {
  return (
    <div className='mx-auto h-[500px] w-[1000px] rounded-2xl flex'>
        <div className='w-[25%] bg-black rounded-tl-2xl rounded-bl-2xl'>
            <h1>div 1</h1>
        </div>
        <div className='w-[50%] '>
            <video height={500} width={500} controls autoPlay>
                <source src={`${props.video}`}/>
            </video>
        </div>
        <div className='w-[25%] bg-black rounded-tr-2xl rounded-br-2xl'>
            <h1>div 3</h1>
        </div>
    </div>
  )
}

export default Trailer
