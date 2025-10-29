import React from 'react';
import {
  ListMusicIcon,
  PauseIcon,
  PlayIcon,
  Settings,
  SkipBack,
  SkipForward,
  VolumeXIcon,
} from 'lucide-react';
import { Progress } from '@/components/ui/shadcn/ui/progress';
import { Slider } from '@/components/ui/shadcn/ui/slider';
import MAPlay from '@/components/ui/MA/buttons/MAPlay';
import Album from '@/components/musicContent/Album';

const MusicController = () => {
  return (
    <footer className="flex justify-between p-3">
      <div className="flex-1 flex">
        <Album />
      </div>
      <div className="flex-1/8">
        <div className="flex justify-center items-center gap-10">
          <SkipBack size={30} />
          <MAPlay />
          <SkipForward size={30} />
        </div>

        <div className="flex items-center justify-center gap-2 ">
          <span className="pb-1">0:00</span>
          <Progress value={30} className="h-1" />
          <span className="pb-1">2:30</span>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end gap-4">
        {/* <BookUserIcon/> */}
        <ListMusicIcon size={27.5} />
        <div className="flex items-center gap-2 w-50">
          {/* <VolumeIcon size={40}/> */}
          <VolumeXIcon size={35} />
          <Slider defaultValue={[12]} max={100} step={1} />
        </div>
        <Settings size={30} />
      </div>
    </footer>
  );
};

export default MusicController;
