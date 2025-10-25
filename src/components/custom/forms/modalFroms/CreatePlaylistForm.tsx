import { DialogClose, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import MATitle from '../../ui/text/MATitle'
import { Input } from '@/components/ui/input'
import { Check, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import LibraryElement from '../../listElements/LibraryElement'
import { ScrollArea } from '@/components/ui/scroll-area'
import MASongItem from '../../ui/item/MASongItem'
import MASongItemShort from '../../ui/item/MASongItemShort'

const CreatePlaylistForm = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <MATitle>Create Playlist</MATitle>
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center gap-2">
        <div className="flex flex-col flex-1 gap-2">

          <Label className='text-xl'>Name</Label>
          <div className="relative w-full">
            <Input placeholder="Add a name" className="pr-10" />
            <Check className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500" />
          </div>
          
          <Label className='text-xl'>Let's add something for your playlist</Label>
          <div className="relative w-full">
            <Input placeholder="Search" className="pr-10" />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 " />
          </div>

          <ScrollArea className='h-30'>
            <MASongItemShort index={0}/>
            <MASongItemShort index={1}/>
            <MASongItemShort index={2}/>
            <MASongItemShort index={3}/>
          </ScrollArea>

        </div>
      </div>
      <DialogFooter className="sm:justify-between">
        <DialogClose asChild>
          <Button type="button" className='cursor-pointer' variant="secondary">Cancel</Button>
        </DialogClose>
        <Button type="button" className='cursor-pointer' variant="default">Create</Button>
      </DialogFooter>
    </>
  )
}

export default CreatePlaylistForm