import { FC, memo } from 'react'
import {
  toDiscardPile,
  checkWhetherAIHasCardsToToss,
  takeTableCardsAI,
  ActionCreatorsTypes
} from '../../../../actions/durak/durakActionCreators'
import { S } from './style'
import { CardOwnerType } from '../../../../reducers/durakReducer'

interface TableButtonProps {
  isPlayerDeckLocked: boolean
  step: CardOwnerType | null
  isDiscardPileBtnShown: boolean
  isEndOfRound: boolean
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const TableButton: FC<TableButtonProps> = (props) => {
  const {
    isPlayerDeckLocked,
    step,
    isDiscardPileBtnShown,
    isEndOfRound,
    dispatch
  } = props

  const setButtonAnimation = (condition: any) => {
    const visible = { opacity: 1, y: 0, display: 'block' }
    const hidden = { opacity: 0, y: 8, transitionEnd: { display: 'none' } }
    const initial = { opacity: 0, y: 8, display: 'none' }

    return ({
      animate: condition ? visible : hidden,
      initial
    })
  }

  return (
    <>
      <S.TableButton
        onClick={() => dispatch(checkWhetherAIHasCardsToToss())}
        disabled={isPlayerDeckLocked}
        {...setButtonAnimation(!isPlayerDeckLocked && step === 'ai')}
      >
        Take Cards
      </S.TableButton>
      <S.TableButton
        onClick={() => dispatch(toDiscardPile())}
        {...setButtonAnimation(isDiscardPileBtnShown)}
      >
        To Discard Pile
      </S.TableButton>
      <S.TableButton
        onClick={() => dispatch(takeTableCardsAI())}
        {...setButtonAnimation(isEndOfRound)}
      >
        End Round
      </S.TableButton>
    </>
  )
}

export default memo(TableButton)
