import { Card } from '../ui/card'
import Library from './gridComponents/Library'
import SidePage from './gridComponents/SidePage'
import MainPage from './pages/MainPage'

const Grid = () => {
  return (
    <div className='flex flex-1 w-full gap-1.5 h-100'>
      <aside className='basis-1/5'>
        <Library/>
      </aside>
      <main className='basis-2/3'>
        <MainPage/>
      </main>
      <aside className='basis-1/5'>
        <Card className='h-full'>
          <SidePage/>
        </Card>
      </aside>
    </div>
  )
}

export default Grid