import styled, { css } from 'styled-components/macro'
import { motion } from 'framer-motion'

const SettingsButton = styled.button<{ isActive: boolean }>`
  position: absolute;
  top: 1rem;
  right: 7rem;
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(245, 245, 245, .9);
  border-radius: .4rem;
  border: none;
  cursor: pointer;
  transition: background .3s ease;

  &:focus-visible {
    box-shadow: 0px 0px 0px 5px #222;
  }

  ${({ isActive }) => isActive && css`
    & > img {
      transform: scale(.9);
    }
  `}

  @media (min-height: 0) and (orientation: landscape) {
    left: 1rem
  }

  @media (min-height: 768px) and (orientation: landscape) {
    left: auto;
  }
`

const SettingsImg = styled.img`
  position: absolute;
  width: 70%;
  height: 70%;
  transition: transform .1s ease;

  &:hover {
    transform: rotate(-20deg);
  }
`

const SettingsDropdown = styled(motion.div)`
  position: absolute;
  top: 6.5rem;
  right: 1rem;
  background: rgba(256,256,256,.9);
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  align-items: center;
  z-index: 100;

  @media (min-height: 0) and (orientation: landscape) {
    left: 1rem;
    right: auto;
  }

  @media (min-height: 768px) and (orientation: landscape) {
    left: auto;
    right: 1rem;
  }
`

const CheckboxLabel = styled.label`
  color: #222;
  font-weight: 400;
  white-space: nowrap;
  font-size: 1.4rem;
  margin-bottom: .4rem;
  font-family: 'Rubik', sans-serif;
`

const DropdownCheckbox = styled.input`
  position: relative;
  width: 4.5rem;
  height: 2.2rem;
  appearance: none;
  background: rgb(199, 199, 199);
  outline: none;
  border-radius: 1rem;
  transition: background .2s ease-in-out;
  cursor: pointer;

  &:hover {
    &:before {
      background: #a12222;
    }
  }
  
  &:checked{
    background: rgba(76,88,112,1);
  }

  &::before{
    content: '';
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    top: 0;
    left: 0;
    background: #222;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    transform: scale(1.1);
    transition: left .3s ease, background .2s ease-in-out;
  }

  &:checked::before{
    left: 2.2rem
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px 5px #222;
  }
`

export const S = {
  SettingsButton,
  SettingsImg,
  SettingsDropdown,
  DropdownCheckbox,
  CheckboxLabel
}