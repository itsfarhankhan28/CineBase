import React from 'react'

const Description = (props) => {
  return (
    <div className='flex gap-2 flex-col'>
      <h1 className='font-semibold text-xl'>Storyline:-</h1>
      <p>{props.storyline}</p>
    </div>
  )
}

export default Description
