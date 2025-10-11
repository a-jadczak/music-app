import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../../ui/carousel'
import { Card, CardContent } from '../../../ui/card'
import { Separator } from '../../../ui/separator'

const AlbumsCarousel = () => {
  return (
    <>
      <h1 className='text-4xl pl-4 mt-2 mb-2 font-semibold'>Title</h1>
      <Carousel>
        <CarouselContent className='pl-5 pr-5'>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
                <img
                  src="https://picsum.photos/300/300" 
                  alt="" 
                  className='rounded-md'
                />
                <h2 className='text-xl'>Album Title</h2>
                <span className='text-neutral-400'>Author</span>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious className='ml-17.5' variant='secondary'/>
        <CarouselNext className='mr-17.5' variant='secondary'/>
      </Carousel>
    </>
  )
}

export default AlbumsCarousel