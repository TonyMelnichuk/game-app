import { motion } from 'framer-motion'
import styled from 'styled-components/macro'

export const TicTacToe = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(85 143 99);
`

export const TicTacToeContent = styled.div`
  display: grid; 
`

export const ChoseMark = styled.p`
  padding: 2rem 4rem;
  font-size: 1.5rem;
  color: #3c3b3b;

  & span {
    color: #e6e6e6;
    padding: .5rem 1rem;
    border-radius: .4em;
    background: #558f63;
  }

  @media (min-width: 320px) and (min-height: 414px) {
    padding: 2.5rem 5rem;
    font-size: 2rem;
  }

  @media (min-width: 480px) and (min-height: 600px) {
    padding: 3rem 5rem;
    font-size: 3rem;
  }
`

export const S = {
  TicTacToe,
  TicTacToeContent,
  ChoseMark
}