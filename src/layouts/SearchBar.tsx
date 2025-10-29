import React, { useState } from 'react'
import { Home, SearchIcon } from 'lucide-react'

const SearchBar = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <header className='flex items-center justify-center p-2 flex-col'>
      <div className='relative'>
        <div className='absolute flex items-center justify-center -ml-12 cursor-pointer
          border-2 rounded-full
          size-10 text-neutral-500
        hover:text-whitehover:border-white'>
          <Home size={20}/>
        </div>
        <input
          placeholder='Search'
          onFocus={() => setActive(prev => prev = true)}
          onBlur={() => setActive(prev => prev = false)}
          className='p-2.5 rounded-3xl bg-neutral-900 w-100 pl-5 focus:outline-white outline-2'
        />
        <SearchIcon 
          size={30}
          color={active ? 'white' : 'gray'}
          className='absolute top-0 right-0 h-full mr-3'
        />
      </div>

      {/* <div className='relative w-100 z-10'>
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