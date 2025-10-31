import { Button } from '@/components/ui/shadcn/ui/button';
import React, { useState } from 'react';

interface MAToggleProps {
  onContent: React.ReactNode;
  offContent: React.ReactNode;
  className?: string;
  button?: boolean;
}

const MAToggle: React.FC<MAToggleProps> = ({ onContent, offContent, className, button = true }) => {
  const [isActive, setIsActive] = useState(false);

  return button ? (
    <Button
      className={`cursor-pointer ${
        isActive
          ? 'border-2 bg-card text-white hover:bg-card'
          : 'bg-white text-black hover:bg-white/80'
      } ${className ?? ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      {isActive ? onContent : offContent}
    </Button>
  ) : (
    <div onClick={() => setIsActive(!isActive)}>{isActive ? onContent : offContent}</div>
  );
};

export default MAToggle;
