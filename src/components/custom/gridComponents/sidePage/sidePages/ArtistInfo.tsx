import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import { Button } from '@/components/ui/button'
import MATextToggle from '../../../ui/buttons/MATextToggle'
import MACreditModal from '../../../ui/modals/MACreditModal'
import MAArtistInfoModal from '../../../ui/modals/MAArtistInfoModal'

const ArtistInfo = () => {
  return (
    <div className='ml-4 mr-2 overflow-hidden flex flex-col'>
      <ScrollArea className='flex-1 overflow-auto'>
        <img
          src='https://picsum.photos/300/300'
          className='rounded-xl w-full'
        />
        <h2 className='title text-4xl mt-1'>Page Title</h2>
        <p className='secondary text-lg mb-5'>Description</p>
        {/* <h2 className='text-xl mb-2 font-semibold'>Now playing</h2>
        <LibraryElement/>
        <Separator className='mt-2 mb-3'/> */}
        <MAArtistInfoModal>
          <Card className='mt-4 py-0 border-none cursor-pointer'>
            <div className='flex flex-col justify-around h-full'>
              <div className='border rounded-3xl'>
                <img
                  src="https://picsum.photos/1200/600"
                  alt=""
                  className='w-full rounded-t-3xl'
                />
                <CardHeader>
                  <CardTitle className='pt-1'>
                    <h3 className='title text-xl inline'>Artist</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=''>29 212 Followers</p>
                </CardContent>
                <CardFooter>
                  <p className='secondary mb-5'>Description</p>
                </CardFooter>
              </div>
            </div>
          </Card>
        </MAArtistInfoModal>

        <Card className='rounded-3xl mt-2'>
          <div className='flex flex-col justify-around h-full'>
            <CardHeader>
              <CardTitle className='text-xl font-semibold pt-1'>
                <h3 className='title text-xl'>Credits</h3>
              </CardTitle>
              <CardAction>
                <MACreditModal/>
              </CardAction>
            </CardHeader>
            <CardContent className='py-3'>
              <div className='flex w-full items-center'>
                <div className='flex-1'>
                  <h3 className='title text-lg font-normal'>Artist Name</h3>
                  <a className='anchor' href="#">Role</a>
                </div>
                <div>
                  
                  <Button variant={'outline'}>Follow</Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </ScrollArea>
    </div>
  )
}

export default ArtistInfo