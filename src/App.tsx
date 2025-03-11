import { GlobalStyle } from './styles/styles'
import BlogContainer from './containers/blogcontainer'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/themes'

function App() {
  const teste = [themeDark, themeLight]
  return (
    <ThemeProvider theme={teste[1]}>
      <GlobalStyle />
      <BlogContainer />
    </ThemeProvider>
  )
}

export default App
