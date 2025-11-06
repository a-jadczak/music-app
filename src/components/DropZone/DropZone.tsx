import React, { useRef } from 'react';

const DropZone = ({
  onDrop: onDropCB,
  className,
  children,
}: {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  className: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current!.style.backgroundColor = 'green';
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    ref.current!.style.backgroundColor = 'gray';
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onDropCB(e);
    onDragLeave(e);
  };

  return (
    <div
      ref={ref}
      className={className}
      onDragOver={(e) => onDragOver(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDrop={(e) => onDrop(e)}
    >
      {children}
    </div>
  );
};

export default DropZone;
