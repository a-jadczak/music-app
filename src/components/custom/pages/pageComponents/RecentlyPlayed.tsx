import React from 'react'
import RecentlyPlayedBlock from './RecentlyListenedBlock'
const RecentlyPlayed = () => {
  return (
    <>
      <h2 className='title pl-4 text-4xl'>Recently Played</h2>
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