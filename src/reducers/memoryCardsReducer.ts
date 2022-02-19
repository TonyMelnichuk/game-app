import {
  SHUFFLE_CARDS,
  FLIP_CARD,
  SAVE_MATCHES,
  RESET_MATCHES,
  IS_CARDS_LOCKED,
  RESTART_GAME,
  ActionCreatorsTypes,
  CardTitleType
} from '../actions/memoryCards/memoryCardsActionCreators'

export type MemoryCardType = {
  img: string
  id: number
  title: CardTitleType
  isMatch: boolean
}

export type ActiveCardType = {
  id: number
  title: CardTitleType
}

type InitialStateType = {
  cards: MemoryCardType[]
  frontCard: string
  activeCards: ActiveCardType[] | []
  isCardsLocked: boolean
  isAllCardsMatch: boolean
}

export const initialState = {
  cards: [
    { img: 'images/memoryCards/snapchat.svg', id: 0, title: 'snapchat' as const, isMatch: false },
    { img: 'images/memoryCards/snapchat.svg', id: 1, title: 'snapchat' as const, isMatch: false },
    { img: 'images/memoryCards/instagram.svg', id: 2, title: 'instagram' as const, isMatch: false },
    { img: 'images/memoryCards/instagram.svg', id: 3, title: 'instagram' as const, isMatch: false },
    { img: 'images/memoryCards/viber.svg', id: 4, title: 'viber' as const, isMatch: false },
    { img: 'images/memoryCards/viber.svg', id: 5, title: 'viber' as const, isMatch: false },
    { img: 'images/memoryCards/telegram.svg', id: 6, title: 'telegram' as const, isMatch: false },
    { img: 'images/memoryCards/telegram.svg', id: 7, title: 'telegram' as const, isMatch: false },
    { img: 'images/memoryCards/twitter.svg', id: 8, title: 'twitter' as const, isMatch: false },
    { img: 'images/memoryCards/twitter.svg', id: 9, title: 'twitter' as const, isMatch: false },
    { img: 'images/memoryCards/whatsapp.svg', id: 10, title: 'whatsapp' as const, isMatch: false },
    { img: 'images/memoryCards/whatsapp.svg', id: 11, title: 'whatsapp' as const, isMatch: false },
  ],
  frontCard: 'images/memoryCards/front.svg',
  activeCards: [],
  isCardsLocked: false,
  isAllCardsMatch: false
}

const shuffleCards = (cards: MemoryCardType[]) => {
  let cardsCopy = cards.slice()
  for (let i = cardsCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cardsCopy[i];
    cardsCopy[i] = cardsCopy[j];
    cardsCopy[j] = temp;
  }

  return cardsCopy
}

const flipCard = (id: number, title: CardTitleType, state: InitialStateType) => {
  if (state.activeCards.some(card => card.id == id)) return { ...state }

  return {
    ...state,
    activeCards: [...state.activeCards, { id, title }]
  }
}

const saveMatches = (state: InitialStateType) => {
  const cardsWithUpdatedMatches = state.cards.map(({ title, isMatch, ...rest }) => ({
    ...rest,
    title,
    isMatch: isMatch ? isMatch : title === state.activeCards[0].title
  }));

  const isAllCardsMatch = checkWhetherAllCardsMatch(cardsWithUpdatedMatches)

  return {
    ...state,
    cards: cardsWithUpdatedMatches,
    activeCards: [],
    isCardsLocked: isAllCardsMatch,
    isAllCardsMatch: isAllCardsMatch
  }
}

const resetMatched = (state: InitialStateType) => {
  return {
    ...state,
    activeCards: [],
    isCardsLocked: false
  }
}

const checkWhetherAllCardsMatch = (cards: MemoryCardType[]): boolean => {
  return cards.every(card => card.isMatch)
}

const lockCards = (state: InitialStateType) => {
  return {
    ...state,
    isCardsLocked: true
  }
}

const restartGame = (state: InitialStateType) => {
  const cardsWithResetMatch = state.cards.map(card => ({ ...card, isMatch: false }))
  const shuffledCards = shuffleCards(cardsWithResetMatch)

  return {
    ...state,
    cards: shuffledCards,
    isCardsLocked: false,
    isAllCardsMatch: false
  }
}

export const memoryCardReducer = (
  state: InitialStateType = initialState,
  action: ActionCreatorsTypes
): InitialStateType => {
  switch (action.type) {
    case SHUFFLE_CARDS:
      return {
        ...state,
        cards: shuffleCards(state.cards)
      }
    case FLIP_CARD:
      return flipCard(action.id, action.title, state)
    case SAVE_MATCHES:
      return saveMatches(state)
    case RESET_MATCHES:
      return resetMatched(state)
    case IS_CARDS_LOCKED:
      return lockCards(state)
    case RESTART_GAME:
      return restartGame(state)
    default:
      return state
  }
}
