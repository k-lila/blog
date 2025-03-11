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

  .--d-none {
    display: none !important;
  }

  .--d-flex {
    display: flex !important;
  }

  .transition {
    transition: all 0.3s ease-in;
  }

  .--fadein {
    animation: fadeIn 0.3s ease-in forwards;
  }

  .--fadeout {
    width: 0;
    height: 0;
    animation: fadeOut 0.3s ease-out forwards;
  }

  .seta--baixo {
    transform: rotate(90deg);
  }
  .seta--cima {
    transform: rotate(-90deg);
  }


  @keyframes fadeIn {
    from {
      opacity: 0;
      width: 0;
      height: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      width: 0;
      height: 0;
    }
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
