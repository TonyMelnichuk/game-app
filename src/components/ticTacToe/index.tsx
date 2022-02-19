import { FC, useReducer, useState, useEffect } from 'react'
import { initialState, ticTacToeReducer } from '../../reducers/ticTacToeReducer'
import { lockBoard, makeMoveAI, setMarks } from '../../actions/ticTacToe/ticTacToeActionCreators'
import TicTacToeBoard from './ticTacToeBoard'
import TicTacToeButtons from './ticTacToeButtons'
import { S } from './style'
import Modal from '../common/modal'
import { bindedPageVariants } from '../common/framerMotionVariants'

const TicTacToe: FC = () => {
  const [{
    step,
    cells,
    isBoardLocked,
    winner,
    playerMark
  }, dispatch] = useReducer(ticTacToeReducer, initialState)
  const [isModalShown, setIsModalShown] = useState<boolean>(false)

  useEffect(() => {
    if (step === 'ai') {
      dispatch(lockBoard())
      dispatch(makeMoveAI())
    }
  }, [step])

  // remove modal 
  useEffect(() => {
    if (isModalShown) {
      const timeout = setTimeout(() => setIsModalShown(false), 700)
      return () => clearTimeout(timeout)
    }
  }, [isModalShown])

  const handleMarkSwitch = (marker: '0' | 'X') => {
    dispatch(setMarks(marker))
    setIsModalShown(true)
  }

  return (
    <>
      <S.TicTacToe {...bindedPageVariants}>
        <S.TicTacToeContent>
          <TicTacToeBoard
            cells={cells}
            isBoardLocked={isBoardLocked}
            dispatch={dispatch}
          />
          <TicTacToeButtons
            winner={winner}
            cells={cells}
            dispatch={dispatch}
            playerMark={playerMark}
            onMarkSwitch={handleMarkSwitch}
          />
        </S.TicTacToeContent>
      </S.TicTacToe>
      {isModalShown &&
        <Modal>
          <S.ChoseMark>You chose <span>{playerMark}</span></S.ChoseMark>
        </Modal>
      }
    </>
  )
}

export default TicTacToe
