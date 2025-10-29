import React, { useState } from 'react'
import { Ellipsis } from 'lucide-react'
import MALike from '../buttons/MALike'
import MAOptions from '../buttons/MAOptions'

const MASongItem = ({index} : {index: number} ) => {
  const [liked, setLiked] = useState<boolean>(true);

  return (
    <div className='grid grid-cols-16
    group
    w-full gap-4 rounded p-1
    hover:bg-neutral-700
    '>
      <div className='px-2 flex items-center'>
        <span className='text text-lg w-full text-center'>{index}</span>
      </div>
      <div className='col-span-9 flex flex-center items-center '>
        <img 
          className='rounded-lg h-12.5 mr-3'
          src='https://picsum.photos/300/300'
        />
        <div>
          <h3 className='title text-lg'>Song name</h3>
          <a href='#' className='anchor'>Buckethead</a>
        </div>
      </div>
      <div className='col-start-11 col-span-3 flex items-center justify-end'>
        <span className='text -translate-y-0.5'>300 000</span>
      </div>
      <div className={`col-start-14 flex items-center justify-end
        ${!liked && "invisible group-hover:visible"}`}>
        <MALike liked={liked} className="size-5"/>
      </div>
      <div className='col-start-15 flex items-center justify-end'>
        <span className='text -translate-y-0.5'>3:57</span>
      </div>
      <div className='col-start-16 invisible flex items-center justify-center group-hover:visible'>
        <MAOptions/>
      </div>
    </div>
  )
}

export default MASongItem