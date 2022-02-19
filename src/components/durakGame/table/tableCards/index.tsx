import { FC } from 'react'
import { S } from './style'
import Card from '../../card'
import { CardType, CardOwnerType } from '../../../../reducers/durakReducer'

interface TableCardsProps {
  table: CardType[]
  step: CardOwnerType | null
}

const TableCards: FC<TableCardsProps> = ({ table, step }) => {
  return (
    <S.TableCards>
      {table.map(({ owner, id, url }) => (
        <S.CardWrapper
          isTopCard={(step === 'player' && owner === 'ai') || (step === 'ai' && owner === 'player')}
          key={id}>
          <Card
            url={url}
            id={id}
            isTableCard={true}
            owner={owner}
          />
        </S.CardWrapper>
      ))}
    </S.TableCards>
  )
}

export default TableCards

