import React, { useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/shadcn/ui/carousel';
import type { MusicEntity } from '@/types/MusicEntity';
import CarouselAlbum from './Carousels/CarouselAlbum';

const MusicEntityCarousel = ({
  title,
  musicEntity,
}: {
  title: string;
  musicEntity: MusicEntity;
}) => {
  //TODO: Change later
  const render = Array.from({ length: 10 }).map((_, index) => <CarouselAlbum key={index} />);

  return (
    <>
      <h3 className="title pl-4 mt-2 mb-2">{title}</h3>
      <Carousel className="mb-10">
        <CarouselContent className="px-5 space-x-2">{render}</CarouselContent>
        <CarouselPrevious className="ml-17.5" variant="secondary" />
        <CarouselNext className="mr-17.5" variant="secondary" />
      </Carousel>
    </>
  );
};

export default MusicEntityCarousel;
