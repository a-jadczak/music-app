import React from 'react'
import MATitle from '../text/MATitle'
import MASmallAnchor from '../text/MASmallAnchor'
import { Ellipsis } from 'lucide-react'
import MALike from '../buttons/MALike'
import MAOptions from '../buttons/MAOptions'

const MASongItem = ({index} : {index: number} ) => {
  return (
    <div className='flex items-stretch w-full gap-4 rounded p-1
      hover:bg-neutral-700
    '>
      <div className='px-2 flex items-center'>
        <MATitle size='lg' weight='normal'>{index}</MATitle>
      </div>
      <div className='flex items-center'>
        <img 
          src='https://picsum.photos/300/300'
          className='rounded-lg h-12.5'
        />
      </div>
      <div className='flex-3'>
        <MATitle size='lg'>Song name</MATitle>
        <MASmallAnchor>Buckethead</MASmallAnchor>
      </div>
      <div className='flex-1 flex items-center'>
        <MATitle size='md' weight='normal'>300 000</MATitle>
      </div>
      <div className='flex items-center align-middle'>
        <MALike className={''} liked={false} size={5}/>
      </div>
      <div className='flex items-center'>
        <MATitle size='md' weight='normal'>3:57</MATitle>
      </div>
      <div className='flex items-center'>
        <MAOptions/>
      </div>
    </div>
  )
}

export default MASongItem