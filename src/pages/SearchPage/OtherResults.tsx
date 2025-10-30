import MASongItem from '@/components/ui/MA/item/MASongItem';
import React from 'react';

const OtherResults = () => {
  return (
    <div className="flex-[2] flex flex-col">
      <h2 className="title font-bold mb-2">Songs</h2>
      <div className="flex flex-col gap-1 flex-1">
        <MASongItem index={0} />
        <MASongItem index={10} />
        <MASongItem index={100} />
        <MASongItem index={0} />
      </div>
    </div>
  );
};

export default OtherResults;
