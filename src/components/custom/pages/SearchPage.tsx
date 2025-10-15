import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import Album from '../musicContent/Album'
import MusicEntityCarousel from './pageComponents/MusicEntityCarousel'
import { Separator } from '@/components/ui/separator'

const SearchPage = () => {
  return (
    <> 
      <div className="flex w-full px-3 gap-4 mb-10">
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Top result</h2>
          <Card className="flex-1 flex flex-col">
            <CardContent className="flex-1">
              <img 
                src="https://picsum.photos/300/300" 
                alt="" 
                className="rounded-md w-25 mb-2"
              />
              <h2 className="text-2xl font-bold">Title</h2>
              <span className="grayed-text">info</span>
            </CardContent>
          </Card>
        </div>

        <div className="flex-[2] flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Songs</h2>
          <div className="flex flex-col gap-1 flex-1">
            <Album/>
            <Album/>
            <Album/>
            <Album/>
          </div>
        </div>
      </div>

      <MusicEntityCarousel title='Artists' musicEntity='Artist'/>
      <MusicEntityCarousel title='Albums' musicEntity='Album'/>
    </>
  )
}

export default SearchPage