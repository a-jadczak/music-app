import MAPlay from '@/components/ui/MA/buttons/MAPlay';
import { CarouselItem } from '@/components/ui/shadcn/ui/carousel';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CarouselAlbum = ({ key }: { key: number }) => {
  const navigate = useNavigate();

  return (
    <CarouselItem
      key={key}
      onClick={() => navigate('/album')}
      className="pl-1 cursor-pointer flex justify-center
    sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
    >
      <div className="p-2 rounded-md hover:bg-neutral-800 transition">
        <div className="group relative">
          <img src="https://picsum.photos/300/300" alt="" className="rounded-md mb-1.5" />
          <MAPlay
            onClick={(e) => e.stopPropagation()}
            className="absolute right-2 bottom-2
            opacity-0 translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0"
          />
        </div>
        <div>
          <Link
            to="/album"
            onClick={(e) => e.stopPropagation()}
            className="anchor text-white font-semibold text-lg"
          >
            Album Title
          </Link>
        </div>
        <Link to="/artist" onClick={(e) => e.stopPropagation()} className="anchor">
          Author
        </Link>
      </div>
    </CarouselItem>
  );
};

export default CarouselAlbum;
