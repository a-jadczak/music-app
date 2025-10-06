import { PlusIcon, SearchIcon } from 'lucide-react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "./../ui/select"
import { Button } from '../ui/button'
import { ButtonGroup } from '../ui/button-group'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { Tooltip } from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import LibraryElement from './listElements/LibraryElement'
import { ScrollArea } from '../ui/scroll-area'

const Library = () => {
  return (
    <TooltipProvider>
      <Card className='h-full'>
        <CardHeader>
          <CardTitle>Library</CardTitle>
          <CardDescription>Home {">"} ... </CardDescription>
          <CardAction>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" >
                  <PlusIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create new playlist</p>
              </TooltipContent>
            </Tooltip>
          </CardAction>
        </CardHeader>
        <CardContent className='flex flex-col h-[800px]'>

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
              <Input hidden={true} placeholder="Search..." />
              <Button variant="outline" size="icon">
                  <SearchIcon />
              </Button>
          </ButtonGroup>

          <Separator className='mt-5 mb-3'/>

          <ScrollArea className="flex-1 min-h-0 overflow-y-auto">
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