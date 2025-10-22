import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@radix-ui/react-select'
import React from 'react'
import MATitle from '../text/MATitle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import MASecondaryText from '../text/MASecondaryText'

const MACreditModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='cursor-pointer'>Show more</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <MATitle>Credits</MATitle>
          </DialogTitle>
          <Separator/>

          <MATitle size='xl'>Title</MATitle>
          <div>
            <MATitle size='md'>Performed by</MATitle>
            <MASecondaryText>Buckethead</MASecondaryText>
          </div>
          <div>
            <MATitle size='md'>Written by</MATitle>
            <MASecondaryText>Buckethead</MASecondaryText>
          </div>
          <div>
            <MATitle size='md'>Produced by</MATitle>
            <MASecondaryText>-</MASecondaryText>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default MACreditModal