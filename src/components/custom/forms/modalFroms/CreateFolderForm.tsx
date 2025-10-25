import { DialogClose, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import MATitle from '../../ui/text/MATitle'
import { Input } from '@/components/ui/input'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const CreateFolderForm = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <MATitle>Create Folder</MATitle>
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center gap-2">
        <div className="grid flex-1 gap-2">
          <Label className='text-xl'>Name</Label>
          <div className="relative w-full">
            <Input placeholder="Add a name" className="pr-10" />
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
    </>
  )
}

export default CreateFolderForm