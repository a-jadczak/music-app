import React, { useState } from 'react'
import { Home, SearchIcon } from 'lucide-react'
import SearchContent from './SearchContent';

const SearchBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [mainPage, setMainPage] = useState<boolean>(false); // TODO: Add checking Page url logic

  return (
    <header className='flex items-center justify-center p-2 flex-col'>
      <div className='relative flex items-center'>
        <div className={`absolute flex items-center justify-center  
        -ml-12 cursor-pointer border-2 rounded-full size-10 text-neutral-500
        hover:text-white hover:border-white
        ${mainPage ? "text-white border-white" : ""}
        `}>
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

      <SearchContent active={active}/>
    </header>
  )
}

export default SearchBar