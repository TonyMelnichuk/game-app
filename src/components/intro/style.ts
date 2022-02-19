import { motion } from 'framer-motion'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const Intro = styled(motion.div)`
  min-height: 100%;
  background: #d3ac638c; 
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

const IntroInner = styled.div`
  position: relative;
  width: 75%;
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
  background-color: rgb(207 145 32 / 64%); 
  box-shadow: 2px 3px 5px 2px #75757585;
  position: relative;
  text-align: center;
  margin: 0 auto 2.5rem;
  border: 5px solid #cf9120;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -.8rem;
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    background: #cf9120;
    box-shadow: 0px 0px 0px 15px #e7d1a9;
    left: 1.8rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 92%;
    height: 45%;
    background: #dadada;
    z-index: -1;
  }

  @media (min-width: 414px) {
    font-size: 3.5rem;
    padding: 2rem;
    box-shadow: 4px 5px 5px 2px #75757585;

    &::before {
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
  text-shadow: 3px 3px 4px rgb(22 22 22);

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

const GameCard = styled(motion.div)`
  padding: 0 .5rem;
  transition: opacity .2s linear;

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`

const GamesCards = styled(motion.div)`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 100%);

  &:hover ${GameCard}:not(:hover) {
    opacity: .5;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 29%);
    padding: 0;
  } 
`

const GameLink = styled(NavLink)`
  display: grid;
  grid-template-rows: 1fr max-content;
  text-decoration: none;
  border: 5px solid #cf9120;
  position: relative;
  box-shadow: 2px 3px 5px 2px #75757585;

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

  @media (min-width: 414px) {
    box-shadow: 4px 5px 5px 2px #75757585;
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
  box-shadow: -3px 3px 6px 0px #75757585;

  & > img {
    width: 60%;
    transform: rotate(45deg);
  }

  @media (min-width: 320px) {
    width: 4rem;
    height: 4rem;
  } 

  @media (min-width: 414px) {
    box-shadow: -4px 4px 6px 0px #75757585;
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
`

export const S = {
  Intro,
  IntroTitle,
  GamesCards,
  GameTitle,
  Decor,
  IntroInner,
  GameCard,
  GameLink,
  GameImg
}