import React from 'react';
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area';
import { Separator } from '@/components/ui/shadcn/ui/separator';
import LibraryElement from '@/components/Items/LibraryElement';
import CurrentSong from './CurrentSong';
import SongQueue from './SongQueue';

const Queue = () => {
  return (
    <div className="ml-4 mr-2 overflow-hidden flex flex-col">
      <CurrentSong />
      <SongQueue />
    </div>
  );
};

export default Queue;
