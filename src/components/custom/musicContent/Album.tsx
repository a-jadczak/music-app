import React from 'react'

const Album = () => {
  return (
    <div className='row-span-2 max-w-13 flex items-center'>
      <img 
        src="https://picsum.photos/300/300" 
        alt="" 
        className='rounded-md'
      />
      <div className='ml-3 flex flex-col'>
        <span className='text-xl'>Colma</span>
        <span className='text-md grayed-text'>Buckethead</span>
      </div>
    </div>
  )
}

export default Album