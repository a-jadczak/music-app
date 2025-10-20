import { PauseIcon, PlayIcon } from 'lucide-react'
import React from 'react'

const MAPlay = () => {
  return (
    <button className='bg-white rounded-full p-2 
      
      hover:cursor-pointer
      '>
      <PlayIcon fill='full' size={30}/>
      {/* <PauseIcon fill='full' size={30}/> */}
    </button>
  )
}

export default MAPlay