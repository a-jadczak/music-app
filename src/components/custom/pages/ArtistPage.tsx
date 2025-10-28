import React from 'react'
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
          <h1 className='title font-bold text-8xl'>Buckethead</h1>
          <h2 className='title text-lg p-2'>30 000 followers</h2>
        </div>
      </div>

      <div className='p-4'>
        <div className='flex items-center gap-2'>
          <MAPlay/>
          <MAFollow/>
        </div>
        <h3 className='title mt-4'>Popular</h3>
        <div className='mt-2'>
          <MASongItem index={1}/>
          <MASongItem index={2}/>
          <MASongItem index={3}/>
          <MASongItem index={4}/>
          <MASongItem index={5}/>
          <MATextToggle className={'mt-2 ml-2 inline'}>Show More</MATextToggle>
        </div>
        
        <div className='mt-6 flex'>
          <h3 className='title font-bold flex-1'>Liked songs</h3>
          <MATextToggle className={'mt-2 ml-2 inline'}>Show All</MATextToggle>
        </div>
        <div className='flex items-center gap-4 mt-3'>
          <div className='relative'>
            <img src="https://picsum.photos/300/300" 
              alt="" 
              className='rounded-full w-25'
            />
            <MALike className="absolute bottom-0 right-0" liked={true}/>
          </div>
          <div>
            <p className='title text-xl'>You've liked X songs</p>
            <span className='secondary'>By Buckethead</span>
          </div>
        </div>  
      </div>
      <h3 className='title ml-3'>Discography</h3>
      <MusicEntityCarousel title={''} musicEntity={'Artist'}/>
      
    </>
  )
}

export default ArtistPage