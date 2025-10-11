import Library from './gridComponents/Library'
import MainPage from './pages/MainPage'

const Grid = () => {
  return (
    <div className='flex flex-1 w-full gap-1.5 h-100'>
      <aside className='basis-1/5'>
        <Library/>
      </aside>
      <main className='basis-2/3 bg-red-600'>
        <MainPage/>
      </main>
      <aside className='basis-1/5 bg-red-400'>

      </aside>
    </div>
  )
}

export default Grid