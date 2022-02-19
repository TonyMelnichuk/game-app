import { motion } from 'framer-motion'
import styled from 'styled-components/macro'

const MemoryGame = styled(motion.div)`
  background: rgb(85 143 99);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MemoryCards = styled.div`
  width: 25rem;
  height: 25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1.2rem;
  padding: .7rem;
  border-radius: .4rem;
  perspective: 100rem;
  background-color: rgba(0,0,0,.3);
  margin-bottom: 1.5rem;
  
  @media (min-width: 320px) and (min-height: 0) {
    width: 21rem;
    height: 21rem;
    padding: .9rem;
    grid-gap: .9rem;
    margin-bottom: .8rem;
  }

  @media (min-width: 320px) and (min-height: 414px) {
    width: 30rem;
    height: 30rem;
    padding: 1.5rem;
    grid-gap: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 480px) and (min-height: 600px) {
    width: 40rem;
    height: 40rem;
    padding: 2rem;
    grid-gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    width: 60rem;
    height: 60rem;
    padding: 3rem;
  }
`

const ResetMemoryGame = styled.button`
  padding: .7rem 3rem;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  border-radius: .4rem;
  border: none;
  cursor: pointer;
  transition: background .2s linear, box-shadow .2s linear,  color .2s linear;
  background-color: rgba(0,0,0,.3);
  color: #fff;

  &:hover {
    box-shadow: 0px 0px 0px 3px #b5d4c6;
  }

  &:focus-visible {
    transition: none;
    box-shadow: 0px 0px 0px 5px #222;
  }

  @media (min-width: 320px) and (min-height: 414px) {
    font-size: 1.5rem;
  }

  @media (min-width: 480px) and (min-height: 600px) {
    padding: 1rem 5.5rem;
    font-size: 2rem;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 2.5rem;
  }
`

export const S = {
  MemoryGame,
  MemoryCards,
  ResetMemoryGame
}