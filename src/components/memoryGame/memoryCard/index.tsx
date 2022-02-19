import { FC } from 'react'
import { S } from './style'
import {
  ActionCreatorsTypes,
  flipCard
} from '../../../actions/memoryCards/memoryCardsActionCreators'
import { ActiveCardType, MemoryCardType } from '../../../reducers/memoryCardsReducer'

interface MemoryCardProps {
  card: MemoryCardType
  frontCard: string
  dispatch: React.Dispatch<ActionCreatorsTypes>
  activeCards: ActiveCardType[]
  isCardsLocked: boolean
}

const MemoryCard: FC<MemoryCardProps> = (props) => {
  const {
    card: {
      img, 
      id,
      title,
      isMatch
    },
    frontCard,
    dispatch,
    activeCards,
    isCardsLocked
  } = props

  const handleCardFlip = () => {
    if (!isCardsLocked) dispatch(flipCard(id, title))

    return false
  }

  const handleCardEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') handleCardFlip()
  }

  return (
    <S.MemoryCard
      isFlipped={(activeCards.some(card => card.id === id) || isMatch)}
      onClick={handleCardFlip}
      onKeyPress={handleCardEnter}
      tabIndex={0}
    >
      <S.MemoryCardImg isFront={true} src={img} alt='back' />
      <S.MemoryCardImg src={frontCard} alt='front' />
    </S.MemoryCard>
  )
}

export default MemoryCard