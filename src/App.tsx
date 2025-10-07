import Grid from './components/custom/Grid'
import MusicController from './components/custom/MusicController'
import SearchBar from './components/custom/SearchBar'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SearchBar/>
      <Grid/>
      <MusicController/>
    </ThemeProvider>
  )
}

export default App
