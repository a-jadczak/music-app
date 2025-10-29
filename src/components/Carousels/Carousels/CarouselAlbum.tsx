import { CarouselItem } from '@/components/ui/shadcn/ui/carousel'
import React from 'react'

const CarouselAlbum = ({key}: {key: number}) => {
  return (
    <CarouselItem key={key} className="pl-1 sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
      <div className="p-1">
        <img
          src="https://picsum.photos/300/300"
          alt="" 
          className='rounded-md mb-1.5'
        />
        <h4 className='title text-lg'>Album Title</h4>
        <a href='#' className='anchor'>Author</a>
      </div>
    </CarouselItem>
  )
}

export default CarouselAlbum