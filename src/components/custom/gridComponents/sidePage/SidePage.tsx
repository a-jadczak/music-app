import { BookUserIcon, ListMusicIcon } from 'lucide-react'
import Queue from './sidePages/Queue'
import ArtistInfo from './sidePages/ArtistInfo'
import MATitle from '../../ui/text/MATitle'
import { useState } from 'react'
import IconButton from './IconButton'

type View = "Queue" | "ArtistInfo"

const SidePage = () => {
  const [view, setView] = useState<View>("ArtistInfo")

  return (
    <>
      <div className='flex w-full gap-4 px-4'>
        <MATitle className='flex-1 ' weight='normal'>
          {view === "Queue" ? "Queue" : "Page Title"}
        </MATitle>
        <IconButton active={view === "ArtistInfo"} onClick={(e) => setView("ArtistInfo")}>
          <BookUserIcon/>
        </IconButton>
        <IconButton active={view === "Queue"} onClick={(e) => setView("Queue")}>
          <ListMusicIcon/>
        </IconButton>
      </div>
      
      {view === "ArtistInfo" && <ArtistInfo/>}
      {view === "Queue" && <Queue/>}
    </>
  )
}

export default SidePage