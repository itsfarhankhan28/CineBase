import React from 'react'

const SciFiCards = (props) => {
  return (
    <>
    <div>
        <div
        style={{'--image-url': `url(${props.movieposter})`}}  
        className={`w-[300px] h-[300px] rounded-2xl shadow-xl flex justify-center items-center bg-[image:var(--image-url)] bg-center bg-cover cursor-pointer`}>
            {/* <h1>{props.moviename}</h1> */}
        </div>
    </div>  
    </>
  )
}

export default SciFiCards
 