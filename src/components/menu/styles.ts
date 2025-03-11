import styled from 'styled-components'

export const MenuStyled = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0.5em 0.25em;
  position: relative;
  .personagens {
    position: absolute;
    top: calc(100% - 1vmin);
    left: 1vmin;
    transform: translate(0%, -100%);
    background-color: lightgray;
    padding: 0.5em 0.75em;
    display: flex;
    justify-content: space-between;
    width: 9em;
    border: none;
    border-radius: ${(props) => props.theme.border.radius};
    transition: all 0.1s ease-in;
    &:hover {
      background-color: darkgray;
    }
  }
  .choose {
    border: ${(props) => props.theme.border.width} solid
      ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.border.radius};
    display: flex;
    overflow-x: scroll;
  }

  .modal {
    display: flex;
    position: absolute;
    width: calc(100% - 2vmin);
    max-width: 600px;
    height: 50vh;
    background-color: gray;
    bottom: 1vmin;
    left: 1vmin;
    transform: translate(0%, 100%);
    border-radius: ${(props) => props.theme.border.radius};
  }

  .nome {
    width: fit-content;
    max-width: 50%;
    font-size: 1.25em;
    text-align: end;
    border-radius: 0.25em;
    padding: 0.1em 0.25em;
  }
`
