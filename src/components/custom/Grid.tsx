import { Card } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import Library from './gridComponents/Library'
import SidePage from './gridComponents/SidePage'
import AlbumPage from './pages/AlbumPage'
import ArtistPage from './pages/ArtistPage'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'

const Grid = () => {
  return (
    <div className='flex flex-1 w-full gap-1.5 h-100'>
      <aside className='basis-1/5'>
        <Library/>
      </aside>
      <main className='basis-2/3'>
        <Card className='h-full py-0'>
          <ScrollArea className='overflow-hidden'>
            <AlbumPage/>
          </ScrollArea>
        </Card>
      </main>
      <aside className='basis-1/5'>
        <Card className='h-full'>
          <SidePage/>
        </Card>
      </aside>
    </div>
  )
}

export default Grid