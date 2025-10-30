import { PauseIcon, PlayIcon } from 'lucide-react';
import React from 'react';

const MAPlay = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`bg-white rounded-full p-2 cursor-pointer
      hover:scale-105 ${className} transition`}
      onClick={onClick}
    >
      <PlayIcon fill="full" />
      {/* <PauseIcon fill='full'/> */}
    </button>
  );
};

export default MAPlay;
