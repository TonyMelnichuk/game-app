import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const TableButton = styled(motion.button)`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 999;
  padding: .8rem 2.2rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  border: none;
  font-weight: bold;
  font-weight: 700;
  background-color: #a12222;
  color: #dcdcdc;
  cursor: pointer;
  transition: box-shadow .2s linear;
  font-family: 'Rubik', sans-serif;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.85);
  letter-spacing: 1px;
  border: 3px solid #dedede;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 1); 

  &:hover {
    box-shadow: 0px 0px 0px 3px rgb(31 31 31);
  }

  &:focus-visible {
    transition: none;
    border: none;
    box-shadow: 0px 0px 0px 6px rgb(31 31 31);
  }

  @media (max-width: 414px) and (max-height: 620px) {
    padding: .6rem 1.7rem;
    font-size: 1rem;
    bottom: 1rem;
    left: 1rem;
  }

  @media (min-width: 550px) and (min-height: 550px) {
    padding: 1rem 2.5rem;
    font-size: 1.3rem;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    padding: 1rem 4rem;
    font-size: 1.7rem;
  }
`

export const S = {
  TableButton
}