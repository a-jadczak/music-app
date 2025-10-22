import { Check, Plus } from 'lucide-react'
import React from 'react'

const MALike = ({liked, className}: {liked: boolean, className: string}) => {
  return (
    <>
    {
      liked
      ?
      <button className={`bg-white rounded-full p-0.5 ${className}
        
        flex justify-center
        items-center
      `}>
        <Check color='black'/>
      </button>
      :
      <button className={`border-2 border-neutral-500 rounded-full p-0.5 ${className}
        flex justify-center
        items-center text-neutral-500
        cursor-pointer
      hover:border-white
        hover:text-white
      `}>
        <Plus />
      </button>
    }
    </>
  )
}

export default MALike