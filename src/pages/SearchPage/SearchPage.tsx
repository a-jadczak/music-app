import { Card, CardContent, CardHeader } from '@/components/ui/shadcn/ui/card';
import React from 'react';
import MusicEntityCarousel from '../../components/Carousels/MusicEntityCarousel';
import Album from '@/components/musicContent/Album';
import MASongItem from '@/components/ui/MA/item/MASongItem';
import TopResult from './TopResult';
import OtherResults from './OtherResults';

const SearchPage = () => {
  return (
    <div className="my-8">
      <div className="flex w-full px-3 gap-4 mb-10">
        <TopResult />
        <OtherResults />
      </div>

      <MusicEntityCarousel title="Artists" musicEntity="Artist" />
      <MusicEntityCarousel title="Albums" musicEntity="Album" />
    </div>
  );
};

export default SearchPage;
