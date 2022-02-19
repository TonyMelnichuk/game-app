import { FC, useState } from 'react'
import {
  ActionCreatorsTypes,
  restartGame,
  switchFirstStepToAI,
  TicTacToeMarkerType,
  TicTacToeWinnerType
} from '../../../actions/ticTacToe/ticTacToeActionCreators'
import { TicTacToeCellType } from '../../../reducers/ticTacToeReducer'
import { S } from './style'

interface TicTacToeButtonsProps {
  winner: TicTacToeWinnerType | null
  cells: TicTacToeCellType[]
  dispatch: React.Dispatch<ActionCreatorsTypes>
  playerMark: TicTacToeMarkerType
  onMarkSwitch: (marker: '0' | 'X') => void
}

const TicTacToeButtons: FC<TicTacToeButtonsProps> = (props) => {
  const {
    winner,
    cells,
    dispatch,
    playerMark,
    onMarkSwitch
  } = props

  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false)

  const handleCheckboxToggle = () => {
    setIsCheckboxChecked(!isCheckboxChecked)
    onMarkSwitch(isCheckboxChecked ? 'X' : '0')
  }

  const handleCheckboxEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key = 'Enter') handleCheckboxToggle()
  }

  const checkWinner = (winner: TicTacToeWinnerType, playerMark: TicTacToeMarkerType) => {
    switch (winner) {
      case playerMark:
        return 'You Won!'
      case 'Draw':
        return 'Draw'
      default:
        return 'You Lose!'
    }
  }

  return (
    <S.TicTacToeButtons>
      {winner &&
        <>
          <S.TicTacToeWinner>
            {checkWinner(winner, playerMark)}
          </S.TicTacToeWinner>
          <S.TicTacToeBtn onClick={() => dispatch(restartGame())}>Refresh</S.TicTacToeBtn>
        </>
      }
      {cells.every(cell => !cell.marker) &&
        <>
          <S.ToggleMarkerBtn onKeyPress={handleCheckboxEnter}>
            <S.ToggleMarkerCheckbox
              type='checkbox'
              name='chooseMark'
              checked={isCheckboxChecked}
              onChange={handleCheckboxToggle}
              tabIndex={-1}
            />
            <S.CheckboxLabel htmlFor='chooseMark'>
              <S.CheckboxMarker>X</S.CheckboxMarker>
            </S.CheckboxLabel>
          </S.ToggleMarkerBtn>
          <S.TicTacToeBtn onClick={() => dispatch(switchFirstStepToAI())}>
            Let AI Go First
          </S.TicTacToeBtn>
        </>
      }
    </S.TicTacToeButtons>
  )
}

export default TicTacToeButtons
