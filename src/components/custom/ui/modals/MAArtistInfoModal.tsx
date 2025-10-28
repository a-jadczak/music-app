import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Youtube from '@/assets/icons/socialMedia/Youtube'
import Instagram from '@/assets/icons/socialMedia/Instagram'
import Facebook from '@/assets/icons/socialMedia/Facebook'
import XIcon from '@/assets/icons/socialMedia/XIcon'
import { ScrollArea } from '@/components/ui/scroll-area'

const MAArtistInfoModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-full h-175">
        <ScrollArea className='overflow-auto'>
          <DialogHeader>
            <Carousel className="">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img 
                        src='https://picsum.photos/1200/700'
                        />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className='ml-17.5' variant='secondary'/>
              <CarouselNext className='mr-17.5' variant='secondary'/>
            </Carousel>
            <DialogTitle>
              <h2 className='title text-4xl'>Title</h2>
            </DialogTitle>
            <Separator/>

            <div className='flex gap-2'>
              <div className='flex-1'>
                <h3 className='title'>30 000 000</h3>
                <span className='secondary'>Followers</span>
                <Separator/>
                <div className='flex flex-col gap-4 mt-2'>
                  <div className='flex  items-center  gap-2'>
                    <Youtube className='size-5 translate-y-0.5'/>
                    <a href='#' className='anchor'>Youtube</a>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Instagram className='size-5 translate-y-0.5'/>
                    <a href='#' className='anchor'>Instagram</a>
                  </div>
                  <div className='flex items-center  gap-2'>
                    <Facebook className='size-5 translate-y-0.5'/>
                    <a href='#' className='anchor'>Facebook</a>
                  </div>
                  <div className='flex items-center gap-2'>
                    <XIcon className='size-5 translate-y-0.5'/>
                    <a href='#' className='anchor'>X</a>
                  </div>
                </div>


              </div>
              <div className='flex-2'>
                <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam quidem excepturi labore temporibus minima velit. Magnam voluptas consequuntur recusandae nobis ratione facere eos iste esse quisquam nulla, incidunt, reiciendis vitae porro nesciunt aliquid nostrum impedit eaque tempore sapiente. Qui dolor assumenda expedita quibusdam perspiciatis, earum voluptas ullam ea doloremque maiores molestias minima repellat ut voluptatibus unde quis? Commodi tenetur quas odit, quaerat ducimus excepturi natus praesentium ad at illum unde repudiandae eum nisi officia cum veniam maiores dolore quod. Ex delectus, doloribus voluptate aspernatur, obcaecati est eligendi unde voluptas molestiae repellendus aliquid provident aut itaque magni. Eligendi, nostrum tenetur?
                </span>
              </div>
            </div>

          </DialogHeader>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default MAArtistInfoModal