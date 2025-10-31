import Album from '../musicContent/Album';

const LibraryElement = ({ index }: { index: number }) => {
  return (
    <div className="flex rounded-lg p-1 border-1 items-center mb-2 hover:cursor-pointer">
      <Album /> {index}
    </div>
  );
};

export default LibraryElement;
