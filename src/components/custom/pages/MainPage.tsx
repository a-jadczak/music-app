import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import AlbumsCarousel from './pageComponents/AlbumsCarousel'
import { ScrollArea } from '@/components/ui/scroll-area'
import RecentlyPlayed from './pageComponents/RecentlyPlayed'

const MainPage = () => {
  return (
    <>
      <Card className='h-full'>
        <ScrollArea className='overflow-hidden'>
          <RecentlyPlayed/>
          <AlbumsCarousel/>
        </ScrollArea>
      </Card>
    </>
  )
}

export default MainPage