import Menu from '../../components/menu'
import Title from '../../components/title'
import useToggle from '../../hooks/useToggle'
import Footer from '../footer'
import { Container } from './styles'

const BlogContainer = () => {
  const { toggle, setToggle } = useToggle()
  return (
    <Container $openfooter={toggle}>
      <div className="view">
        <div className="blog transition">
          <header className="header">
            <Title />
            <Menu />
          </header>
          <div className="content"></div>
          <div className="footer">
            <button onClick={setToggle} className="footer__toggle">
              <span
                className={`transition ${toggle ? 'seta--cima' : 'seta--baixo'}`}
              >
                {'<'}
              </span>
            </button>
            <Footer />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BlogContainer
