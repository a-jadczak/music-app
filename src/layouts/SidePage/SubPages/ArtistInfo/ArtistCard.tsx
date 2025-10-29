import MAArtistInfoModal from '@/components/ui/MA/modals/MAArtistInfoModal'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/shadcn/ui/card'

const ArtistCard = () => {
  return (
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
  )
}

export default ArtistCard