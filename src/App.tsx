import SearchBar from '@/layouts/SearchBar/SearchBar'
import { ThemeProvider } from './components/ui/shadcn/ui/theme-provider'
import MusicController from '@/layouts/MusicController'
import Library from '@/layouts/Library'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
import { Route, Routes } from 'react-router-dom'
import { Card } from '@/components/ui/shadcn/ui/card'
import SidePage from './layouts/SidePage/SidePage'
import AlbumPage from './pages/AlbumPage'
import ArtistPage from './pages/ArtistPage/ArtistPage'
import MainPage from './pages/MainPage/MainPage'
import SearchPage from './pages/SearchPage'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SearchBar/>
      <div className='flex flex-1 w-full gap-1.5 h-100'>
        <aside className='basis-1/5'>
          <Library/>
        </aside>
        <main className='basis-2/3'>
          <Card className='h-full py-0'>
            <ScrollArea className='overflow-hidden'>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/album" element={<AlbumPage />} />
                <Route path="/artist" element={<ArtistPage />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </ScrollArea>
          </Card>
        </main>
        <aside className='basis-1/5'>
          <Card className='h-full'>
            <SidePage/>
          </Card>
        </aside>
      </div>
      <MusicController/>
    </ThemeProvider>
  )
}

export default App
