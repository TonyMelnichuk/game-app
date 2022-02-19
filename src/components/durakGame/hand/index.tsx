import { FC, useState, useRef, useEffect } from 'react'
import { ActionCreatorsTypes } from '../../../actions/durak/durakActionCreators'
import { S } from './style'
import Card from '../card'
import { CardType } from '../../../reducers/durakReducer'

const handVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface HandProps {
  handCards: CardType[]
  isPlayerHand?: boolean
  isPlayerDeckLocked?: boolean
  isAICardsFlipped?: boolean
  dispatch: React.Dispatch<ActionCreatorsTypes>
}

const Hand: FC<HandProps> = (props) => {
  const {
    handCards,
    isPlayerHand,
    isPlayerDeckLocked,
    isAICardsFlipped,
    dispatch
  } = props

  // Basically, I sort cards in reducer from smallest to largest. But I rotate AI`s cards using transform and their order changes, so I need to sort them on the contrary
  const sortedHandCards = !isPlayerHand ? handCards.slice().sort((a, b) => b.power - a.power) : handCards

  const [cardWidth, setCardWidth] = useState<number>(0)
  const handRef = useRef<HTMLDivElement>(null)

  const defineCardWidth = (HAND_WIDTH: number, countOfHandCards: number) => {
    const cardWidth = Math.ceil(HAND_WIDTH / countOfHandCards)
    const finalCardWidth = cardWidth < 60 ? cardWidth : 60
  
    setCardWidth(finalCardWidth)
  }

  useEffect(() => {
    const handleResize = () => {
      const HAND_WIDTH = handRef.current!.clientWidth

      defineCardWidth(HAND_WIDTH, handCards.length)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [handCards])

  return (
    <S.Hand
      isPlayerHand={isPlayerHand}>
      <S.HandCards
        isHalfOfDeck={handCards.length > 18}
        ref={handRef}
        variants={handVariants}
        initial='hidden'
        animate='show'
      >
        {sortedHandCards && sortedHandCards.map(({ backFace, url, id }) =>
          <Card
            url={(!isPlayerHand && !isAICardsFlipped) ? backFace : url}
            id={id}
            isPlayerDeckLocked={isPlayerDeckLocked}
            isPlayerCard={isPlayerHand}
            cardWidth={cardWidth}
            dispatch={dispatch}
            key={id}
          />
        )}
      </S.HandCards>
    </S.Hand>
  )
}

export default Hand