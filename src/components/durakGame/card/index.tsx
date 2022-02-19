import { FC } from 'react'
import { S } from './style'
import {
  ActionCreatorsTypes,
  makeMovePlayer,
} from '../../../actions/durak/durakActionCreators'
import { CardOwnerType } from '../../../reducers/durakReducer'
import throwCardPlayer from '../../assets/sounds/throwCard.mp3'
import throwCardAI from '../../assets/sounds/throwCard2.mp3'
import useAudio from '../../../hooks/useAudio'

interface CardProps {
  url: string
  id: number
  isPlayerDeckLocked?: boolean
  isTableCard?: boolean
  isPlayerCard?: boolean
  cardWidth?: number
  owner?: CardOwnerType
  dispatch?: React.Dispatch<ActionCreatorsTypes>
}

const Card: FC<CardProps> = (props) => {
  const {
    url,
    id,
    isPlayerDeckLocked,
    isTableCard,
    isPlayerCard,
    dispatch,
    owner,
    cardWidth,
  } = props

  const handleStartSoundPlayer = useAudio(throwCardPlayer)
  const handleStartSoundAI = useAudio(throwCardAI)

  const isCardInteractive = !isPlayerDeckLocked && isPlayerCard

  const handleCardClick = () => {
    if (dispatch) dispatch(makeMovePlayer(id))
  }

  const handleCardEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') handleCardClick()
  }

  const defineCardAnimation = () => {
    return isTableCard
      ? ({
        animate: { opacity: 1, y: 0 },
        initial: { opacity: 0, y: owner === 'player' ? 35 : -35 },
        onAnimationStart: () => owner === 'player' ? handleStartSoundPlayer() : handleStartSoundAI(),
      })
      : {
        variants: {
          hidden: { opacity: 0, x: -10 },
          show: { opacity: 1, x: 0 }
        }
      }
  }

  return (
    <S.Card
      cardWidth={cardWidth}
      isPlayerCard={isPlayerCard}
      isTableCard={isTableCard}
      tabIndex={isPlayerCard ? 0 : -1}
      onKeyPress={isCardInteractive ? e => handleCardEnter(e) : undefined}
      onClick={isCardInteractive ? () => handleCardClick() : undefined}
      {...defineCardAnimation()}
    >
      <S.CardImg src={url} alt='Card'/>
    </S.Card>
  )
}

export default Card