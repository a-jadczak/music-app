import { create } from 'zustand';
import type { LibraryItem as LibraryItemType } from '@/types/Library/LibraryItem';
import type { ParentId } from '@/types/Library/ParentId';

interface FolderState {
  // flat list
  list: LibraryItemType[];
  // tree hierarchy for structured data
  tree: LibraryItemType[];
  setList: (list: LibraryItemType[]) => void;
  // Builds a tree structured list from a flat list
  buildTree: (items: LibraryItemType[], parentId?: ParentId) => LibraryItemType[];
  removeItem: (id: number) => void;
  addItem: (newItem: LibraryItemType) => void;
  moveItem: (id: number, targetId: number | null) => void;
  findItem: (list: LibraryItemType[], targetId: number) => null | LibraryItemType;
}

export const useFolderStore = create<FolderState>((set, get) => ({
  list: [],
  tree: [],
  setList: (list) => {
    const newTree = get().buildTree(list);
    set({ tree: newTree, list: list });

    console.log(newTree)
  },
  buildTree: (items, parentId = null) => {
    return items
      .filter((item) => item.parentId === parentId)
      .map((item) => ({
        ...item,
        children: get().buildTree(items, item.id),
      }));
  },
  removeItem: (id) => {
    // Recreates new list and tree
    const newList = get().list.filter((item) => item.id !== id);
    get().setList(newList);
  },
  // TODO: Test
  addItem: (newItem) => {
    console.log(get().list)
    const newList = [...get().list, newItem];

    get().setList(newList);
  },
  moveItem: (id, targetId) => {
    const newList = get().list.map(item => item.id === id ? { ...item, parentId: targetId } : item);

    get().setList(newList);
  },
  findItem: (list, targetId) => {
    get().tree.forEach((item) => {
      if (item.id === targetId) return item;

      if (item.children) {
        const found = get().findItem(item.children, targetId);
        if (found) 
          return found;
      }
    });

    return null;
  }



}));
