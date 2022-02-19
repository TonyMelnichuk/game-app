import styled, { css } from 'styled-components/macro'
import { motion } from 'framer-motion'

const Card = styled(motion.div)<{ cardWidth?: number, isPlayerCard?: boolean, isTableCard?: boolean }>`
  height: 100%;
  position: relative;
  width: ${({ cardWidth }) => cardWidth ? cardWidth + 'px' : 0};
  border-radius: .4em; 
  
  ${({ isTableCard }) => isTableCard && css`
    height: 7.4rem;
    width: 4.7rem;

    @media (min-width: 768px) and (min-height: 550px) {
      height: 10rem;
      width: 6.5rem;
    }

    @media (min-width: 1024px) and (min-height: 768px)  {
      height: 12rem;
      width: 8rem;
    }
  `};

  ${({ isPlayerCard }) => isPlayerCard && css`
    cursor: pointer;
    transition: border .1s linear, top  .2s linear, box-shadow .2s linear;

    &:hover {
      box-shadow: -5px 0px 6px 0px rgb(48 48 48);
    }

    &:focus-visible {
      border: 4px solid rgb(31 31 31);
      border-radius: .8rem;
    }
  `}
`

const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%; 
`

export const S = { 
  Card, 
  CardImg 
}
