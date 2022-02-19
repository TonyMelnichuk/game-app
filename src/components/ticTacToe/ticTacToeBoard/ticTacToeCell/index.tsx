import { FC } from 'react'
import {
  ActionCreatorsTypes,
  makeMovePlayer,
  TicTacToeMarkerType
} from '../../../../actions/ticTacToe/ticTacToeActionCreators'
import { S } from './style'
import MarkerSvg from './markerSvg'

interface TicTacToeCellProps {
  id: number
  marker: TicTacToeMarkerType | null
  isBoardLocked: boolean
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const TicTacToeCell: FC<TicTacToeCellProps> = ({ id, marker, isBoardLocked, dispatch }) => {
  const handlePutMark = () => {
    return (!isBoardLocked && !marker) && dispatch(makeMovePlayer(id))
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') handlePutMark()
  }

  return (
    <S.TicTacToeCell
      onClick={handlePutMark}
      tabIndex={0}
      onKeyPress={handleEnter}
    >
      {marker === 'X'
        ? <MarkerSvg svgFor='X' dispatch={dispatch} />
        : marker === '0'
          ? <MarkerSvg svgFor='0' dispatch={dispatch} />
          : null
      }
    </S.TicTacToeCell>
  )
}

export default TicTacToeCell