import { Button } from '@/components/ui/shadcn/ui/button';
import React, { useState } from 'react';

interface MAToggleProps {
  onContent: React.ReactNode;
  offContent: React.ReactNode;
  className?: string;
  button?: boolean;
  onActive?: () => void;
  offActive?: () => void;
}

const MAToggle: React.FC<MAToggleProps> = ({
  onContent,
  offContent,
  className,
  button = true,
  onActive,
  offActive,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const next = !isActive;
    setIsActive(next);
    next ? onActive?.() : offActive?.();
  };

  const content = isActive ? onContent : offContent;

  return button ? (
    <Button
      className={`cursor-pointer ${
        isActive
          ? 'border-2 bg-card text-white hover:bg-card'
          : 'bg-white text-black hover:bg-white/80'
      } ${className ?? ''}`}
      onClick={handleClick}
    >
      {content}
    </Button>
  ) : (
    <div onClick={handleClick}>{content}</div>
  );
};

export default MAToggle;
