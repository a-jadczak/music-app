import React, { useRef } from 'react';
import './DropZone.css';

const DropZone = ({
  onDrop: onDropCB,
  className,
  children,
}: {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current!.classList.add('drop-zone');
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    ref.current!.classList.remove('drop-zone');
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onDropCB(e);
    onDragLeave(e);
  };

  return (
    <div
      ref={ref}
      className={`rounded-sm h-full ${className}`}
      onDragOver={(e) => onDragOver(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDrop={(e) => onDrop(e)}
    >
      {children}
    </div>
  );
};

export default DropZone;
