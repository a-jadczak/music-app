import { DialogClose, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/shadcn/ui/dialog'
import { Input } from '@/components/ui/shadcn/ui/input'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/shadcn/ui/button'
import { Label } from '@/components/ui/shadcn/ui/label'

const CreateFolderForm = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <h2 className='title'>Create Folder</h2>
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center gap-2">
        <div className="grid flex-1 gap-2">
          <Label className='text-lg'>Name</Label>
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