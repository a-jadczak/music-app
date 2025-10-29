import React from 'react'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
import { Separator } from '@/components/ui/shadcn/ui/separator'
import LibraryElement from '@/components/listElements/LibraryElement'

const Queue = () => {
  return (
    <div className='ml-4 mr-2 overflow-hidden flex flex-col'>
      <h2 className='text-xl mb-2 font-semibold'>Now playing</h2>
      <LibraryElement/>
      <Separator className='mt-2 mb-3'/>

      <h2 className='text-lg mb-3 font-semibold'>Next</h2>
      <ScrollArea className='flex-1 overflow-auto'>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>
        <LibraryElement/>   
      </ScrollArea>
    </div>
  )
}

export default Queue