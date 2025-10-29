import React from 'react'
import { Ellipsis } from 'lucide-react'
import MALike from '../buttons/MALike'
import MAOptions from '../buttons/MAOptions'
import { Button } from '@/components/ui/shadcn/ui/button'

const MASongItemShort = ({index} : {index: number} ) => {
  return (
    <div className='grid 
    grid-cols-6
    w-full gap-4 rounded p-1
      hover:bg-neutral-700
    '>
      <div className='col-span-3 flex flex-center items-center '>
        <img 
          className='rounded-lg h-12.5 mr-3'
          src='https://picsum.photos/300/300'
        />
        <div>
          <p className='text text-lg'>Song name</p>
          <a href='#' className='anchor'>Buckethead</a>
        </div>
      </div>
      <div className='col-start-6 flex items-center'>
        <Button className='cursor-pointer'>Add</Button>
      </div>
    </div>
  )
}

export default MASongItemShort