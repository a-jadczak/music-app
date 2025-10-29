import MAFollow from '@/components/ui/MA/buttons/MAFollow'
import MACreditModal from '@/components/ui/MA/modals/MACreditModal'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/ui/card'

const Credits = () => {
  return (
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
  )
}

export default Credits