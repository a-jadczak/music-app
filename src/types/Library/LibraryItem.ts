export type LibraryItem = {
  id: number,
  name: string,
  parentId: number | null,
  isFolder: boolean,
  order: number,
  children?: LibraryItem[] | null
}