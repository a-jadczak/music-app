import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import MusicEntityCarousel from './pageComponents/MusicEntityCarousel'
import { ScrollArea } from '@/components/ui/scroll-area'
import RecentlyPlayed from './pageComponents/RecentlyPlayed'

const MainPage = () => {
  return (
    <div className='my-8'>
      <RecentlyPlayed/>
      <MusicEntityCarousel title={''} musicEntity={'Artist'}/>
    </div>
  )
}

export default MainPage