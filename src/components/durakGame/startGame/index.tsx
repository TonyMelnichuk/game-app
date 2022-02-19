import { FC } from 'react'
import { ActionCreatorsTypes, startDurakGame } from '../../../actions/durak/durakActionCreators'
import { S } from './style'

interface StartGameProps {
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const StartGame: FC<StartGameProps> = ({ dispatch }) => {
  const handleGameStart = () => {
    dispatch(startDurakGame())
  }

  const handleButtonEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') handleGameStart()
  }

  return (
    <S.StartGame>
      <S.StartGameBtn
        whileTap={{ y: 10 }}
        onAnimationComplete={handleGameStart}
        onKeyPress={handleButtonEnter}
      >
        Start Game
      </S.StartGameBtn>
      <S.StartGameSpan />
    </S.StartGame>
  )
}

export default StartGame