import React from 'react'
import MAPlay from '../ui/buttons/MAPlay'
import MALike from '../ui/buttons/MALike'
import { Ellipsis, Timer } from 'lucide-react'
import MAOptions from '../ui/buttons/MAOptions'
import { Separator } from '@/components/ui/separator'
import MASongItem from '../ui/item/MASongItem'
import CarouselAlbum from './carouselType/CarouselAlbum'
import MusicEntityCarousel from './pageComponents/MusicEntityCarousel'

const AlbumPage = () => {
  return (
    <div className='my-8'>
      <div className='flex'>
        <div className='flex justify-center mx-5'>
          <img src='https://picsum.photos/300/300' className='w-60 rounded-2xl'/>
        </div>

        <div className='flex-3 flex flex-col justify-center gap-5'>
          <h2 className='title pl-2 text-lg'>Album</h2>
          <h2 className='title text-8xl'>Colma</h2>
          <div className='flex items-center gap-2'>
            <img src='https://picsum.photos/300/300' className='w-7.5 rounded-full'/>
            <a href='#' className='font-bold hover:underline'>Buckethead</a>
            <span className='secondary'>• 1998 •</span>
            <span className='secondary'> 13 songs •</span>
            <span className='secondary'> 52 min 13 sec</span>
          </div>
        </div>

      </div>

      <div className='p-4'>
        <div className='flex items-center gap-4 w-full p-3'>
          <MAPlay/>
          <MALike liked={false} className={'size-8'}/>
          <MAOptions/>
        </div>
        <div className='grid cols-16 p-1'>
          <span className='secondary flex justify-center -translate-x-2'>#</span>
          <span className='secondary col-span-9'>Title</span>
          <span className='secondary col-start-11 col-span-3 flex justify-end'>Plays</span>
          <div className='col-start-14'></div>
          <div className='secondary col-start-15 flex items-center justify-end -translate-x-3'>
            <Timer size={20}/>
          </div>
          <div className='col-start-16 '></div>
        </div>
        <Separator/>

        <div className='my-2'>
          <MASongItem index={1}/>
          <MASongItem index={2}/>
          <MASongItem index={3}/>
          <MASongItem index={4}/>
          <MASongItem index={5}/>
          <MASongItem index={6}/>
          <MASongItem index={7}/>
          <MASongItem index={8}/>
          <MASongItem index={9}/>
          <MASongItem index={10}/>
        </div>

        <p className='secondary'>January 1, 1998</p>
        <h2 className='title mt-2'>Discography</h2>
        <MusicEntityCarousel title={''} musicEntity={'Artist'} />
      </div>

    </div>
  )
}

export default AlbumPage