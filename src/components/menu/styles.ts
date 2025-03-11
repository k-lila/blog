import styled from 'styled-components'

export const MenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.25em;
  .personagens {
    background-color: transparent;
    padding: 0.25em;
    display: flex;
    justify-content: space-between;
    width: 9em;
    border: none;
    border-bottom: ${(props) => props.theme.border.width} solid
      ${(props) => props.theme.colors.secondary};
  }
  .choose {
    border: ${(props) => props.theme.border.width} solid
      ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.border.radius};
    display: flex;
    overflow-x: scroll;
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
