import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area';
import Credits from './Credits';
import ArtistCard from './ArtistCard';
import SongCard from './SongCard';

const SongInfo = () => {
  return (
    <div className="ml-4 mr-2 overflow-hidden flex flex-col">
      <ScrollArea className="flex-1 overflow-auto">
        <SongCard />
        <ArtistCard />
        <Credits />
      </ScrollArea>
    </div>
  );
};

export default SongInfo;
