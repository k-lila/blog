import { MenuStyled } from './styles'
import useToggle from '../../hooks/useToggle'

const Menu = () => {
  const { toggle, setToggle, toggleDisplay } = useToggle()

  return (
    <MenuStyled>
      <button onClick={setToggle} className="personagens">
        <span>Personagens</span>
        <span className={`transition ${toggle ? 'seta--cima' : 'seta--baixo'}`}>
          {'>'}
        </span>
      </button>
      <span className="nome">
        <i>O gato da alameda universidade</i>
      </span>
      <div
        className={`modal ${toggleDisplay ? '' : '--d-none'} ${toggle ? '--fadein' : '--fadeout'}`}
      >
        asais ausdhaushda asduhasu hdaushda sduha suhda suhd
      </div>
    </MenuStyled>
  )
}

export default Menu
