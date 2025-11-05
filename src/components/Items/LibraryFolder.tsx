import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, ChevronUp, Folder } from 'lucide-react';
import MAToggle from '../ui/MA/buttons/MAToggle';
import type { ParentId } from '@/types/Library/ParentId';
import { useFolderStore } from '@/store/useFolderStore';

const LibraryFolder = ({ children, id: folderId }: { children: React.ReactNode; id: number }) => {
  const { moveItem, removeItem } = useFolderStore();

  const [hidden, setHidden] = useState(false);

  const dropSpaceRef = useRef<HTMLDivElement | null>(null);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dropSpaceRef.current!.style.backgroundColor = 'green';
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dropSpaceRef.current!.style.backgroundColor = 'gray';
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const id = Number.parseInt(e.dataTransfer.getData('my/id'));
    moveItem(id, folderId);

    onDragLeave(e);
  };

  return (
    <>
      <div draggable={true} className="flex flex-col rounded-lg p-1.5 border-1 mb-2 cursor-pointer">
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
        <div
          className="ml-2 mt-2 p-3"
          ref={dropSpaceRef}
          onDragOver={(e) => onDragOver(e)}
          onDragEnd={(e) => onDragLeave(e)}
          onDragLeave={(e) => onDragLeave(e)}
          onDrop={(e) => onDrop(e)}
        >
          <div className={hidden ? 'hidden' : ''}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default LibraryFolder;
