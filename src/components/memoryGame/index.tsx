import { FC, useReducer, useEffect } from 'react'
import { memoryCardReducer, initialState } from '../../reducers/memoryCardsReducer'
import {
  saveMatches,
  resetMatches,
  lockCards,
  restartGame,
  shuffleCards
} from '../../actions/memoryCards/memoryCardsActionCreators'
import { S } from './style'
import MemoryCard from './memoryCard'
import { bindedPageVariants } from '../common/framerMotionVariants'

const MemoryGame: FC = () => {
  const [{
    activeCards,
    cards,
    frontCard,
    isCardsLocked,
    isAllCardsMatch
  }, dispatch] = useReducer(memoryCardReducer, initialState)

  useEffect(() => {
    dispatch(shuffleCards())
  }, [])

  useEffect(() => {
    if (activeCards.length >= 2) {
      if (activeCards[0].title === activeCards[1].title) dispatch(saveMatches())
      else {
        dispatch(lockCards())
        const timeout = setTimeout(() => dispatch(resetMatches()), 1000)
        return (() => clearTimeout(timeout))
      }
    }
  }, [activeCards])

  return (
    <S.MemoryGame {...bindedPageVariants}>
      <S.MemoryCards>
        {cards.map(card =>
          <MemoryCard
            card={card}
            frontCard={frontCard}
            activeCards={activeCards}
            isCardsLocked={isCardsLocked}
            dispatch={dispatch}
            key={card.id}
          />
        )}
      </S.MemoryCards>
      {isAllCardsMatch &&
        <S.ResetMemoryGame onClick={() => dispatch(restartGame())}>Restart</S.ResetMemoryGame>}
    </S.MemoryGame>
  )
}

export default MemoryGame