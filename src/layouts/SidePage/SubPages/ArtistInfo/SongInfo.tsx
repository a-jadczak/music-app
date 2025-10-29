import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/shadcn/ui/card'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
import { Button } from '@/components/ui/shadcn/ui/button'
import MAArtistInfoModal from '@/components/ui/MA/modals/MAArtistInfoModal'
import MACreditModal from '@/components/ui/MA/modals/MACreditModal'
import MAFollow from '@/components/ui/MA/buttons/MAFollow'
import Credits from './Credits'
import ArtistCard from './ArtistCard'
import SongCard from './SongCard'

const SongInfo = () => {
  return (
    <div className='ml-4 mr-2 overflow-hidden flex flex-col'>
      <ScrollArea className='flex-1 overflow-auto'>
        <SongCard/>
        <ArtistCard/>
        <Credits/>
      </ScrollArea>
    </div>
  )
}

export default SongInfo