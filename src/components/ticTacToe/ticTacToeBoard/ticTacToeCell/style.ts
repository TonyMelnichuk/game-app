import styled from 'styled-components/macro'

const TicTacToeCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(230, 230, 230);
  border-radius: 1rem;
  color: #222;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;

  &:focus-visible {
    box-shadow: 0px 0px 0px 7px #222;
  }
`

export const S = {
  TicTacToeCell,
}