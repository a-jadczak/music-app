import { PlusIcon, SearchIcon, XIcon } from 'lucide-react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../../ui/select"
import { Button } from '../../ui/button'
import { ButtonGroup } from '../../ui/button-group'
import { Input } from '../../ui/input'
import { Separator } from '../../ui/separator'
import { Tooltip } from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip'
import LibraryElement from '../listElements/LibraryElement'
import { ScrollArea } from '../../ui/scroll-area'
import MATitle from '../ui/text/MATitle'
import MASecondaryText from '../ui/text/MASecondaryText'
import { useState } from 'react'
import MACreateCollectionModal from '../ui/modals/MACreateCollectionModal'

const Library = () => {
  const [inputHidden, setInputHidden] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  return (
    <TooltipProvider>
      <Card className='h-full'>
        <CardHeader>
          <CardTitle>
            <MATitle>Library</MATitle>
          </CardTitle>
          <CardDescription>
            <MASecondaryText>Home {">"} ...</MASecondaryText>
          </CardDescription>
          <CardAction>
            <Tooltip>
              <TooltipTrigger asChild>
                <MACreateCollectionModal/>
              </TooltipTrigger>
              <TooltipContent >
                <p>Create new playlist</p>
              </TooltipContent>
            </Tooltip>
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
    </TooltipProvider>
  )
}

export default Library