import React from 'react'
import RecentlyPlayedBlock from './RecentlyListenedBlock'

const RecentlyPlayed = () => {
  return (
    <>
      <h1 className='text-4xl pl-4 mt-2 mb-2 font-semibold'>Recently Played</h1>
      <div className='grid
        place-items-stretch
        lg:grid-cols-4
        md:grid-cols-2
        gap-4 m-4'
        >
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