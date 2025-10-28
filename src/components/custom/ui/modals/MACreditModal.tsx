import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const MACreditModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='cursor-pointer'>Show more</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <h2 className='title'>Credits</h2>
          </DialogTitle>
          <Separator/>

          <h3 className='title text-xl'>Title</h3>
          <div>
            <h4 className='title text-lg'>Performed by</h4>
            <span className='secondary'>Buckethead</span>
          </div>
          <div>
            <h4 className='title text-lg'>Written by</h4>
            <span className='secondary'>Buckethead</span>
          </div>
          <div>
            <h4 className='title text-lg'>Produced by</h4>
            <span className='secondary'>-</span>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default MACreditModal