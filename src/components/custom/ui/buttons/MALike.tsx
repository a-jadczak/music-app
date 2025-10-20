import { Check, Plus } from 'lucide-react'
import React from 'react'

const MALike = ({liked, className}: {liked: boolean, className: string}) => {
  return (
    <>
    {
      liked
      ?
      <button className={`bg-white rounded-full p-0.5 ${className}`}>
        <Check color='black' size={17.5}/>
      </button>
      :
      <button className={`border-2 border-neutral-600 rounded-full p-0.5 ${className}
      hover:border-white
        hover:cursor-pointer
      `}>
        <Plus color='white' size={15}/>
      </button>
    }
    </>
  )
}

export default MALike