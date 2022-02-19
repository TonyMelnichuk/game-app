import styled, { css } from 'styled-components/macro'
import { motion } from 'framer-motion'

const Hand = styled.div<{ isPlayerHand?: boolean }>`
  width: 100vw;

  ${({ isPlayerHand }) => !isPlayerHand && css`
    transform: rotate(180deg);

    @media (min-height: 0) and (orientation: landscape) {
      width: calc(100% - 13.5rem);
    }

    @media (min-height: 768px) and (orientation: landscape) {
      width: 100vw;
    }
  `}

  @media (max-height: 550px) and (orientation: landscape) {
    height: 4rem;
  }
`

const HandCards = styled(motion.div) <{ isHalfOfDeck?: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${({ isHalfOfDeck }) => isHalfOfDeck ? 70 : 100}px;

  @media (min-width: 550px) {
    height: ${({ isHalfOfDeck }) => isHalfOfDeck ? 100 : 120}px;
  }
`

export const S = { Hand, HandCards }