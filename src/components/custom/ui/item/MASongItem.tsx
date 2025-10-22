import React from 'react'
import MATitle from '../text/MATitle'
import MASmallAnchor from '../text/MASmallAnchor'
import { Ellipsis } from 'lucide-react'
import MALike from '../buttons/MALike'
import MAOptions from '../buttons/MAOptions'

const MASongItem = ({index} : {index: number} ) => {
  return (
    <div className='grid 
    grid-cols-16
    w-full gap-4 rounded p-1
      hover:bg-neutral-700
    '>
      <div className='px-2 flex items-center'>
        <MATitle size='lg' className='w-full text-center' weight='normal'>{index}</MATitle>
      </div>
      <div className='col-span-9 flex flex-center items-center '>
        <img 
          className='rounded-lg h-12.5 mr-3'
          src='https://picsum.photos/300/300'
        />
        <div>
          <MATitle size='lg'>Song name</MATitle>
          <MASmallAnchor>Buckethead</MASmallAnchor>
        </div>
      </div>
      <div className='col-start-11 col-span-3 flex items-center justify-end'>
        <MATitle size='md' weight='normal' className='-translate-y-0.5'>300 000</MATitle>
      </div>
      <div className='col-start-14 flex items-center justify-end'>
        <MALike liked={false} className="size-5"/>
      </div>
      <div className='col-start-15 flex items-center justify-end'>
        <MATitle size='md' weight='normal' className='-translate-y-0.5'>3:57</MATitle>
      </div>
      <div className='col-start-16 flex items-center justify-center'>
        <MAOptions/>
      </div>
    </div>
  )
}

export default MASongItem