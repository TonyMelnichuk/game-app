import { FC, useState, useRef } from 'react'
import { S } from './style'
import settingsImg from '../../assets/settings.svg'
import useClickOutside from '../../../hooks/useClickOutside'
import { defineDropdownAnimation } from '../../../utils'

interface DurakSettingsProps {
  isAICardsFlipped: boolean
  onAICardsFlip: () => void
}

const DurakSettings: FC<DurakSettingsProps> = ({ isAICardsFlipped, onAICardsFlip }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
  const settingsRef = useRef(null)
  const settingsDropdownRef = useRef(null)
  
  useClickOutside([settingsRef, settingsDropdownRef], () => setIsSettingsOpen(false))
  
  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  const handleCheckboxEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')  onAICardsFlip()
  }

  return (
    <>
      <S.SettingsButton
        onClick={handleSettingsToggle}
        isActive={isSettingsOpen}
        ref={settingsRef}
      >
        <S.SettingsImg
          src={settingsImg}
          alt='settings'
        />
      </S.SettingsButton>
      <S.SettingsDropdown
        ref={settingsDropdownRef}
        {...defineDropdownAnimation(isSettingsOpen)}
      >
        <S.CheckboxLabel htmlFor='reverseCards'>Show AI’s Cards</S.CheckboxLabel>
        <S.DropdownCheckbox
          type='checkbox'
          name='reverseCards'
          checked={isAICardsFlipped}
          onKeyPress={handleCheckboxEnter}
          onChange={onAICardsFlip}
        />
      </S.SettingsDropdown>
    </>
  )
}

export default DurakSettings
