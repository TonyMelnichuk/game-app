import { FC, useReducer, useState, useEffect } from 'react'
import { durakReducer, initialState } from '../../reducers/durakReducer'
import {
  makeMoveAI,
  tossCardAI,
  toDiscardPile,
  takeTableCardsPlayer,
  allowAIBeat,
  restartGame,
  checkWinner,
} from '../../actions/durak/durakActionCreators'
import { S } from './style'
import Trump from './trump'
import Table from './table'
import StartGame from './startGame'
import DurakSettings from './durakSettings'
import Modal from '../common/modal'
import useEffectWithDelay from '../../hooks/useEffectWithDelay'
import Hand from './hand'
import { bindedPageVariants } from '../common/framerMotionVariants'

const DurakGame: FC = () => {
  const [{
    step,
    cardsOnTable,
    isWinnerNeedToBeChecked,
    isGameStart,
    trumpCard,
    AIDeck,
    isPlayerDeckLocked,
    isDiscardPileBtnShown,
    isEndOfRound,
    isAICanToss,
    isSuccessfulDefense,
    isAICanBeat,
    isAITossedCardsForPlayerToTake,
    playerDeck,
    result
  }, dispatch] = useReducer(durakReducer, initialState)
  const [isAICardsFlipped, setIsAICardsFlipped] = useState<boolean>(false)

  useEffectWithDelay(dispatch, tossCardAI, isAICanToss)
  useEffectWithDelay(dispatch, toDiscardPile, isSuccessfulDefense)
  useEffectWithDelay(dispatch, allowAIBeat, isAICanBeat)
  useEffectWithDelay(dispatch, takeTableCardsPlayer, isAITossedCardsForPlayerToTake)

  const handleFlipAICards = () => {
    setIsAICardsFlipped(!isAICardsFlipped)
  }

  // Throw AI`s card on the table when step changes
  useEffect(() => {
    if (step === 'ai' && cardsOnTable.length === 0) {
      const timeout = setTimeout(() => dispatch(makeMoveAI()), 600)
      return () => clearTimeout(timeout)
    }
  }, [step, cardsOnTable])

  useEffect(() => {
    if (isWinnerNeedToBeChecked) dispatch(checkWinner())
  }, [isWinnerNeedToBeChecked])

  return (
    <>
      <S.DurakGame {...bindedPageVariants}>
        {isGameStart
          ? <>
            <S.DurakInner>
              <Trump trumpCard={trumpCard} />
              <Hand
                handCards={AIDeck}
                isAICardsFlipped={isAICardsFlipped}
                dispatch={dispatch}
              />
              <Table
                table={cardsOnTable}
                isPlayerDeckLocked={isPlayerDeckLocked}
                step={step}
                isDiscardPileBtnShown={isDiscardPileBtnShown}
                isEndOfRound={isEndOfRound}
                dispatch={dispatch}
              />
              <Hand
                handCards={playerDeck}
                isPlayerHand={true}
                isPlayerDeckLocked={isPlayerDeckLocked}
                dispatch={dispatch}
              />
            </S.DurakInner>
            <DurakSettings
              isAICardsFlipped={isAICardsFlipped}
              onAICardsFlip={handleFlipAICards}
            />
          </>
          : <StartGame dispatch={dispatch} />
        }
      </S.DurakGame>
      {result &&
        <Modal>
          <S.RestartGame>
            <S.RestartGameText>{result}</S.RestartGameText>
            <S.RestartGameButton onClick={() => dispatch(restartGame())}>Restart</S.RestartGameButton>
          </S.RestartGame>
        </Modal>
      }
    </>
  )
}

export default DurakGame