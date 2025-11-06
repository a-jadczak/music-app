import DropZone from '@/components/DropZone/DropZone';
import LibraryFolder from '@/components/Items/LibraryFolder';
import LibraryItem from '@/components/Items/LibraryItem';
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area';
import { useFolderStore } from '@/store/useFolderStore';
import type { LibraryItem as LibraryItemType } from '@/types/Library/LibraryItem';
import { useEffect } from 'react';

const FolderRenderer = ({ list }: { list: LibraryItemType[] }) => {
  const { tree, setList } = useFolderStore();
  const { moveItem } = useFolderStore();

  const renderTree = (node: LibraryItemType) =>
    node.isFolder ? (
      <LibraryFolder key={node.id} id={node.id}>
        {node.children?.map((e: LibraryItemType) => renderTree(e))}
      </LibraryFolder>
    ) : (
      <LibraryItem name={node.name} id={node.id} />
    );

  useEffect(() => {
    setList(list);
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = Number.parseInt(e.dataTransfer.getData('my/id'));
    moveItem(id, null);
  };

  return (
    <DropZone onDrop={onDrop}>
      <ScrollArea className="flex-1 overflow-auto h-full">
        {tree.map((e) => renderTree(e))}
      </ScrollArea>
    </DropZone>
  );
};

export default FolderRenderer;
