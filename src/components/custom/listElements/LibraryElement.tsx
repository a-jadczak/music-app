const LibraryElement = () => {
  return (
    <div className='flex rounded-lg p-1 border-1 items-center mb-2
        hover:cursor-pointer
        '>
        <div className='row-span-2 max-w-13 flex items-center'>
          <img 
            src="https://picsum.photos/300/300" 
            alt="" 
            className='rounded-md'
          />
        </div>

        <div className='ml-2'>
          <div className='flex items-center'>
            <span className='text-lg font-semibold'>Title</span>
          </div>
          <div className='col-start-2 row-start-2 flex items-center'>
            <span className='text-sm text-gray-300'>Description</span>
          </div>
        </div>

    </div>
  )
}

export default LibraryElement