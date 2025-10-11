import React from 'react'

const RecentlyListenedBlock = () => {
  return (
    <div className='flex items-center bg-neutral-800 rounded-md'>
        <img 
          src='https://picsum.photos/50/50'
          alt=''
          className='rounded-md'
        />
        <div className='ml-2 font-bold text-xl'>Title</div>
    </div>
  )
}

export default RecentlyListenedBlock