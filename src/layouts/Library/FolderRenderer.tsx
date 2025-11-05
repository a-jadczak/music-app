import LibraryFolder from '@/components/Items/LibraryFolder';
import LibraryItem from '@/components/Items/LibraryItem';
import type { LibraryItem as LibraryItemType } from '@/types/Library/LibraryItem';
import type { ParentId } from '@/types/Library/ParentId';
import { useEffect, useState } from 'react';

const FolderRenderer = ({ list }: { list: LibraryItemType[] }) => {
  const buildTree = (items: LibraryItemType[], parentId: ParentId = null): LibraryItemType[] => {
    return items
      .filter((item) => item.parentId === parentId)
      .map((item) => ({
        ...item,
        children: buildTree(items, item.id),
      }));
  };

  const [tree, setTree] = useState(buildTree(list));

  const renderTree = (node: LibraryItemType) =>
    node.isFolder ? (
      <LibraryFolder key={node.id} parentId={node.parentId}>
        {node.children?.map((e: LibraryItemType) => renderTree(e))}
      </LibraryFolder>
    ) : (
      <LibraryItem name={node.name} parentId={node.parentId} />
    );

  useEffect(() => console.log(tree), []);

  return <>{tree.map((e) => renderTree(e))}</>;
};

export default FolderRenderer;
