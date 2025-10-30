import React, { useState } from 'react';
import MALike from '../buttons/MALike';
import MAOptions from '../buttons/MAOptions';
import { Link } from 'react-router-dom';
import Play from '@/components/Icons/Play';

const MASongItem = ({ index }: { index: number }) => {
  const [liked, setLiked] = useState<boolean>(true);

  return (
    <div
      className="grid grid-cols-16
    group
    w-full gap-4 rounded p-1
    hover:bg-neutral-700
    "
    >
      <div className="px-2 flex items-center justify-center">
        <span className="text text-lg w-full text-center group-hover:hidden">{index}</span>
        <Play className="shrink-0 hidden group-hover:block" />
      </div>
      <div className="col-span-9 flex flex-center items-center ">
        <div className="relative group">
          <img
            className="rounded-lg h-12.5  group-hover:brightness-50"
            src="https://picsum.photos/300/300"
          />
          <div className="absolute top-0 h-full w-full flex items-center justify-center">
            <Play className="shrink-0 hidden group-hover:block" />
          </div>
        </div>
        <div className="ml-2">
          <h3 className="title text-lg">Song name</h3>
          <Link to="/artist" className="anchor">
            Buckethead
          </Link>
        </div>
      </div>
      <div className="col-start-11 col-span-3 flex items-center justify-end">
        <span className="text -translate-y-0.5">300 000</span>
      </div>
      <div
        className={`col-start-14 flex items-center justify-end
        ${!liked && 'invisible group-hover:visible'}`}
      >
        <MALike liked={liked} className="size-5" />
      </div>
      <div className="col-start-15 flex items-center justify-end">
        <span className="text -translate-y-0.5">3:57</span>
      </div>
      <div className="col-start-16 invisible flex items-center justify-center group-hover:visible">
        <MAOptions />
      </div>
    </div>
  );
};

export default MASongItem;
