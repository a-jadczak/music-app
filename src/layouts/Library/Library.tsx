import { PlusIcon, SearchIcon, XIcon } from 'lucide-react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/ui/card';
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area';
import { useReducer, useState, type ReactElement } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/shadcn/ui/dropdown-menu';
import { ButtonGroup } from '@/components/ui/shadcn/ui/button-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/shadcn/ui/select';
import { Input } from '@/components/ui/shadcn/ui/input';
import { Button } from '@/components/ui/shadcn/ui/button';
import { Separator } from '@/components/ui/shadcn/ui/separator';
import CreatePlaylistForm from '@/components/Forms/CreatePlaylistForm';
import CreateFolderForm from '@/components/Forms/CreateFolderForm';
import MACreateCollectionModal from '@/components/ui/MA/modals/MACreateCollectionModal';
import LibraryElement from '@/components/Items/LibraryElement';
import { ReactSortable } from 'react-sortablejs';
import LibraryFolder from '@/components/Items/LibraryFolder';
import FolderRenderer from './FolderRenderer';
import type { LibraryItem } from '@/types/Library/LibraryItem';
import DropZone from '@/components/DropZone/DropZone';

type ModalAction = { type: 'CREATE_PLAYLIST' } | { type: 'CREATE_FOLDER' };

type ModalState = ReactElement | null;

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case 'CREATE_PLAYLIST':
      return <CreatePlaylistForm />;
    case 'CREATE_FOLDER':
      return <CreateFolderForm />;
    default:
      return <></>;
  }
}

const Library = () => {
  const [inputHidden, setInputHidden] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formType, dispatch] = useReducer(modalReducer, null);

  const openModal = (value: ModalAction) => {
    setModalOpen(true);
    dispatch(value);
  };

  const [list, setList] = useState<LibraryItem[]>([
    { id: 1, name: 'Folder A', parentId: null, order: 0, isFolder: true },
    { id: 3, name: 'File A', parentId: 1, order: 1, isFolder: false },
    { id: 5, name: 'Folder AA', parentId: 1, order: 0, isFolder: true },
    { id: 6, name: 'File AAA', parentId: 5, order: 0, isFolder: false },
    { id: 2, name: 'Folder B', parentId: null, order: 1, isFolder: true },
    { id: 4, name: 'File B', parentId: 2, order: 0, isFolder: false },
    { id: 7, name: 'File A', parentId: null, order: 0, isFolder: false },
    { id: 8, name: 'File A', parentId: null, order: 0, isFolder: false },
    { id: 9, name: 'File A', parentId: null, order: 0, isFolder: false },
    { id: 10, name: 'File A', parentId: null, order: 0, isFolder: false },
  ]);

  return (
    <>
      <MACreateCollectionModal open={modalOpen} onOpenChange={setModalOpen}>
        {formType}
      </MACreateCollectionModal>

      <Card className="h-full">
        <CardHeader>
          <CardTitle>
            <h2 className="title">Library</h2>
          </CardTitle>
          <CardDescription>
            <span className="secondary">Home {'>'} ...</span>
          </CardDescription>
          <CardAction>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="cursor-pointer">
                  <PlusIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>
                  <h3 className="title text-lg">Create</h3>
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem onSelect={() => openModal({ type: 'CREATE_PLAYLIST' })}>
                    Playlist
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => openModal({ type: 'CREATE_FOLDER' })}>
                    Folder
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardAction>
        </CardHeader>

        <CardContent className="flex flex-col overflow-hidden h-full">
          <ButtonGroup>
            <Select defaultValue="all">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="playlists">Playlists</SelectItem>
                <SelectItem value="albums">Albums</SelectItem>
                <SelectItem value="artists">Artists</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className={`transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-0
              ${inputHidden ? 'w-0 px-0 border-0 opacity-0opacity-0' : 'w-30 opacity-100'}`}
              placeholder="Search..."
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setInputHidden((prev) => (prev = !prev))}
              className="cursor-pointer"
            >
              {inputHidden ? <SearchIcon /> : <XIcon />}
            </Button>
          </ButtonGroup>

          <Separator className="mt-5 mb-3" />

          <FolderRenderer list={list} />
        </CardContent>
      </Card>
    </>
  );
};

export default Library;
