import { useRef, useState } from 'react';
import Album from '../musicContent/Album';

const LibraryItem = ({ name, id }: { name: string; id: number }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      draggable={true}
      onDragStart={(e) => {
        e.persist();

        e.dataTransfer.setData('my/id', `${id}`);
      }}
      className="flex rounded-lg p-1 border-1 items-center mb-2 hover:cursor-pointer"
    >
      <Album /> {name}
    </div>
  );
};

export default LibraryItem;
