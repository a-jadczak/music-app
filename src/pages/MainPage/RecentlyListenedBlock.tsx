import MAPlay from '@/components/ui/MA/buttons/MAPlay';
import React from 'react';

const RecentlyListenedBlock = () => {
  return (
    <div
      className="flex items-center bg-neutral-800 rounded-md 
      cursor-pointer transition relative
      hover:shadow-xs
      hover:scale-105
      hover:ring-1
      group
      "
    >
      <img src="https://picsum.photos/50/50" alt="" className="rounded-md" />
      <h3 className="title ml-3 text-xl cursor-pointer">Title</h3>
      <MAPlay
        className="absolute right-2 
        opacity-0 translate-x-2
        group-hover:opacity-100
        group-hover:translate-x-0"
      />
    </div>
  );
};

export default RecentlyListenedBlock;
