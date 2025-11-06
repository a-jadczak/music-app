import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Folder } from 'lucide-react';
import MAToggle from '../ui/MA/buttons/MAToggle';
import { useFolderStore } from '@/store/useFolderStore';
import DropZone from '../DropZone/DropZone';
import { useDraggable } from '@/hooks/useDraggable';

const LibraryFolder = ({ children, id: folderId }: { children: React.ReactNode; id: number }) => {
  const { moveItem } = useFolderStore();
  const { draggable } = useDraggable(folderId);

  const [hidden, setHidden] = useState(true);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = Number.parseInt(e.dataTransfer.getData('my/id'));
    moveItem(id, folderId);
  };

  return (
    <>
      <div
        {...draggable}
        className="flex flex-col rounded-lg bg-card p-1.5 border-1 mb-2 cursor-pointer"
      >
        <div className="flex items-stretch w-full">
          {/* <img src="https://picsum.photos/300/300" alt="" className="rounded-md" /> */}
          <div className="bg-neutral-800 flex-2 rounded-md">
            <Folder className="size-full p-3" />
          </div>
          <div className="ml-3 flex flex-col flex-6">
            <h3 className="title text-xl">Folder</h3>
            <p className="secondary">0 playlists</p>
          </div>
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <MAToggle
              onContent={<ChevronRight />}
              offContent={<ChevronDown />}
              onActive={() => setHidden((prev) => (prev = !prev))}
              offActive={() => setHidden((prev) => (prev = !prev))}
              className="hover:text-white"
              button={false}
            />
          </div>
        </div>
        <DropZone className={hidden ? 'hidden ml-2 mt-2 p-3' : 'ml-2 mt-2 p-3'} onDrop={onDrop}>
          {children}
        </DropZone>
      </div>
    </>
  );
};

export default LibraryFolder;
