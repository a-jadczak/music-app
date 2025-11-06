import { useRef, useState } from 'react';
import Album from '../musicContent/Album';
import { useDraggable } from '@/hooks/useDraggable';

const LibraryItem = ({ name, id }: { name: string; id: number }) => {
  const draggable = useDraggable(id);

  return (
    <div
      {...draggable}
      className="flex rounded-lg p-1 border-1 items-center mb-2 hover:cursor-pointer"
    >
      <Album /> {name}
    </div>
  );
};

export default LibraryItem;
