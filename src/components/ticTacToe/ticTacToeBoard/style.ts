import styled from 'styled-components/macro'

const TicTacToeBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 7rem);
  grid-template-rows: repeat(3, 7rem);
  grid-gap: 1rem;
  background-color: rgba(0, 0, 0, .3);
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 320px) and (min-height: 0px) {
    grid-template-columns: repeat(3, 5.5rem);
    grid-template-rows: repeat(3, 5.5rem);
    grid-gap: .7rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 320px) and (min-height: 414px) {
    grid-template-columns: repeat(3, 8rem);
    grid-template-rows: repeat(3, 8rem);
    grid-gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 480px) and (min-height: 600px) {
    grid-template-columns: repeat(3, 12rem);
    grid-template-rows: repeat(3, 12rem);
    padding: 2rem;
    grid-gap: 1.5rem;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    grid-template-columns: repeat(3, 15rem);
    grid-template-rows: repeat(3, 15rem);
    padding: 3rem;
    grid-gap: 2rem;
  }
`

export const S = {
  TicTacToeBoard
}