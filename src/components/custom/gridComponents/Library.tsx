import { PlusIcon, SearchIcon, XIcon } from 'lucide-react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../../ui/select"
import { Button } from '../../ui/button'
import { ButtonGroup } from '../../ui/button-group'
import { Input } from '../../ui/input'
import { Separator } from '../../ui/separator'
import LibraryElement from '../listElements/LibraryElement'
import { ScrollArea } from '../../ui/scroll-area'
import MATitle from '../ui/text/MATitle'
import MASecondaryText from '../ui/text/MASecondaryText'
import { useReducer, useState, type ReactElement } from 'react'
import MACreateCollectionModal from '../ui/modals/MACreateCollectionModal'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import CreatePlaylistForm from '../forms/modalFroms/CreatePlaylistForm'
import CreateFolderForm from '../forms/modalFroms/CreateFolderForm'

type ModalAction =
  { type: "CREATE_PLAYLIST" }
  | { type: "CREATE_FOLDER" }

type ModalState = ReactElement | null

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return <CreatePlaylistForm/>
    case "CREATE_FOLDER":
      return <CreateFolderForm/>
    default:
      return <></>
  }
}

const Library = () => {
  const [inputHidden, setInputHidden] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formType, dispatch] = useReducer(modalReducer, null)

  const openModal = (value: ModalAction) => {
    setModalOpen(true)
    dispatch(value)
  }

  return (
    <>
      <MACreateCollectionModal open={modalOpen} onOpenChange={setModalOpen}>
        {formType}
      </MACreateCollectionModal>

      <Card className='h-full'>
        <CardHeader>
          <CardTitle>
            <MATitle>Library</MATitle>
          </CardTitle>
          <CardDescription>
            <MASecondaryText>Home {">"} ...</MASecondaryText>
          </CardDescription>
          <CardAction>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className='cursor-pointer'>
                  <PlusIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>
                  <MATitle size='lg'>Create</MATitle>
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem onSelect={() => openModal({type: "CREATE_PLAYLIST"})}>
                    Playlist
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => openModal({type: "CREATE_FOLDER"})}>
                    Folder
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
        <CardContent className='flex flex-col overflow-hidden'>
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
              className=
              {`transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-0
              ${inputHidden ? 'w-0 px-0 border-0 opacity-0opacity-0' : 'w-30 opacity-100'}`}
              placeholder="Search..."
            />
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setInputHidden(prev => prev = !prev)}
              className='cursor-pointer'
            >
              {inputHidden ? <SearchIcon /> : <XIcon />}
            </Button>
          </ButtonGroup>

          <Separator className='mt-5 mb-3'/>

          <ScrollArea className='flex-1 overflow-auto'>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
            <LibraryElement/>
          </ScrollArea>
        </CardContent>  
      </Card>
    </>
  )
}

export default Library