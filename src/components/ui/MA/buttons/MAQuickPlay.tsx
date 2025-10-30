import Play from '@/components/Icons/Play';
import React from 'react';

// Requires classes for parent: group relative
const MAQuickPlay = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const animationClasses = `absolute right-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition`;

  return (
    <button
      className={`bg-white rounded-full p-2 cursor-pointer hover:scale-105 ${className} ${animationClasses}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Play color="black" />
      {/* <PauseIcon fill='full'/> */}
    </button>
  );
};

export default MAQuickPlay;
