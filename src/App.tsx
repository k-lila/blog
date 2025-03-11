import { GlobalStyle } from './styles/styles'
import BlogContainer from './containers/blogcontainer'
import Title from './components/title'
import Menu from './components/menu'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/themes'
import Footer from './containers/footer'

function App() {
  const teste = [themeDark, themeLight]
  return (
    <>
      <ThemeProvider theme={teste[1]}>
        <GlobalStyle />
        <BlogContainer>
          <header className="header">
            <Title />
            <Menu />
          </header>
          <div className="content"></div>
          <div className="footer">
            <Footer />
          </div>
        </BlogContainer>
      </ThemeProvider>
    </>
  )
}

export default App
