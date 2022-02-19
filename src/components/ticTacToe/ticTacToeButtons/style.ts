import styled, { css } from 'styled-components/macro'

const SwitchButtonWidth = css`
  width: 6rem;

  @media (min-width: 320px) and (min-height: 414px) {
    width: 8rem;
  }

  @media (min-width: 480px) and (min-height: 600px) {
    width: 10rem;
  }
`

const ButtonStyle = css`
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  color:#558f63;
  font-size: 1rem;

  @media (min-width: 320px) and (min-height: 0px) {
    font-size: 1rem;
  }

  @media (min-width: 320px) and (min-height: 414px) {
    font-size: 1.5rem;
  }

  @media (min-width: 480px) and (min-height: 600px) {
    font-size: 2rem;
    padding: 1.3rem 1.9rem;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    font-size: 2.2rem;
  }
`

const TicTacToeButtons = styled.div`
  border-radius: .2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const CheckboxMarker = styled.span`
  ${ButtonStyle};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const CheckboxLabel = styled.label`
  position: relative;
  display: block;
  user-select: none;
  pointer-events: none;
  height: 100%;

  &:before {
    content: "";
    background: rgb(230,230,230);
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: .2rem;
    transform: translateX(0);
    transition: transform .3s ease-in-out, width .3s ease-in-out;
  }
`

const ToggleMarkerCheckbox = styled.input`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  display: block;

  &:checked + ${CheckboxLabel}:before {
    transform: translateX(3rem);
    transition: transform .3s ease-in-out, width .3s ease-in-out;
    ${SwitchButtonWidth};

    @media (min-width: 320px) and (min-height: 0px) {
      transform: translateX(3rem);
    }

    @media (min-width: 320px) and (min-height: 414px) {
      transform: translateX(4rem);
    }

    @media (min-width: 480px) and (min-height: 600px) {
      transform: translateX(5rem);
    }
  }

  &:focus {
    margin-top: -.1rem;
  }
`

const ToggleMarkerBtn = styled.button`
  background: rgba(0,0,0,.3);
  border-radius: .3rem;
  overflow: hidden;
  ${SwitchButtonWidth};
  text-align: center;
  letter-spacing: 1px;
  position: relative;
  padding-right: 3rem;
  position: relative;
  box-shadow: 0px 0px 0px 3px #3b6445; 
  height: 100%;
  border: none;

  &:before {
    content: "0";
    ${ButtonStyle};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px 5px #222;
  }

  @media (min-width: 320px) and (min-height: 0px) {
    padding-right: 3rem;

    &:before {
      width: 3rem;
    }
  }

  @media (min-width: 320px) and (min-height: 414px) {
    padding-right: 4rem;

    &:before {
      width: 4rem;
    }
  }

  @media (min-width: 480px) and (min-height: 600px) {
    padding-right: 5rem;
    box-shadow: 0px 0px 0px 5px #3b6445; 

    &:before {
      width: 5rem;
    }
  }
`

const TicTacToeBtn = styled.button<{ isMark?: boolean, isActive?: boolean }>`
  ${ButtonStyle}
  border: none;
  font-size: 1rem;
  padding: .9rem 1.5rem;
  line-height: .8;
  border-radius: .4rem;
  background-color: rgb(230,230,230);
  z-index: 99999;
  transition: box-shadow .2s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0px 4px #3b6445;
  }

  &:focus-visible {
    transition: none;
    box-shadow: 0px 0px 0px 5px #222;
  }

  @media (min-width: 480px) and (min-height: 600px) {
    padding: 1.3rem 1.9rem;
  }
`

const TicTacToeWinner = styled.p`
  font-size: 2rem; 
  color: rgb(230, 230, 230);
  font-family: 'Rubik', sans-serif;
  font-weight: 700;

  @media (min-width: 320px) and (min-height: 414px) {
    font-size: 2.5rem;
  }

  @media (min-width: 480px) and (min-height: 600px) {
    font-size: 3.5rem;
  }
`

export const S = {
  CheckboxLabel,
  ToggleMarkerCheckbox,
  CheckboxMarker,
  ToggleMarkerBtn,
  TicTacToeButtons,
  TicTacToeBtn,
  TicTacToeWinner
}