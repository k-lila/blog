import styled from 'styled-components'

export const FooterStyled = styled.footer`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2em auto 2em;
  grid-template-rows: 1fr;
  gap: 0.25em;
  align-items: center;
  padding: 0.25em;
  button {
    height: 100%;
    width: 100%;
  }
  .footer-content {
    background-color: lightgray;
    height: 100%;
    // border: 1px solid black;
    border-radius: 0.25em;
  }
`
