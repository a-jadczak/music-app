import LibraryElement from '@/components/listElements/LibraryElement';
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area';
import { Separator } from '@/components/ui/shadcn/ui/separator';
import React from 'react';

const SearchContent = ({ active }: { active: boolean }) => {
  return (
    <>
      {active && (
        <div className="relative w-100 z-20">
          <div className="absolute mt-2 p-3.5 rounded-2xl bg-card w-100 h-100 flex flex-col">
            <h2 className="text-lg font-semibold">Last searched</h2>
            <Separator className="mt-2 mb-3" />
            <ScrollArea className="flex-1 overflow-auto">
              <LibraryElement />
              <LibraryElement />
              <LibraryElement />
              <LibraryElement />
              <LibraryElement />
              <LibraryElement />
              <LibraryElement />
              <LibraryElement />
              <LibraryElement />
              <LibraryElement />
            </ScrollArea>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchContent;
