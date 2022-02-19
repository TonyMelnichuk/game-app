import { motion } from 'framer-motion'
import styled from 'styled-components/macro'

const DurakGame = styled(motion.div)`
  height: 100%;  
  background-color: #137e0c;
  overflow: hidden;
  padding: 7rem 0 1rem 0;

  @media (min-height: 0) and (orientation: landscape) {
    padding: 1rem;
  }

  @media (min-height: 768px) and (orientation: landscape) {
    padding: 7rem 0 1rem 0;
  }
`

const DurakInner = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  justify-content: center;
`

const RestartGame = styled.div`
  padding: 2.5rem 5rem;

  @media (min-width: 480px) and (min-height: 414px) {
    padding: 3.5rem 6rem;
  }
`

const RestartGameText = styled.h2`
  font-size: 2rem;
  color: #3c3b3b;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 320px) and (min-height: 414px)  {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) and (min-height: 768px)  {
    font-size: 3.5rem;
  }
`

const RestartGameButton = styled.button`
  border: none;
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 1.2rem;
  color: #f5f5f5e6;
  border-radius: .4em;
  background-color: #a12222;
  transition: background .2s linear;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 1rem 0;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;

  &:hover {
    background-color: #571616;
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px 5px #222;
  }

  @media (min-width: 320px) and (min-height: 414px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    padding: 1.5rem 0;
    font-size: 1.9rem;
  }
`

export const S = {
  DurakGame,
  DurakInner,
  RestartGame,
  RestartGameText,
  RestartGameButton
}

