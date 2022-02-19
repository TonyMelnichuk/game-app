import styled, { css } from 'styled-components/macro'

export const MemoryCard = styled.div<{ isFlipped: boolean }>`
  position: relative;
  box-shadow: 1px 1px 1px rgb(0 0 0 / 30%);
  transition: transform .5s;
  transform-style: preserve-3d;
  transform: scale(1);
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    transition: transform .2s;
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px 7px #222;
    border-radius: .4rem;
  }

  ${({isFlipped}) => isFlipped && css`
    transform: rotateY(180deg);

    & > img {
      background: #b5d4c6;
    }
  `}
`

export const MemoryCardImg = styled.img<{ isFront?: boolean }>`
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: absolute;
  border-radius: .4rem;
  background-color: rgb(216 203 77);
  backface-visibility: hidden;
  transform : ${({ isFront }) => isFront && 'rotateY(180deg)'};

  @media (min-width: 480px) and (min-height: 600px) {
    padding: 1.7rem; 
  }
`

export const S = {
  MemoryCard,
  MemoryCardImg
}