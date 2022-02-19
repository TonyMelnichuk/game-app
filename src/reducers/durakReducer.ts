import {
  START_DURAK_GAME,
  MAKE_MOVE_AI,
  MAKE_MOVE_PLAYER,
  TAKE_TABLE_CARDS_PLAYER,
  TOSS_CARD_AI,
  TO_DISCARD_PILE,
  TAKE_TABLE_CARDS_AI,
  CHECK_WHETHER_AI_HAS_CARDS_TO_TOSS,
  ALLOW_AI_BEAT,
  CHECK_WINNER,
  SHOW_RESULT,
  RESTART_GAME,
  ActionCreatorsTypes,
  ResultType,
} from '../actions/durak/durakActionCreators'

export type CardOwnerType = 'player' | 'ai'

// types
export type CardType = {
  id: number
  url: string
  index: number
  power: number
  suit: 'clubs' | 'diamonds' | 'hearts' | 'spades'
  isTrump: boolean
  isBeaten: boolean
  backFace: string
  owner?: CardOwnerType
}

// isAITossedCardsWhenPlayerTakesCards
type InitialStateType = {
  deckOfCards: CardType[]
  playerDeck: CardType[] | []
  AIDeck: CardType[] | []
  cardsOnTable: CardType[] | []
  step: CardOwnerType | null
  trumpCard: CardType | null
  isGameStart: boolean
  isAICanToss: boolean
  isAICanBeat: boolean
  isPlayerDeckLocked: boolean
  isSuccessfulDefense: boolean
  isEndOfRound: boolean
  isDiscardPileBtnShown: boolean
  isWinnerNeedToBeChecked: boolean
  isAITossedCardsForPlayerToTake: boolean
  result: ResultType | null
}

const initDeckOfCards: CardType[] = [
  { id: 0, url: 'images/durak/6C.png', index: 1, power: 1, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 1, url: 'images/durak/7C.png', index: 2, power: 2, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 2, url: 'images/durak/8C.png', index: 3, power: 3, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 3, url: 'images/durak/9C.png', index: 4, power: 4, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 4, url: 'images/durak/10C.png', index: 5, power: 5, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 5, url: 'images/durak/JC.png', index: 6, power: 6, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 6, url: 'images/durak/QC.png', index: 7, power: 7, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 7, url: 'images/durak/KC.png', index: 8, power: 8, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 8, url: 'images/durak/AC.png', index: 9, power: 9, suit: 'clubs', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 9, url: 'images/durak/6D.png', index: 1, power: 1, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 10, url: 'images/durak/7D.png', index: 2, power: 2, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 11, url: 'images/durak/8D.png', index: 3, power: 3, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 12, url: 'images/durak/9D.png', index: 4, power: 4, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 13, url: 'images/durak/10D.png', index: 5, power: 5, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 14, url: 'images/durak/JD.png', index: 6, power: 6, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 15, url: 'images/durak/QD.png', index: 7, power: 7, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 16, url: 'images/durak/KD.png', index: 8, power: 8, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 17, url: 'images/durak/AAD.png', index: 9, power: 9, suit: 'diamonds', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 18, url: 'images/durak/6H.png', index: 1, power: 1, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 19, url: 'images/durak/7H.png', index: 2, power: 2, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 20, url: 'images/durak/8H.png', index: 3, power: 3, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 21, url: 'images/durak/9H.png', index: 4, power: 4, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 22, url: 'images/durak/10H.png', index: 5, power: 5, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 23, url: 'images/durak/JH.png', index: 6, power: 6, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 24, url: 'images/durak/QH.png', index: 7, power: 7, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 25, url: 'images/durak/KH.png', index: 8, power: 8, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 26, url: 'images/durak/AH.png', index: 9, power: 9, suit: 'hearts', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 27, url: 'images/durak/6S.png', index: 1, power: 1, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 28, url: 'images/durak/7S.png', index: 2, power: 2, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 29, url: 'images/durak/8S.png', index: 3, power: 3, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 30, url: 'images/durak/9S.png', index: 4, power: 4, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 31, url: 'images/durak/10S.png', index: 5, power: 5, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 32, url: 'images/durak/JS.png', index: 6, power: 6, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 33, url: 'images/durak/QS.png', index: 7, power: 7, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 34, url: 'images/durak/KS.png', index: 8, power: 8, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
  { id: 35, url: 'images/durak/AS.png', index: 9, power: 9, suit: 'spades', isTrump: false, isBeaten: false, backFace: 'images/durak/backFace.png' },
]

export const initialState: InitialStateType = {
  deckOfCards: [...initDeckOfCards],
  playerDeck: [],
  AIDeck: [],
  cardsOnTable: [],
  step: null,
  trumpCard: null,
  isGameStart: false,
  isAICanToss: false,
  isAICanBeat: false,
  isPlayerDeckLocked: false,
  isSuccessfulDefense: false,
  isEndOfRound: false,
  isDiscardPileBtnShown: false,
  isWinnerNeedToBeChecked: false,
  isAITossedCardsForPlayerToTake: false,
  result: null
}

// ! common functions
const findCountOfOwnerCards = (cardsOnTable: CardType[], owner: string): number => {
  return cardsOnTable.filter(card => card.owner === owner).length
}

const addNewCardsToHand = (cards: CardType[], hand: CardType[], count: number): [CardType[], CardType[]] => {
  return [[...hand, ...cards.slice(0, count)].sort((a, b) => a.power - b.power), cards.slice(count)]
}

const deleteCardFromHand = (deck: CardType[], cardId: number) => {
  return deck.filter(card => card.id !== cardId)
}

const pushCardToTable = (table: CardType[], card: CardType, owner: CardOwnerType) => {
  return [...table, { ...card, owner: owner }]
}

const defineCountOfCardsToAdd = (hand: CardType[]): number => {
  if (hand.length >= 6) return 0
  return 6 - hand.length
}

// At the end of the round push cards from the table to the loser`s hand.
const pushCardsFromTableToHand = (tableCards: CardType[], hand: CardType[]) => {
  return [...hand, ...tableCards].sort((a, b) => a.power - b.power)
}

const toDiscardPile = (state: InitialStateType) => {
  let playerCards, AICards, deckOfCardsWithoutAddedCards

  // Here we need to add missing cards to both hands. So I check the 'step' value to decide which hand should get new cards firstly.
  if (state.step === 'player') {
    [
      playerCards, 
      deckOfCardsWithoutAddedCards
    ] = addNewCardsToHand(state.deckOfCards, state!.playerDeck, defineCountOfCardsToAdd(state!.playerDeck));
    [
      AICards, 
      deckOfCardsWithoutAddedCards
    ] = addNewCardsToHand(deckOfCardsWithoutAddedCards, state.AIDeck, defineCountOfCardsToAdd(state!.AIDeck))
  }
  else {
    [
      AICards, 
      deckOfCardsWithoutAddedCards
    ] = addNewCardsToHand(state.deckOfCards, state!.AIDeck, defineCountOfCardsToAdd(state!.AIDeck));
    [
      playerCards, 
      deckOfCardsWithoutAddedCards
    ] = addNewCardsToHand(deckOfCardsWithoutAddedCards, state.playerDeck, defineCountOfCardsToAdd(state!.playerDeck))
  }

  // Reverse the step
  const NEW_STEP = state.step === 'ai' ? 'player' : 'ai' as CardOwnerType

  return {
    ...state,
    deckOfCards: deckOfCardsWithoutAddedCards,
    cardsOnTable: [],
    playerDeck: playerCards,
    step: NEW_STEP,
    isPlayerDeckLocked: NEW_STEP !== 'player',
    AIDeck: AICards,
    isSuccessfulDefense: false,
    isDiscardPileBtnShown: false,
  }
}

const showResult = (state: InitialStateType, text: ResultType) => {
  return {
    ...state,
    result: text,
    isPlayerDeckLocked: true,
    isDiscardPileBtnShown: false,
    isEndOfRound: false,
    isAICanToss: false,
    isAICanBeat: false,
    step: null
  }
}

const restartGame = (state: InitialStateType) => {
  return {
    ...state,
    deckOfCards: [...initDeckOfCards],
    playerDeck: [],
    AIDeck: [],
    cardsOnTable: [],
    trumpCard: null,
    isPlayerDeckLocked: false,
    isSuccessfulDefense: false,
    isAITossedCardsForPlayerToTake: false,
    isGameStart: false,
    result: null
  }
}

const checkWinner = (state: InitialStateType) => {
  if (state.AIDeck.length <= 0 && state.playerDeck.length <= 0) return showResult(state, 'Draw')
  else if (state.deckOfCards.length <= 0 && state.playerDeck.length <= 0) return showResult(state, 'You Won')
  else if (state.deckOfCards.length <= 0 && state.AIDeck.length <= 0) return showResult(state, 'You lose')
  return { ...state, isWinnerNeedToBeChecked: false }
}

// ! Start game logic
const defineFirstStep = (playerDeck: CardType[], AIDeck: CardType[]): CardOwnerType => {
  // Check if there is a trump card inside the player`s or AI`s deck
  const TRUMP_IN_PLAYER_DECK = playerDeck.some(card => card.isTrump)
  const TRUMP_IN_AI_DECK = AIDeck.some(card => card.isTrump)

  if (!TRUMP_IN_PLAYER_DECK) return 'ai'
  else if (!TRUMP_IN_AI_DECK) return 'player'
  else {
    // Find the lowest AI`s and player`s trump cards
    const LOWEST_TRUMP_IN_PLAYER_DECK = playerDeck.find(card => card.isTrump)
    const LOWEST_TRUMP_IN_AI_DECK = AIDeck.find(card => card.isTrump)

    // Return an owner of the lowest one.
    return LOWEST_TRUMP_IN_PLAYER_DECK!.power < LOWEST_TRUMP_IN_AI_DECK!.power ? 'player' : 'ai'
  }
}

const shuffleDeck = (cards: CardType[]) => {
  let cardsCopy = cards.slice()
  for (let i = cardsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = cardsCopy[i]
    cardsCopy[i] = cardsCopy[j]
    cardsCopy[j] = temp
  }

  return cardsCopy
}

const setTrump = (deck: CardType[]): [CardType[], CardType] => {
  const DECK_COPY = deck.slice()
  const RANDOM_INDEX = Math.floor(Math.random() * (36 - 0) + 0)
  const TRUMP_CARD = DECK_COPY[RANDOM_INDEX]

  // Move a trump card to the end of the deck 
  DECK_COPY.splice(RANDOM_INDEX, 1)
  DECK_COPY.push(TRUMP_CARD)

  // We want trump cards to have bigger power that the base one. So inside an array with a deck of cards it finds cards which have the same suit that the thump card, then it sets their 'isTrump' value to 'true' and increase the 'power' value by 10. (Basically cards have the 'power' value from 10 (6) to 90 (ace))
  const DECK_WITH_TRUMP = DECK_COPY.map(card => {
    if (card.suit === TRUMP_CARD.suit) {
      return {
        ...card,
        isTrump: true,
        power: card.power * 10
      }
    }
    return card
  })

  return [DECK_WITH_TRUMP, TRUMP_CARD]
}

const startGame = (state: InitialStateType) => {
  const DECK_OF_CARDS_COPY = state.deckOfCards.slice()
  const SHUFFLED_DECK = shuffleDeck(DECK_OF_CARDS_COPY)
  const [DECK_WITH_TRUMP, TRUMP_CARD] = setTrump(SHUFFLED_DECK)
  const [PLAYER_CARDS, DECK_WITHOUT_PLAYER_CARDS] = addNewCardsToHand(DECK_WITH_TRUMP, state.playerDeck, 6)
  const [AI_CARDS, DECK_WITHOUT_AI_CARDS] = addNewCardsToHand(DECK_WITHOUT_PLAYER_CARDS, state.AIDeck, 6)
  const FIRST_STEP = defineFirstStep(PLAYER_CARDS, AI_CARDS)

  return {
    ...state,
    deckOfCards: DECK_WITHOUT_AI_CARDS,
    playerDeck: PLAYER_CARDS,
    AIDeck: AI_CARDS,
    trumpCard: TRUMP_CARD,
    step: FIRST_STEP,
    isGameStart: true,
    isPlayerDeckLocked: FIRST_STEP === 'ai',
  }
}

// ! player logic
const makeMovePlayer = (state: InitialStateType, cardId: number) => {
  const CLICKED_CARD = state.playerDeck.find(card => card.id === cardId)

  if (!CLICKED_CARD) return state

  // If the step value is 'player' and the table is empty, player throws a clicked card. Otherwise (it means that there are some cards on the table) player tosses card.
  if (state.step === 'player') {
    return state.cardsOnTable.length === 0
      ? putPlayerCardOnTable(state, CLICKED_CARD)
      : tossPlayerCard(state, CLICKED_CARD)
  }

  // If the last step was 'ai', run the function which checks whether a clicked card can beat the table one or not.
  const CARD_TO_BEAT = isPlayerCardCanBeat(state.cardsOnTable, CLICKED_CARD)

  return CARD_TO_BEAT
    ? playerBeat(state, CLICKED_CARD)
    : state 
}

const putPlayerCardOnTable = (state: InitialStateType, card: CardType) => {
  return {
    ...state,
    cardsOnTable: pushCardToTable(state.cardsOnTable, card, 'player'),
    playerDeck: deleteCardFromHand(state.playerDeck, card.id),
    isPlayerDeckLocked: true,
    isAICanBeat: true,
  }
}

const tossPlayerCard = (state: InitialStateType, CLICKED_CARD: CardType) => {
  // Check whether the player can toss cards.
  const PLAYER_CARDS_ON_TABLE = findCountOfOwnerCards(state.cardsOnTable, 'player')

  // Check whether cards on table have the same index that the clicked one.
  const IS_CARD_TO_TOSS = state.cardsOnTable.some(card => card.index === CLICKED_CARD.index)


  // We need to check whether the player can toss a clicked card. The player can toss a card only if the AI didn`t beat the last card. So the count of the AI`s and the player`s cards on the table won`t be equal.
  const isEqualCardsOnTable = findCountOfOwnerCards(state.cardsOnTable, 'player') === findCountOfOwnerCards(state.cardsOnTable, 'ai')

  if (IS_CARD_TO_TOSS) {
    const PLAYER_HAND_WITHOUT_CLICKED_CARD = deleteCardFromHand(state.playerDeck, CLICKED_CARD.id)
    const TABLE_CARDS_WITH_CLICKED_CARD = pushCardToTable(state.cardsOnTable, CLICKED_CARD, 'player')

    return {
      ...state,
      isPlayerDeckLocked: PLAYER_CARDS_ON_TABLE === 5 || isEqualCardsOnTable ? true : false,
      isAICanBeat: isEqualCardsOnTable ? true : false,
      cardsOnTable: TABLE_CARDS_WITH_CLICKED_CARD,
      playerDeck: PLAYER_HAND_WITHOUT_CLICKED_CARD,
      isDiscardPileBtnShown: false,
      isWinnerNeedToBeChecked: PLAYER_HAND_WITHOUT_CLICKED_CARD.length === 0 && state.deckOfCards.length === 0
    }
  } else return state 
}

const isPlayerCardCanBeat = (tableDeck: CardType[], card: CardType): boolean => {
  const LAST_CARD_ON_TABLE = tableDeck[tableDeck.length - 1]

  return (
    (LAST_CARD_ON_TABLE.suit === card.suit && card.power > LAST_CARD_ON_TABLE.power) || (card.isTrump && card.power > LAST_CARD_ON_TABLE.power)
  )
}

const playerBeat = (state: InitialStateType, card: CardType) => {
  return {
    ...state,
    cardsOnTable: pushCardToTable(state.cardsOnTable, card, 'player'),
    playerDeck: deleteCardFromHand(state.playerDeck, card.id),
    isPlayerDeckLocked: true,
    isAICanToss: true,
    isWinnerNeedToBeChecked: state.deckOfCards.length <= 0
  }
}

const checkCardsToTakePlayer = (state: InitialStateType) => {
  const AI_CARDS_TO_TOSS = checkLeftAICardsToToss(state.AIDeck, state.cardsOnTable)

  return AI_CARDS_TO_TOSS.length <= 0
    ? playerTakeTableCards(state)
    : tossLeftAICardsToTable(state, AI_CARDS_TO_TOSS)
}

const checkLeftAICardsToToss = (AIDeck: CardType[], cardsOnTable: CardType[]) => {
  if (findCountOfOwnerCards(cardsOnTable, 'ai') >= 6) return []
  return AIDeck.filter(AICard => cardsOnTable.every(tableCard => tableCard.power <= 6 && tableCard.power === AICard.power))
}

const playerTakeTableCards = (state: InitialStateType) => {
  const [
    AI_CARDS, 
    DECK_WITHOUT_AI_CARDS
  ] = addNewCardsToHand(state.deckOfCards, state.AIDeck, defineCountOfCardsToAdd(state.AIDeck))

  return {
    ...state,
    deckOfCards: DECK_WITHOUT_AI_CARDS,
    playerDeck: pushCardsFromTableToHand(state.cardsOnTable, state.playerDeck),
    AIDeck: AI_CARDS,
    cardsOnTable: [],
    isPlayerDeckLocked: true,
    isAITossedCardsForPlayerToTake: false,
    isWinnerNeedToBeChecked: state.deckOfCards.length <= 0
  }
}

const tossLeftAICardsToTable = (state: InitialStateType, cardsToToss: CardType[]) => {
  const AI_DECK_WITHOUT_CARDS_TO_TOSS = state.AIDeck
    .filter(AICard => cardsToToss.every(cardToToss => AICard.index !== cardToToss.index))

  return {
    ...state,
    cardsOnTable: [...state.cardsOnTable, ...cardsToToss.map(card => ({ ...card, owner: 'ai' as 'ai' }))],
    AIDeck: AI_DECK_WITHOUT_CARDS_TO_TOSS,
    isPlayerDeckLocked: true,
    isAITossedCardsForPlayerToTake: true,
  }
}

// ! AI logic
const makeMoveAI = (state: InitialStateType) => {
  const LOWEST_AI_CARD = state.AIDeck.find(card => card.power)

  if (!LOWEST_AI_CARD) return state

  return putAICardOnTable(state, LOWEST_AI_CARD)
}

const putAICardOnTable = (state: InitialStateType, card: CardType) => {
  return {
    ...state,
    AIDeck: deleteCardFromHand(state.AIDeck, card.id),
    cardsOnTable: pushCardToTable(state.cardsOnTable, card, 'ai'),
    isPlayerDeckLocked: false
  }
}

const tossAICard = (state: InitialStateType) => {
  const IS_AI_CARDS_ON_TABLE_MORE_6 = findCountOfOwnerCards(state.cardsOnTable, 'ai') >= 6

  if (IS_AI_CARDS_ON_TABLE_MORE_6) {
    return {
      ...state,
      isAICanToss: false,
      isSuccessfulDefense: true
    }
  }

  const CARD_TO_TOSS = defineCardToTossAI(state.AIDeck, state.cardsOnTable, state.deckOfCards)

  return CARD_TO_TOSS
    ? {
      ...state,
      cardsOnTable: pushCardToTable(state.cardsOnTable, CARD_TO_TOSS, 'ai'),
      AIDeck: deleteCardFromHand(state.AIDeck, CARD_TO_TOSS.id),
      isPlayerDeckLocked: false,
      isAICanToss: false,
    }
    : {
      ...state,
      isAICanToss: false,
      isSuccessfulDefense: true,
    }
}

const defineCardToTossAI = (
  AIDeck: CardType[],
  cardsOnTable: CardType[],
  deckOfCards: CardType[]
): CardType | null => {
  const IS_TABLE_LENGTH_MORE_6 = cardsOnTable.length >= 6
  const IS_DECK_LENGTH_LESS_6 = deckOfCards.length < 6
  const IS_TABLE_LENGTH_MORE_8 = cardsOnTable.length >= 8
  const IS_DECK_LENGTH_EQUAL_0 = deckOfCards.length === 0
  const IS_AI_DECK_LENGTH_LESS_2 = AIDeck.length <= 2

  // The cards` power. (Trump cards have 10 times power than base one)
  const TRUMP_ACE_POWER = 90
  const TRUMP_KING_POWER = 80
  const TRUMP_JACK_POWER = 60
  const TRUMP_NINE_POWER = 40
  const QUEEN_POWER = 7

  // Toss the card depending on count of cards on the table and count of the deck cards.
  const CARD_TO_TOSS = AIDeck.find(AICard =>
    cardsOnTable.find(tableCard => {
      const IS_CARDS_EQUAL = tableCard.index === AICard.index
      // Toss card until trump ace (including)
      if (IS_AI_DECK_LENGTH_LESS_2 && IS_DECK_LENGTH_EQUAL_0) return IS_CARDS_EQUAL && AICard.power === TRUMP_ACE_POWER
      // Toss card until trump king (including)
      else if ((IS_TABLE_LENGTH_MORE_6 && IS_DECK_LENGTH_LESS_6) || IS_DECK_LENGTH_EQUAL_0) return IS_CARDS_EQUAL && AICard.power <= TRUMP_KING_POWER
      // Toss card until trump jack (including)
      else if (IS_TABLE_LENGTH_MORE_8) return IS_CARDS_EQUAL && AICard.power <= TRUMP_JACK_POWER
      // Toss card until trump nine (including)
      else if (IS_TABLE_LENGTH_MORE_6) return IS_CARDS_EQUAL && AICard.power <= TRUMP_NINE_POWER
      // By default toss card until queen (including)
      else return IS_CARDS_EQUAL && AICard.power <= QUEEN_POWER
    })
  )

  return CARD_TO_TOSS ? CARD_TO_TOSS : null
}

const AIBeat = (state: InitialStateType) => {
  const CARD_TO_BEAT = checkCardToBeatAI(state)
  const PLAYER_CARDS_ON_TABLE = findCountOfOwnerCards(state.cardsOnTable, 'player')

  return CARD_TO_BEAT
    ? {
      ...state,
      cardsOnTable: pushCardToTable(state.cardsOnTable, CARD_TO_BEAT, 'ai'),
      AIDeck: deleteCardFromHand(state.AIDeck, CARD_TO_BEAT.id),
      isPlayerDeckLocked: PLAYER_CARDS_ON_TABLE === 6,
      isAICanBeat: false,
      isDiscardPileBtnShown: true,
      isWinnerNeedToBeChecked: state.deckOfCards.length <= 0
    }
    : {
      ...state,
      step: 'player' as 'player',
      isPlayerDeckLocked: PLAYER_CARDS_ON_TABLE === 6,
      isEndOfRound: true,
      isAICanBeat: false,
      isWinnerNeedToBeChecked: state.deckOfCards.length <= 0
    }
}

const checkCardToBeatAI = (state: InitialStateType): CardType | null => {
  const IS_TABLE_LENGTH_MORE_6 = state.cardsOnTable.length >= 6
  const IS_TABLE_LENGTH_MORE_8 = state.cardsOnTable.length >= 8
  const IS_DECK_LENGTH_LESS_6 = state.deckOfCards.length < 6
  const IS_DECK_LENGTH_LESS_0 = state.deckOfCards.length <= 0
  const IS_AI_CARDS_MORE_9 = state.AIDeck.length >= 8

  // The cards power (Trump cards have 10 times power than base one)
  const TRUMP_ACE_POWER = 90
  const TRUMP_KING_POWER = 80
  const TRUMP_QUEEN_POWER = 70
  const TRUMP_TEN_POWER = 50
  const QUEEN_POWER = 7

  const LAST_CARD_ON_TABLE = state.cardsOnTable[state.cardsOnTable.length - 1]

  let cardToBeat

  // All the suitable cards can beat.
  if (IS_DECK_LENGTH_LESS_0) cardToBeat = findCardToBeatAI(state.AIDeck, LAST_CARD_ON_TABLE, TRUMP_ACE_POWER)
  // Until trump king (including)
  else if (IS_TABLE_LENGTH_MORE_6 && IS_DECK_LENGTH_LESS_6) cardToBeat = findCardToBeatAI(state.AIDeck, LAST_CARD_ON_TABLE, TRUMP_KING_POWER)
  // Until trump queen (including)
  else if (IS_TABLE_LENGTH_MORE_8) cardToBeat = findCardToBeatAI(state.AIDeck, LAST_CARD_ON_TABLE, TRUMP_QUEEN_POWER)
  // Until trump 10 (including)
  else if (IS_TABLE_LENGTH_MORE_6 || IS_AI_CARDS_MORE_9 || IS_DECK_LENGTH_LESS_6) cardToBeat = findCardToBeatAI(state.AIDeck, LAST_CARD_ON_TABLE, TRUMP_TEN_POWER)
  // By default until queen 
  else cardToBeat = state.AIDeck
    .find(card => LAST_CARD_ON_TABLE.suit === card.suit && (card.power <= QUEEN_POWER && card.power > LAST_CARD_ON_TABLE.power))

  return cardToBeat ? cardToBeat : null
}

const findCardToBeatAI = (hand: CardType[], lastCardOnTable: CardType, maxTrumpPower: number): CardType | null => {
  const CARD_TO_BEAT = hand.find(card => (lastCardOnTable.suit === card.suit && card.power > lastCardOnTable.power) || (card.isTrump && (card.power <= maxTrumpPower && card.power > lastCardOnTable.power)))

  return CARD_TO_BEAT ? CARD_TO_BEAT : null
}

const AITakeTableCards = (state: InitialStateType) => {
  const [
    PLAYER_CARDS, 
    DECK_WITHOUT_PLAYER_CARDS
  ] = addNewCardsToHand(state.deckOfCards, state.playerDeck, defineCountOfCardsToAdd(state.playerDeck))

  return {
    ...state,
    deckOfCards: DECK_WITHOUT_PLAYER_CARDS,
    playerDeck: PLAYER_CARDS,
    AIDeck: pushCardsFromTableToHand(state.cardsOnTable, state.AIDeck),
    cardsOnTable: [],
    isAICanBeat: false,
    isPlayerDeckLocked: false,
    isEndOfRound: false
  }
}

export const durakReducer = (
  state: InitialStateType = initialState,
  action: ActionCreatorsTypes
): InitialStateType => {
  switch (action.type) {
    case START_DURAK_GAME:
      return startGame(state)
    case MAKE_MOVE_AI:
      return makeMoveAI(state)
    case MAKE_MOVE_PLAYER:
      return makeMovePlayer(state, action.cardId)
    case TAKE_TABLE_CARDS_PLAYER:
      return playerTakeTableCards(state)
    case TAKE_TABLE_CARDS_AI:
      return AITakeTableCards(state)
    case TOSS_CARD_AI:
      return tossAICard(state)
    case TO_DISCARD_PILE:
      return toDiscardPile(state)
    case CHECK_WHETHER_AI_HAS_CARDS_TO_TOSS:
      return checkCardsToTakePlayer(state)
    case ALLOW_AI_BEAT:
      return AIBeat(state)
    case CHECK_WINNER:
      return checkWinner(state)
    case SHOW_RESULT:
      return showResult(state, action.text)
    case RESTART_GAME:
      return restartGame(state)
    default:
      return state
  }
}
