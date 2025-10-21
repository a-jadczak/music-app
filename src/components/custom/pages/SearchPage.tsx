import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'
import Album from '../musicContent/Album'
import MusicEntityCarousel from './pageComponents/MusicEntityCarousel'
import { Separator } from '@/components/ui/separator'
import MATitle from '../ui/text/MATitle'
import MASecondaryText from '../ui/text/MASecondaryText'

const SearchPage = () => {
  return (
    <div className='my-8'> 
      <div className="flex w-full px-3 gap-4 mb-10">
        <div className="flex-1 flex flex-col">
          <MATitle weight='bold' className='mb-2'>Top result</MATitle>
          <Card className="flex-1 flex flex-col">
            <CardContent className="flex-1">
              <img 
                src="https://picsum.photos/300/300" 
                alt="" 
                className="rounded-md w-25 mb-2"
              />
              <MATitle weight='bold' >Title</MATitle>
              <MASecondaryText>info</MASecondaryText>
            </CardContent>
          </Card>
        </div>

        <div className="flex-[2] flex flex-col">
          <MATitle weight='bold' className='mb-2'>Songs</MATitle>
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
    </div>
  )
}

export default SearchPage