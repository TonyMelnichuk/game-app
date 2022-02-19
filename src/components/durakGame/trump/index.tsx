import { FC } from 'react'
import { CardType } from '../../../reducers/durakReducer'
import { S } from './style'

interface TrumpProps {
  trumpCard: CardType | null
}

const Trump: FC<TrumpProps> = ({ trumpCard }) => {
  return (
    <>
      {trumpCard && <S.Trump src={trumpCard.url} alt='trump' />}
    </>
  )
}

export default Trump