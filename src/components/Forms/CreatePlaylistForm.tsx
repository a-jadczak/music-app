import { Check, Search } from 'lucide-react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import MASongItemShort from '../ui/MA/item/MASongItemShort'
import { Button } from '../ui/shadcn/ui/button'
import { DialogHeader, DialogFooter, DialogTitle, DialogClose } from '../ui/shadcn/ui/dialog'
import { Input } from '../ui/shadcn/ui/input'

const CreatePlaylistForm = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <h2 className='title'>Create Playlist</h2>
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center gap-2">
        <div className="flex flex-col flex-1 gap-2">

          <Label className='text-lg'>Name</Label>
          <div className="relative w-full">
            <Input placeholder="Add a name" className="pr-10" />
            <Check className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500" />
          </div>
          
          <Label className='text-xl'>Let's add something for your playlist</Label>
          <div className="relative w-full">
            <Input placeholder="Search" className="pr-10" />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 " />
          </div>

 
          <ScrollArea className="h-32 overflow-auto">
            <div className="space-y-2">
              {Array.from({length:4}).map((_,i)=>
                <MASongItemShort key={i} index={i}/>
              )}
            </div>
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