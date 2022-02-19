import { motion } from 'framer-motion'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const Intro = styled(motion.div)`
  min-height: 100vh;
  background-image: linear-gradient(to right top, #121212, #13202a, #00313a, #004236, #204f1e); 
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5rem 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const IntroContent = styled.div`
  position: relative;
  width: 70%;
  height: auto;

  @media (min-width: 768px) {
    width: 100%;
  }
`

const IntroTitle = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  padding: 1.7rem;
  border-radius: .4rem;
  text-shadow: 2px 2px 2px #0f482b;
  text-transform: uppercase;
  color: #558f63;
  letter-spacing: 3px;
  background-color: #dadada;
  box-shadow: inset 18px -20px 0px 10px rgb(207 145 32 / 64%);
  position: relative;
  text-align: center;
  margin: 0 auto 2.5rem;
  border: 5px solid #cf9120;

  &::before {
    content: '';
    position: absolute;
    top: -.8rem;
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    background: #cf9120;
    box-shadow: 0px 0px 0px 15px #00323a;
    left: 1.8rem;
  }

  @media (min-width: 414px) {
    font-size: 3.5rem;
    padding: 2rem;
    box-shadow: inset 17px -20px 0px 20px rgb(207 145 32 / 64%);

    &::before, &::after {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    font-size: 4rem;
    width: max-content;
  } 

  @media (min-width: 1100px) {
    margin-bottom: 5rem;
    font-size: 6rem;
  } 
`

const Games = styled(motion.div)`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 100%);

  &:hover a img:not(:hover) {
    opacity: .5;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 29%);
    padding: 0;
  } 
`

const GameTitle = styled.h3`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.7rem 1rem 3.2rem;
  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
  background: #2424249e;
  box-shadow: 4px -11px 8px -7px rgba(34, 60, 80, 0.2);

  @media (min-width: 320px) {
    font-size: 1.5rem;
    padding: 2rem 1rem 3.7rem;
  } 

  @media (min-width: 550px) {
    font-size: 2rem;
    padding: 2rem 1rem 4.7rem;
  } 

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 2rem 1rem 3.7rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    padding: 2rem 1rem 4.7rem;
  } 

  @media (min-width: 1440px) {
    font-size: 2.5rem;
  } 
`

const GameWrapper = styled(motion.div)`
  padding: 0 1rem;
`

const GameLink = styled(NavLink)`
  display: grid;
  grid-template-rows: 1fr max-content;
  text-decoration: none;
  border: 5px solid #cf9120;
  position: relative;

  &:before {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(55%) rotate(-45deg);
    width: 4rem;
    height: 4rem;
    background: #cf9120;
  }
`

const Decor = styled.span`
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(55%) rotate(-45deg);
  width: 3.5rem;
  height: 3.5rem;
  background: #dadada;
  border: 3px solid #cf9120;

  & > img {
    width: 60%;
    transform: rotate(45deg);
  }

  @media (min-width: 320px) {
    width: 4rem;
    height: 4rem;
  } 

  @media (min-width: 550px) {
    width: 5rem;
    height: 5rem;
  } 

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 1024px) {
    width: 5rem;
    height: 5rem;
  } 
`

const GameImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: opacity .2s linear;
`

export const S = {
  Intro,
  IntroTitle,
  Games,
  GameTitle,
  Decor,
  IntroContent,
  GameWrapper,
  GameLink,
  GameImg
}