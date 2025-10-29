import { PauseIcon, PlayIcon } from 'lucide-react'
import React from 'react'

const MAPlay = () => {
  return (
    <button className='bg-white rounded-full p-2 cursor-pointer
      hover:scale-105
      '>
        <PlayIcon fill='full' size={30}/>
      {/* <PauseIcon fill='full' size={30}/> */}
    </button>
  )
}

export default MAPlay