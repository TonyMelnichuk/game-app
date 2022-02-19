import styled, { css } from 'styled-components/macro'

const TableCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const CardWrapper = styled.div<{ isTopCard: boolean }>`
  padding: .5rem;

  ${({ isTopCard }) => isTopCard && css`
    margin-top: 3rem;
    margin-left: -5.7rem;

    @media (min-width: 768px) and (min-height: 550px) {
      margin-left: -7.5rem;
    }

    @media (min-width: 1024px) and (min-height: 768px)  {
      margin-top: 4rem;
      margin-left: -9rem;
    }
  `}
`

export const S = {
  TableCards,
  CardWrapper
}