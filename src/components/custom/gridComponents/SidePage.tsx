import { BookUserIcon, ListMusicIcon } from 'lucide-react'
import Queue from './sidePages/Queue'
import ArtistInfo from './sidePages/ArtistInfo'
import MATitle from '../ui/text/MATitle'

const SidePage = () => {
  return (
    <>
      <div className='flex w-full gap-4 px-4'>
        <MATitle className='flex-1 ' weight='normal'>Page Title</MATitle>
        <BookUserIcon/>
        <ListMusicIcon/>
      </div>
      {/* <Queue/> */}
      <ArtistInfo/>
    </>
  )
}

export default SidePage