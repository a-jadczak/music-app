import { BookUserIcon, ListMusicIcon } from 'lucide-react'
import Queue from './sidePages/Queue'
import ArtistInfo from './sidePages/ArtistInfo'

const SidePage = () => {
  return (
    <>
      <div className='flex w-full gap-4 px-4'>
        <h2 className='flex-1 text-xl'>Page Title</h2>
        <BookUserIcon/>
        <ListMusicIcon/>
      </div>
      {/* <Queue/> */}
      <ArtistInfo/>
    </>
  )
}

export default SidePage