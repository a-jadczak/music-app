import React from 'react'
import RecentlyListenedBlock from './RecentlyListenedBlock'

const RecentlyListened = () => {
  return (
    <>
      <h1 className='text-4xl pl-4 mt-2 mb-2 font-semibold'>Recently Listened</h1>
      <div className='grid
        place-items-stretch
        lg:grid-cols-4
        md:grid-cols-2
        gap-4 m-4'
        >
        <RecentlyListenedBlock/>
        <RecentlyListenedBlock/>
        <RecentlyListenedBlock/>
        <RecentlyListenedBlock/>

        <RecentlyListenedBlock/>
        <RecentlyListenedBlock/>
        <RecentlyListenedBlock/>
        <RecentlyListenedBlock/>
      </div>
    </>
  )
}

export default RecentlyListened