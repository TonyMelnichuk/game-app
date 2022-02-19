import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-row-gap: 2rem;
  justify-content: center;
  align-content: center;
  background-image: linear-gradient(to left top, #246f4b, #278a5c, #2aa66d, #2bc27f, #2be091);
`
const NotFoundImg = styled.img`
  width: 20rem;

  @media (min-width: 414px) {
    width: 25rem;
  }
`
const NotFoundLink = styled(NavLink)`
  padding: 1rem 0;
  font-size: 2rem;
  border-radius: .4rem;
  border: none;
  font-weight: bold;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 1px;
  background-color: #a12222;
  color: #dcdcdc;
  cursor: pointer;
  transition: box-shadow .2s linear;
  transition: letter-spacing .2s linear, box-shadow .2s linear;
  text-align: center;
  text-decoration: none;

  &:hover {
    letter-spacing: 5px;
    box-shadow: 4px 4px 4px 2px rgba(34, 60, 80, 0.2);
  }

  &:focus-visible {
    transition: none;
    box-shadow: 0px 0px 0px 4px #fff;
  }
`

export const S = {
  NotFound,
  NotFoundImg,
  NotFoundLink
}