import React from 'react'
import { Input } from '../../ui/input'
import { SearchIcon } from 'lucide-react'
import { Separator } from '../../ui/separator'
import LibraryElement from '../listElements/LibraryElement'
import { ScrollArea } from '../../ui/scroll-area'

const SearchBar = () => {
  return (
    <header className='flex items-center justify-center p-2 flex-col'>
      <div className='relative'>
        <input
          placeholder='Search'
          className='p-2.5 rounded-3xl bg-neutral-900 w-100 pl-5 focus:outline-white outline-2'
        />
        <SearchIcon 
          size={30}
          color='gray'
          className='absolute top-0 right-0 h-full mr-3'
        />
      </div>

      {/* <div className='relative w-100'>
        <div className="absolute mt-2 p-3.5 rounded-2xl bg-neutral-800 w-100 h-100
        flex flex-col">
          <h2 className='text-lg font-semibold'>Last searched</h2>
          <Separator className='mt-2 mb-3'/>

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
          </ScrollArea>
        </div>
      </div> */}



    </header>
  )
}

export default SearchBar