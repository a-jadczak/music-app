import React from 'react'
import MATitle from '../ui/text/MATitle'
import MASecondaryText from '../ui/text/MASecondaryText'
import MAPlay from '../ui/buttons/MAPlay'
import MALike from '../ui/buttons/MALike'
import MAFollow from '../ui/buttons/MAFollow'
import CarouselAlbum from './carouselType/CarouselAlbum'
import MusicEntityCarousel from './pageComponents/MusicEntityCarousel'
import MASongItem from '../ui/item/MASongItem'
import MATextToggle from '../ui/buttons/MATextToggle'

const ArtistPage = () => {
  return (
    <>
      <div className='relative'>
        <img src="https://picsum.photos/1200/400" 
          className='w-full rounded-t-lg'
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
        <div className='mt-2'>
          <MASongItem index={1}/>
          <MASongItem index={2}/>
          <MASongItem index={3}/>
          <MASongItem index={4}/>
          <MASongItem index={5}/>
          <MATextToggle className={'mt-2 ml-2 inline'}>Show More</MATextToggle>
        </div>
        
        <div className='mt-6 flex'>
          <MATitle weight='bold' className='flex-1'>Liked songs</MATitle>
          <MATextToggle className={'mt-2 ml-2 inline'}>Show All</MATextToggle>
        </div>
        <div className='flex items-center gap-4 mt-3'>
          <div className='relative'>
            <img src="https://picsum.photos/300/300" 
              alt="" 
              className='rounded-full w-25'
            />
            <MALike className="absolute bottom-0 right-0" liked={true} size={5}/>
          </div>
          <div>
            <MATitle size='xl'>You've liked X songs</MATitle>
            <MASecondaryText>By Buckethead</MASecondaryText>
          </div>
        </div>  
      </div>
      <MATitle className='ml-3'>Discography</MATitle>
      <MusicEntityCarousel title={''} musicEntity={'Artist'}/>
      
    </>
  )
}

export default ArtistPage