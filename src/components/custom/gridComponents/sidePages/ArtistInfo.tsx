import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

const ArtistInfo = () => {
  return (
    <div className='ml-4 mr-2 overflow-hidden flex flex-col'>
      <ScrollArea className='flex-1 overflow-auto'>
        <img
          src='https://picsum.photos/300/300'
          className='rounded-xl w-full'
        />
        <h2 className='text-4xl font-semibold mt-1'>Title</h2>
        <span className='text-neutral-400 text-lg'>Description</span>
        {/* <h2 className='text-xl mb-2 font-semibold'>Now playing</h2>
        <LibraryElement/>
        <Separator className='mt-2 mb-3'/> */}
        <Card className='mt-2 py-0 rounded-3xl border-none'>
          <div className='flex flex-col justify-around h-full'>
            <div className='border-2 rounded-3xl'>
              <img 
                src="https://picsum.photos/1200/600" 
                alt="" 
                className='w-full rounded-t-3xl'
              />
              <CardHeader>
                <CardTitle className='text-xl font-semibold pt-1'>Artist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=''>29 212 Followers</p>
              </CardContent>
              <CardFooter>
                <p className='text-neutral-400 pb-2'>Description</p>
              </CardFooter>
            </div>
          </div>
        </Card>

        <Card className='rounded-3xl mt-2'>
          <div className='flex flex-col justify-around h-full'>
            <CardHeader>
              <CardTitle className='text-xl font-semibold pt-1'>Credits</CardTitle>
              <CardAction>Show all</CardAction>
            </CardHeader>
            <CardContent className='py-3'>
              <div className='flex w-full items-center'>
                <div className='flex-1'>
                  <h3 className='text-lg'>Artist Name</h3>
                  <span className='text-neutral-400'>Role</span>
                </div>
                <div>
                  <button>Follow Btn</button>
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