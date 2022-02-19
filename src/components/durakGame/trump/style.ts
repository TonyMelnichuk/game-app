import styled from 'styled-components/macro'

export const Trump = styled.img`
  position: absolute;
  top: 20%;
  width: 5.2rem;
  height: 7.7rem;
  right: -4rem;
  transform: rotate(-90deg);

  @media (min-width: 480px)  {
    width: 6.5rem;
    height: 10rem;
    right: -5rem;
  }

  @media (min-width: 768px) {
    width: 8rem;
    height: 12rem;
    right: -6.2rem;
  }

  @media (min-height: 0) and (orientation: landscape) {
    width: 6.5rem;
    height: 10rem;
    right: -5.8rem;
  }

  @media (min-height: 550px) and (orientation: landscape) {
    right: -7rem;
    width: 8rem;
    height: 12rem;
  }

  @media (min-height: 768px) and (orientation: landscape) {
    right: -6.2rem;
  }
`

export const S = { Trump }