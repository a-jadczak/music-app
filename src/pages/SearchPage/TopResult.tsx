import MAQuickPlay from '@/components/ui/MA/buttons/MAQuickPlay';
import { Card, CardContent } from '@/components/ui/shadcn/ui/card';
import React from 'react';

const TopResult = () => {
  return (
    <div className="flex-1 flex flex-col">
      <h1 className="title font-bold mb-2">Top result</h1>
      <Card className="flex-1 flex flex-col cursor-pointer hover:bg-neutral-800 relative group">
        <CardContent>
          <img src="https://picsum.photos/300/300" alt="" className="rounded-md h-25 mb-2" />
          <h2 className="title font-bold">Title</h2>
          <p className="secondary">info</p>
        </CardContent>
        <MAQuickPlay className="bottom-4 right-4" />
      </Card>
    </div>
  );
};

export default TopResult;
