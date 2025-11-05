export type LibraryItem = {
  id: number,
  name: string,
  parentId: number | null,
  isFolder: boolean,
  children?: LibraryItem[] | null
}