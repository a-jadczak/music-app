import LibraryElement from '@/components/Items/LibraryElement';
import { Separator } from '@/components/ui/shadcn/ui/separator';
import React from 'react';

const CurrentSong = () => {
  return (
    <>
      <h3 className="title text-xl mb-2 font-semibold">Now playing</h3>
      <LibraryElement />
      <Separator className="mt-2 mb-3" />
    </>
  );
};

export default CurrentSong;
