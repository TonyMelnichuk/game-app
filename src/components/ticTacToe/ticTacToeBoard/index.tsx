import { FC } from 'react'
import { ActionCreatorsTypes } from '../../../actions/ticTacToe/ticTacToeActionCreators'
import { TicTacToeCellType } from '../../../reducers/ticTacToeReducer'
import TicTacToeCell from './ticTacToeCell'
import { S } from './style'

interface TicTacToeBoard {
  cells: TicTacToeCellType[]
  isBoardLocked: boolean
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const TicTacToeBoard: FC<TicTacToeBoard> = ({ cells, isBoardLocked, dispatch }) => {
  return (
    <S.TicTacToeBoard>
      {cells.map(cell =>
        <TicTacToeCell
          {...cell}
          isBoardLocked={isBoardLocked}
          dispatch={dispatch}
          key={cell.id}
        />)}
    </S.TicTacToeBoard>
  )
}

export default TicTacToeBoard