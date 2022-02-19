export const START_DURAK_GAME = 'START_DURAK_GAME'
export const MAKE_MOVE_AI = 'MAKE_MOVE_AI'
export const MAKE_MOVE_PLAYER = 'MAKE_MOVE_PLAYER'
export const TOSS_CARD_AI = 'TOSS_CARD_AI'
export const TAKE_TABLE_CARDS_PLAYER = 'TAKE_TABLE_CARDS_PLAYER'
export const TAKE_TABLE_CARDS_AI = 'TAKE_TABLE_CARDS_AI'
export const TO_DISCARD_PILE = 'TO_DISCARD_PILE'
export const CHECK_WHETHER_AI_HAS_CARDS_TO_TOSS = 'CHECK_WHETHER_AI_HAS_CARDS_TO_TOSS'
export const ALLOW_AI_BEAT = 'ALLOW_AI_BEAT'
export const CHECK_WINNER = 'CHECK_WINNER'
export const SHOW_RESULT = 'SHOW_RESULT'
export const RESTART_GAME = 'RESTART_GAME'

export type ResultType = 'Draw' | 'You lose' | 'You Won'

type StartDurakGameType = { type: typeof START_DURAK_GAME }
type MakeMoveAIType = { type: typeof MAKE_MOVE_AI }
type MakeMovePlayerType = { type: typeof MAKE_MOVE_PLAYER, cardId: number }
type TakeTableCardsPlayerType = { type: typeof TAKE_TABLE_CARDS_PLAYER }
type TakeTableCardsAIType = { type: typeof TAKE_TABLE_CARDS_AI }
type TossCardAIType = { type: typeof TOSS_CARD_AI }
type toDiscardPileType = { type: typeof TO_DISCARD_PILE }
type CheckWhetherAIHasCardsToTossType = { type: typeof CHECK_WHETHER_AI_HAS_CARDS_TO_TOSS }
type AllowAIBeatType = { type: typeof ALLOW_AI_BEAT }
type CheckWinnerType = { type: typeof CHECK_WINNER }
type ShowResultType = { type: typeof SHOW_RESULT, text: ResultType }
type RestartGameType = { type: typeof RESTART_GAME }

export type ActionCreatorsTypes = StartDurakGameType | MakeMoveAIType | MakeMovePlayerType | TossCardAIType | toDiscardPileType | TakeTableCardsPlayerType | TakeTableCardsAIType | CheckWhetherAIHasCardsToTossType | AllowAIBeatType | CheckWinnerType | ShowResultType | RestartGameType

export const startDurakGame = (): StartDurakGameType => ({ type: START_DURAK_GAME })
export const makeMoveAI = (): MakeMoveAIType => ({ type: MAKE_MOVE_AI })
export const makeMovePlayer = (cardId: number): MakeMovePlayerType => ({ type: MAKE_MOVE_PLAYER, cardId })
export const takeTableCardsPlayer = (): TakeTableCardsPlayerType => ({ type: TAKE_TABLE_CARDS_PLAYER })
export const takeTableCardsAI = (): TakeTableCardsAIType => ({ type: TAKE_TABLE_CARDS_AI })
export const tossCardAI = (): TossCardAIType => ({ type: TOSS_CARD_AI })
export const toDiscardPile = (): toDiscardPileType => ({ type: TO_DISCARD_PILE })
export const checkWhetherAIHasCardsToToss = (): CheckWhetherAIHasCardsToTossType => ({ type: CHECK_WHETHER_AI_HAS_CARDS_TO_TOSS })
export const allowAIBeat = (): AllowAIBeatType => ({ type: ALLOW_AI_BEAT })
export const checkWinner = (): CheckWinnerType => ({ type: CHECK_WINNER })
export const showResult = (text: ResultType): ShowResultType => ({ type: SHOW_RESULT, text })
export const restartGame = (): RestartGameType => ({ type: RESTART_GAME })
