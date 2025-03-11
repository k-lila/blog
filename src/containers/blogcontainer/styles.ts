import styled from 'styled-components'
import { bordasVerticais } from '../../styles/styles'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 100svh;
  .view {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.secondary};
    background-color: white;
    display: flex;
  }
  .blog {
    background-color: black;
    padding: 1vmin;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: min-content auto 5em;
    grid-template-columns: 1fr;
    gap: 1vmin;
  }

  .header {
    border-radius: ${(props) => props.theme.border.radius};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 2px;
  }
  .content {
    border-radius: ${(props) => props.theme.border.radius};
    background-color: ${(props) => props.theme.colors.primary};
  }
  .footer {
    border-radius: ${(props) => props.theme.border.radius};
    background-color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 480px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    .blog {
      ${bordasVerticais};
    }
  }

  @media (min-width: 1441px) {
    .blog {
      ${bordasVerticais};
    }
  }
`
