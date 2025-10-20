import React from 'react'
import MATitle from '../ui/text/MATitle'
import MASecondaryText from '../ui/text/MASecondaryText'
import MAPlay from '../ui/buttons/MAPlay'
import MALike from '../ui/buttons/MALike'
import MAFollow from '../ui/buttons/MAFollow'

const ArtistPage = () => {
  return (
    <>
      <div className='relative h-100'>
        <img src="https://picsum.photos/1200/400" 
          className='absolute h-full'
          alt="" 
        />
        <div className='p-5 absolute z-10 bottom-0'>
          <MATitle weight='bold' className='text-8xl'>Buckethead</MATitle>
          <MATitle weight='normal' size='lg' className='p-2'>30 000 followers</MATitle>
        </div>
      </div>

      <div className='p-4'>
        <div className='flex items-center gap-2'>
          <MAPlay/>
          <MAFollow/>
        </div>
        <MATitle weight='bold' className='mt-4'>Popular</MATitle>

        <MATitle weight='bold' className='mt-4'>Liked songs</MATitle>
        <div className='flex items-center gap-4 mt-3'>
          <div className='relative'>
            <img src="https://picsum.photos/300/300" 
              alt="" 
              className='rounded-full w-25'
            />
            <MALike className="absolute bottom-0 right-0"/>
          </div>
          <div>
            <MATitle size='xl'>You've liked X songs</MATitle>
            <MASecondaryText>By Buckethead</MASecondaryText>
          </div>
        </div>
        
      </div>

    </>
  )
}

export default ArtistPage