import React from 'react'
import RecentlyPlayedBlock from './RecentlyListenedBlock'
import MATitle from '../../ui/text/MATitle'

const RecentlyPlayed = () => {
  return (
    <>
      <MATitle size='4xl' weight='semibold' className='pl-4'>Recently Played</MATitle>
      <div className='grid
        place-items-stretch
        lg:grid-cols-4
        md:grid-cols-2
        gap-4 m-4'>
        <RecentlyPlayedBlock/>
        <RecentlyPlayedBlock/>
        <RecentlyPlayedBlock/>
        <RecentlyPlayedBlock/>

        <RecentlyPlayedBlock/>
        <RecentlyPlayedBlock/>
        <RecentlyPlayedBlock/>
        <RecentlyPlayedBlock/>
      </div>
    </>
  )
}

export default RecentlyPlayed