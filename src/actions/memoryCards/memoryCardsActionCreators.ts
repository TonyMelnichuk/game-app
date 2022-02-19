export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'
export const FLIP_CARD = 'FLIP_CARD'
export const SAVE_MATCHES = 'SAVE_MATCHES'
export const RESET_MATCHES = 'RESET_MATCHES'
export const IS_CARDS_LOCKED = 'IS_CARDS_LOCKED'
export const RESTART_GAME = 'RESTART_GAME'

export type CardTitleType = 'snapchat' | 'instagram' | 'viber' | 'telegram' | 'twitter' | 'whatsapp'

type ShuffleCardsType = { type: typeof SHUFFLE_CARDS }
type FlipCardType = { type: typeof FLIP_CARD, id: number, title: CardTitleType }
type SaveMatchesType = { type: typeof SAVE_MATCHES }
type ResetMatchesType = { type: typeof RESET_MATCHES }
type LockCardsType = { type: typeof IS_CARDS_LOCKED }
type RestartGameType = { type: typeof RESTART_GAME }

export type ActionCreatorsTypes = ShuffleCardsType | FlipCardType | SaveMatchesType | ResetMatchesType | LockCardsType | RestartGameType 

export const shuffleCards = (): ShuffleCardsType => ({ type: SHUFFLE_CARDS })
export const flipCard = (id: number, title: CardTitleType): FlipCardType => ({ type: FLIP_CARD, id, title })
export const saveMatches = (): SaveMatchesType => ({ type: SAVE_MATCHES })
export const resetMatches = (): ResetMatchesType => ({ type: RESET_MATCHES })
export const lockCards = (): LockCardsType => ({ type: IS_CARDS_LOCKED })
export const restartGame = (): RestartGameType => ({ type: RESTART_GAME })
