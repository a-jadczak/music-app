import React from 'react'
import MASecondaryText from '../ui/text/MASecondaryText'
import MATitle from '../ui/text/MATitle'

const Album = () => {
  return (
    <div className='row-span-2 max-w-13 flex items-center'>
      <img 
        src="https://picsum.photos/300/300" 
        alt="" 
        className='rounded-md'
      />
      <div className='ml-3 flex flex-col'>
        <MATitle weight='normal' size='xl'>Colma</MATitle>
        <MASecondaryText>Buckethead</MASecondaryText>
      </div>
    </div>
  )
}

export default Album