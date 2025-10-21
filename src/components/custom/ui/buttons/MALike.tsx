import { Check, Plus } from 'lucide-react'
import React from 'react'

const MALike = ({liked, className, size}: {liked: boolean, size: number, className: string}) => {
  return (
    <>
    {
      liked
      ?
      <button className={`bg-white rounded-full p-0.5 ${className}
        size-${size}
        flex justify-center
        items-center
      `}>
        <Check color='black'/>
      </button>
      :
      <button className={`border-2 border-neutral-600 rounded-full p-0.5 ${className}
        size-${size}
        flex justify-center
        items-center
      hover:border-white
        hover:cursor-pointer
      `}>
        <Plus color='white'/>
      </button>
    }
    </>
  )
}

export default MALike