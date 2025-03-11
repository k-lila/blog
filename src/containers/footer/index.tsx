import { FooterStyled } from './styles'

const Footer = () => {
  return (
    <FooterStyled>
      <button>{'<'}</button>
      <div className="footer-content"></div>
      <button>{'>'}</button>
    </FooterStyled>
  )
}

export default Footer
