import MusicEntityCarousel from '@/components/Carousels/MusicEntityCarousel'
import RecentlyPlayed from './RecentlyPlayed'

const MainPage = () => {
  return (
    <div className='my-8'>
      <RecentlyPlayed/>
      <MusicEntityCarousel title={'Title'} musicEntity={'Artist'}/>
    </div>
  )
}

export default MainPage