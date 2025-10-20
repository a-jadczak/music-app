import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import MASmallAnchor from '../../ui/text/MASmallAnchor'
import MATitle from '../../ui/text/MATitle'

const CarouselAlbum = ({key}: {key: number}) => {
  return (
    <CarouselItem key={key} className="pl-1 sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
      <div className="p-1">
        <img
          src="https://picsum.photos/300/300"
          alt="" 
          className='rounded-md mb-1.5'
        />
        <MATitle size='xl' weight='normal'>Album Title</MATitle>
        <MASmallAnchor>Author</MASmallAnchor>
      </div>
    </CarouselItem>
  )
}

export default CarouselAlbum