import { useRef } from 'react';

export const useDraggable = (id: number) => {
  const ref = useRef<HTMLDivElement>(null);

  const draggableProps = {
    draggable: true,
    ref,
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
      e.stopPropagation();
      e.dataTransfer.setData('my/id', `${id}`);
    },
  };

  return draggableProps;
};
