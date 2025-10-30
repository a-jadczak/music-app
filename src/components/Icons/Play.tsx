import { PlayIcon } from 'lucide-react';
import React from 'react';

const Play = ({ className, color = 'white' }: { className?: string; color?: string }) => {
  return <PlayIcon fill={color} strokeWidth={0} className={className} />;
};

export default Play;
