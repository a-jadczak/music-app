import LibraryElement from '@/components/Items/LibraryElement';
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area';
import React from 'react';

const SongQueue = () => {
  return (
    <>
      <h3 className="title text-lg mb-3 font-semibold">Next</h3>
      <ScrollArea className="flex-1 overflow-auto">
        {Array.from({ length: 16 }).map((_, i) => (
          <LibraryElement key={i} />
        ))}
      </ScrollArea>
    </>
  );
};

export default SongQueue;
