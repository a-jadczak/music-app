import Album from "../musicContent/Album"

const LibraryElement = () => {
  return (
    <div className='flex rounded-lg p-1 border-1 items-center mb-2
        hover:cursor-pointer
        '>
        <Album/>
    </div>
  )
}

export default LibraryElement