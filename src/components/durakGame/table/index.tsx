import { FC } from 'react'
import { S } from './style'
import TableCards from './tableCards'
import TableButton from './tableButton'
import { CardType, CardOwnerType } from '../../../reducers/durakReducer'
import { ActionCreatorsTypes } from '../../../actions/durak/durakActionCreators'

interface TableProps {
  table: CardType[]
  isPlayerDeckLocked: boolean
  step: CardOwnerType | null
  isDiscardPileBtnShown: boolean
  isEndOfRound: boolean
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Table: FC<TableProps> = (props) => {
  const {
    table,
    isPlayerDeckLocked,
    step,
    isDiscardPileBtnShown,
    isEndOfRound,
    dispatch
  } = props

  return (
    <S.Table>
      <TableCards
        table={table}
        step={step}
      />
      <TableButton
        isPlayerDeckLocked={isPlayerDeckLocked}
        step={step}
        isDiscardPileBtnShown={isDiscardPileBtnShown}
        isEndOfRound={isEndOfRound}
        dispatch={dispatch}
      />
    </S.Table>
  )
}

export default Table
