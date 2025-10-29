import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/shadcn/ui/card'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
import { Button } from '@/components/ui/shadcn/ui/button'
import MAArtistInfoModal from '@/components/ui/MA/modals/MAArtistInfoModal'
import MACreditModal from '@/components/ui/MA/modals/MACreditModal'
import MAFollow from '@/components/ui/MA/buttons/MAFollow'

const ArtistInfo = () => {
  return (
    <div className='ml-4 mr-2 overflow-hidden flex flex-col'>
      <ScrollArea className='flex-1 overflow-auto'>
        <img
          src='https://picsum.photos/300/300'
          className='rounded-xl w-full'
        />
        <h2 className='title text-4xl mt-1'>Page Title</h2>
        <p className='secondary-description text-lg mb-5'>Description</p>

        <Card className='mt-4 py-0 border-none'>
          <div className='flex flex-col justify-around h-full'>
            <div className='border rounded-3xl'>
              <MAArtistInfoModal>
                <div className='relative group'>
                  <img
                    src="https://picsum.photos/1200/600"
                    alt=""
                    className='w-full rounded-t-3xl group-hover:brightness-50'
                  />
                  <div className='text absolute inset-0 flex items-center cursor-pointer justify-center text-xl font-semibold invisible group-hover:visible'>Show more</div>
                </div>
              </MAArtistInfoModal>
              <CardHeader>
                <CardTitle className='pt-1'>
                  <h3 className='title text-xl inline'>Artist</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text'>29 212 Followers</p>
              </CardContent>
              <CardFooter>
                <p className='secondary-description mb-5'>Description</p>
              </CardFooter>
            </div>
          </div>
        </Card>

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
                  <MAFollow/>
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