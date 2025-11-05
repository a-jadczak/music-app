import LibraryFolder from '@/components/Items/LibraryFolder';
import LibraryItem from '@/components/Items/LibraryItem';
import { useFolderStore } from '@/store/useFolderStore';
import type { LibraryItem as LibraryItemType } from '@/types/Library/LibraryItem';
import { useEffect, useState } from 'react';

const FolderRenderer = ({ list }: { list: LibraryItemType[] }) => {
  const { tree, setList } = useFolderStore();

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
  }, [list]);

  return <>{tree.map((e) => renderTree(e))}</>;
};

export default FolderRenderer;
