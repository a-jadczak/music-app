import Main from './components/custom/Grid'
import MusicController from './components/custom/MusicController'
import SearchBar from './components/custom/SearchBar'
import { Button } from './components/ui/button'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SearchBar/>
      <Main/>
      <MusicController/>
    </ThemeProvider>
  )
}

export default App
