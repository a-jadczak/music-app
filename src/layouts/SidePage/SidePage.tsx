import { BookUserIcon, ListMusicIcon } from 'lucide-react'
import Queue from './SubPages/Queue/Queue'
import SongInfo from './SubPages/ArtistInfo/SongInfo'
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
      
      {view === "ArtistInfo" && <SongInfo/>}
      {view === "Queue" && <Queue/>}
    </>
  )
}

export default SidePage