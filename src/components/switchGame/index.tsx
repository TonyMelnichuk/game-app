import { FC, useRef } from 'react'
import { S } from './style'
import memoryImg from '../assets/gamesIcon/memory.png'
import cardsImg from '../assets/gamesIcon/cards.svg'
import ticTacToeImg from '../assets/gamesIcon/ticTacToe.svg'
import useClickOutside from '../../hooks/useClickOutside'
import { bindedPageVariants } from '../common/framerMotionVariants'
import { defineDropdownAnimation } from '../../utils'

const PATHS = [
  { path: '/memoryGame', url: memoryImg, id: 0 },
  { path: '/durakGame', url: cardsImg, id: 1 },
  { path: '/ticTacToeGame', url: ticTacToeImg, id: 2 },
]

interface SwitchGameProps {
  isGamesSwitcherOpen: boolean
  setIsGamesSwitcherOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SwitchGame: FC<SwitchGameProps> = ({ isGamesSwitcherOpen, setIsGamesSwitcherOpen }) => {
  const switchGameRef = useRef(null)
  const switchGameIconsRef = useRef(null)
  
  useClickOutside([switchGameRef, switchGameIconsRef], () => setIsGamesSwitcherOpen(false))

  const handleSwitchGameButtonToggle = () => {
    setIsGamesSwitcherOpen(!isGamesSwitcherOpen)
  }

  return (
    <>
      <S.SwitchGameBurger
        onClick={handleSwitchGameButtonToggle}
        ref={switchGameRef}
        {...bindedPageVariants}>
        <S.BurgerDecor isGamesSwitcherOpen={isGamesSwitcherOpen} />
      </S.SwitchGameBurger>
      <S.SwitchGameDropdown
        ref={switchGameIconsRef}
        {...defineDropdownAnimation(isGamesSwitcherOpen)}
      >
        {PATHS.map(({ path, url, id }) => (
          <S.GameLink
            to={path}
            onClick={handleSwitchGameButtonToggle}
            onBlur={id === PATHS.length - 1 ? handleSwitchGameButtonToggle : undefined}
            key={url}>
            <S.LinkIcon src={url} alt={path.slice(1)} />
          </S.GameLink>
        ))}
      </S.SwitchGameDropdown>
    </>
  )
}

export default SwitchGame
