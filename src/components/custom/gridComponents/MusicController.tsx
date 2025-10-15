import React from 'react'
import Album from '../musicContent/Album'
import { ListMusicIcon, PauseIcon, PlayIcon, Settings, SkipBack, SkipForward, VolumeIcon, VolumeXIcon } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

const MusicController = () => {
  return (
    <footer className='flex justify-between p-3'>
      <div className='flex-1 flex'>
        <Album/>
      </div>
      <div className='flex-1/8'>

        <div className='flex justify-center items-center gap-10'>
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
      <div className='flex-1 flex items-center justify-end gap-4'>
        {/* <BookUserIcon/> */}
        <ListMusicIcon size={27.5}/>
        <div className='flex items-center gap-2 w-50'>
          {/* <VolumeIcon size={40}/> */}
          <VolumeXIcon size={35}/>
          <Slider 
            defaultValue={[12]}
            max={100}
            step={1} />
        </div>
        <Settings size={30}/>
      </div>
    </footer>
  )
}

export default MusicController