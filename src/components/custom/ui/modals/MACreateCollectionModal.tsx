import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Check, PlusIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import MATitle from '../text/MATitle'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const MACreateCollectionModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className='cursor-pointer'>
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <MATitle>Create a new Folder, Playlist</MATitle>
          </DialogTitle>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Collection" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Collection</SelectLabel>
                <SelectItem value="playlist">Playlist</SelectItem>
                <SelectItem value="folder">Folder</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <div className="relative w-full">
              <Input placeholder="Type something..." className="pr-10" />
              <Check className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500" />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" className='cursor-pointer' variant="secondary">Cancel</Button>
          </DialogClose>
          <Button type="button" className='cursor-pointer' variant="default">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default MACreateCollectionModal