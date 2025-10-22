import React from 'react'
import MATitle from '../../ui/text/MATitle'

const RecentlyListenedBlock = () => {
  return (
    <div className='flex items-center bg-neutral-800 rounded-md'>
      <img 
        src='https://picsum.photos/50/50'
        alt=''
        className='rounded-md'
      />
      <MATitle size='xl' className='ml-3'>Title</MATitle>
    </div>
  )
}

export default RecentlyListenedBlock