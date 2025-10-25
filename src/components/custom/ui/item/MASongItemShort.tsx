import React from 'react'
import MATitle from '../text/MATitle'
import MASmallAnchor from '../text/MASmallAnchor'
import { Ellipsis } from 'lucide-react'
import MALike from '../buttons/MALike'
import MAOptions from '../buttons/MAOptions'
import { Button } from '@/components/ui/button'

const MASongItem = ({index} : {index: number} ) => {
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
          <MATitle size='lg'>Song name</MATitle>
          <MASmallAnchor>Buckethead</MASmallAnchor>
        </div>
      </div>
      <div className='col-start-6 flex items-center'>
        <Button className='cursor-pointer'>Add</Button>
      </div>
    </div>
  )
}

export default MASongItem