import React, { useCallback } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../../ui/carousel'
import { Card, CardContent } from '../../../ui/card'
import { Separator } from '../../../ui/separator'
import type { MusicEntity } from '@/scripts/types/MusicEntity'
import CarouselAlbum from '../carouselType/CarouselAlbum'
import CarouselArtist from '../carouselType/CarouselArtist'

const MusicEntityCarousel = ({title, musicEntity}: {title: string, musicEntity: MusicEntity}) => {

  //TODO: Change later
  const render = Array.from({ length: 10 }).map((_, index) => (
    <CarouselAlbum key={index}/>
  ))
  
  return (
    <>
      <h1 className='text-2xl pl-4 mt-2 mb-2 font-semibold'>{title}</h1>
      <Carousel className='mb-10'>
        <CarouselContent className='pl-5 pr-5'>
          {render}
        </CarouselContent>
        <CarouselPrevious className='ml-17.5' variant='secondary'/>
        <CarouselNext className='mr-17.5' variant='secondary'/>
      </Carousel>
    </>
  )
}

export default MusicEntityCarousel