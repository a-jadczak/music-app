import { CarouselItem } from '@/components/ui/carousel'
import React from 'react'

const CarouselArtist = ({ key }: { key: number }) => {
  return (
    <CarouselItem key={key} className="pl-1 md:basis-1/3 lg:basis-1/5">
      <div className="p-1">
        <img
          src="https://picsum.photos/300/300"
          alt=""
          className='rounded-full'
        />
        <h2 className='text-xl'>Album Title</h2>
        <span className='grayed-text'>Author</span>
      </div>
    </CarouselItem>
  )
}

export default CarouselArtist