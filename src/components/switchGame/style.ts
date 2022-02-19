import styled, { css } from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const BurgerDecor = styled.span<{isGamesSwitcherOpen: boolean}>`
  position: absolute;
  width: 70%;
  height: 3px;
  background-color: #222;
  position: relative;
  transition: transform .1s linear, width .1s ease, height .1s ease;
  z-index: 150;

  &:before, &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: #222;
  }

  &:before {
    top: -1rem;
  }

  &:after {
    bottom: -1rem;
  }

  ${({ isGamesSwitcherOpen }) => isGamesSwitcherOpen && css`
    &:before {
      display: none;
    }
    &:after {
      top: 0;
      transform: rotate(-90deg);
    }
    & {
      transform: rotate(-45deg);
    }
  `}
`

const SwitchGameBurger = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(245, 245, 245);
  border: none;
  border-radius: .4rem;
  cursor: pointer;

  &:hover {
    & > ${BurgerDecor}, ${BurgerDecor}:before, ${BurgerDecor}:after {
      width: .6rem;
      height: .6rem;
      border-radius: 50%;
    }
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px 5px #222;
  }
`

const SwitchGameDropdown = styled(motion.div)`
  position: absolute;
  top: 6.5rem;
  right: 1rem;
  background: rgba(256, 256, 256, .9);
  padding: 1.5rem;
  display: flex;
  border-radius: 1rem;
  z-index: 100;
`

const GameLink = styled(NavLink)`
  padding: .7rem .8rem .6rem;
  margin-right: .8rem;
  border-radius: .4rem;
  transition: background .3s ease;

  &:focus-visible {
    box-shadow: 0px 0px 0px 5px #222;
  }

  &.active {
    background: rgba(76,88,112,1);

    &:hover {
      background: rgba(76,88,112, .8);
    }
  }

  &:hover {
    background: rgba(76, 88, 112, .6);
  }

  @media (min-width: 414px) {
    padding: .9rem 1rem .8rem;
    margin-right: 1rem;
  }
`

const LinkIcon = styled.img`
  width: 4rem;
  height: 4rem;
`

export const S = {
  SwitchGameBurger,
  BurgerDecor,
  SwitchGameDropdown,
  GameLink,
  LinkIcon
}
