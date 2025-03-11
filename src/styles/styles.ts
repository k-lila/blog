import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
  }

  button {
    cursor: pointer;
  }

`

export const bordasVerticais = css`
  border-right: ${(props) => props.theme.border.width} solid
    ${(props) => props.theme.colors.secondary};
  border-left: ${(props) => props.theme.border.width} solid
    ${(props) => props.theme.colors.secondary};
`
export const bordasHorizontais = css`
  border-top: ${(props) => props.theme.border.width} solid
    ${(props) => props.theme.colors.secondary};
  border-bottom: ${(props) => props.theme.border.width} solid
    ${(props) => props.theme.colors.secondary};
`
