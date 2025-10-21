import React from 'react'
import MATitle from '../ui/text/MATitle'
import MASecondaryText from '../ui/text/MASecondaryText'
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
          <MATitle size='md' className='pl-2'>Album</MATitle>
          <MATitle size={'8xl'} weight='bold'>Colma</MATitle>
          <div className='flex items-center gap-2'>
            <img src='https://picsum.photos/300/300' className='w-7.5 rounded-full'/>
            <a href='#' className='font-bold hover:underline'>Buckethead</a>
            <MASecondaryText>• 1998 •</MASecondaryText>
            <MASecondaryText> 13 songs •</MASecondaryText>
            <MASecondaryText> 52 min 13 sec</MASecondaryText>
          </div>
        </div>

      </div>

      <div className='p-4'>
        <div className='flex items-center gap-4 w-full p-3'>
          <MAPlay/>
          <MALike liked={false} className={''} size={8}/>
          <MAOptions/>
        </div>
        <div className='flex p-1'>
          <MASecondaryText className='px-2'>#</MASecondaryText>
          <MASecondaryText className='flex-4'>Title</MASecondaryText>
          <MASecondaryText className='flex-1'>Plays</MASecondaryText>
          <MASecondaryText className=''>
            <Timer/>
          </MASecondaryText>
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

        <MASecondaryText className=''>January 1, 1998</MASecondaryText>
        <MATitle className='mt-2'>Discography</MATitle>
        <MusicEntityCarousel title={''} musicEntity={'Artist'} />
      </div>

    </div>
  )
}

export default AlbumPage