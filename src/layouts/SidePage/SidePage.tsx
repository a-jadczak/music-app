import { BookUserIcon, ListMusicIcon } from 'lucide-react'
import Queue from './SubPages/Queue'
import ArtistInfo from './SubPages/ArtistInfo'
import { useState } from 'react'
import IconButton from './IconButton'

type View = "Queue" | "ArtistInfo"

const SidePage = () => {
  const [view, setView] = useState<View>("ArtistInfo")

  return (
    <>
      <div className='flex w-full gap-4 px-4'>
        <h2 className='title font-normal flex-1'>
          {view === "Queue" ? "Queue" : "Page Title"}
        </h2>
        <IconButton active={view === "ArtistInfo"} onClick={() => setView("ArtistInfo")}>
          <BookUserIcon/>
        </IconButton>
        <IconButton active={view === "Queue"} onClick={() => setView("Queue")}>
          <ListMusicIcon/>
        </IconButton>
      </div>
      
      {view === "ArtistInfo" && <ArtistInfo/>}
      {view === "Queue" && <Queue/>}
    </>
  )
}

export default SidePage