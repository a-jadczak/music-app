import React from 'react'
import Album from './musicContent/Album'
import { PauseIcon, PlayIcon, SkipBack, SkipForward } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

const MusicController = () => {
  return (
    <footer className='flex justify-between p-3'>
      <div className='flex-1 flex'>
        <Album/>
      </div>
      <div className='flex-1/8'>

        <div className='flex justify-center items-center gap-3'>
          <SkipBack size={30}/>
          <button className='bg-white rounded-full p-2 hover:cursor-pointer'>
            <PlayIcon color='black' size={35}/>
            {/* <PauseIcon color='black' size={30}/> */}
          </button>
          <SkipForward size={30}/>
        </div>

        <div className='flex items-center justify-center gap-2 '>
          <span className='pb-1'>0:00</span>
          <Progress value={30} className='h-1'/>
          <span className='pb-1'>2:30</span>
        </div>

      </div>
      <div className='flex-1'>
        Div 3
      </div>
    </footer>
  )
}

export default MusicController