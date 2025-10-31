import React from 'react';
import Album from '../musicContent/Album';
import { ChevronDown, ChevronUp, Folder } from 'lucide-react';
import MAToggle from '../ui/MA/buttons/MAToggle';

const LibraryFolder = ({ index, children }: { index: number; children: React.ReactNode }) => {
  return (
    <>
      <div className="flex rounded-lg p-1.5 border-1 items-center mb-2 cursor-pointer">
        <div className="flex items-stretch w-full">
          {/* <img src="https://picsum.photos/300/300" alt="" className="rounded-md" /> */}
          <div className="bg-neutral-800 flex-2 rounded-md">
            <Folder className="size-full p-3" />
          </div>
          <div className="ml-3 flex flex-col flex-6">
            <h3 className="title text-xl">Colma</h3>
            <p className="secondary">Buckethead</p>
          </div>
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <MAToggle
              onContent={<ChevronUp />}
              offContent={<ChevronDown />}
              className="hover:text-white"
              button={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryFolder;
