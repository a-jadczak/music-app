import { Check } from 'lucide-react'
import React from 'react'

const MALike = ({className}: {className: string}) => {
  return (
    <button className={`bg-white rounded-full p-1 ${className}`}>
      <Check color='black'/>
    </button>
  )
}

export default MALike