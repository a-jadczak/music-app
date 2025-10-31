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
import LibraryItem from '@/components/Items/LibraryItem';

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

  //
  const [temp, setTemp] = useState([
    {
      id: 1,
      name: 'shrek',
      items: [
        { id: 1, name: "shrek's child" },
        { id: 2, name: "shrek's child 2" },
      ],
    },
    { id: 2, name: 'fiona', items: [{ id: 1, name: "fiona's child" }] },
    { id: 3, name: 'donkey', items: [] },
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

        <CardContent className="flex flex-col overflow-hidden">
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

          <ScrollArea className="flex-1 overflow-auto">
            <ReactSortable list={temp} setList={setTemp} animation={150} group="parent">
              <LibraryFolder index={1}> </LibraryFolder>
              <LibraryItem index={2} />
              <LibraryItem index={2} />
              {/* {temp.map((item) => (
                <>
                  {item.items ? (
                    <LibraryFolder index={item.id}>
                      {item.items && (
                        <ReactSortable
                          list={item.items}
                          setList={(newList) =>
                            setTemp((prev) =>
                              prev.map((p) => (p.id === item.id ? { ...p, items: newList } : p)),
                            )
                          }
                          group={{ name: 'nested', pull: true, put: true }}
                          animation={150}
                        >
                          {item.items.map((subItem: any) => (
                            <LibraryElement index={subItem.id} key={subItem.id} />
                          ))}
                        </ReactSortable>
                      )}
                    </LibraryFolder>
                  ) : (
                    <LibraryItem index={item.id} key={item.id} />
                  )}
                </>
              ))} */}
            </ReactSortable>
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  );
};

export default Library;
