import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

const StartGame = styled.div`
  position: relative;
  display: inline-block;
  top: 50%;
  left: 50%;
  height: auto;
  transform: translate(-50%, -50%); 
  z-index: 1;
`

const StartGameBtn = styled(motion.button)`
  border: none;
  font-size: 2.5rem;
  letter-spacing: 1px;
  padding: 1rem;
  background-color: rgb(243, 243, 243);
  border-radius: .4rem;
  border: 3px solid rgb(165, 165, 165);
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  color: #3c3c3c;
  text-shadow: -1px 1px 2px rgba(60, 60, 60, 1);
  cursor: pointer;

  &:focus-visible {
    border: 5px solid #222;
    transform: translateY(.6rem);
    transition: transform .1s linear; 
  }

  &:hover {
    transform: translateY(.6rem);
    transition: transform .1s linear; 
  }
`

const StartGameSpan = styled.span`
  position: absolute;
  bottom: -1.2rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(207, 207, 207);
  border-radius: .4rem;
  z-index: -1;
  border: 3px solid rgb(165, 165, 165);
`

export const S = {
  StartGame,
  StartGameBtn,
  StartGameSpan
}