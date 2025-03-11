import { MenuStyled } from './styles'

const Menu = () => {
  return (
    <MenuStyled>
      <button className="personagens">
        <span>Personagens</span>
        <span>^</span>
      </button>
      <span className="nome">
        <i>O gato da alameda universidade</i>
      </span>
    </MenuStyled>
  )
}

export default Menu
