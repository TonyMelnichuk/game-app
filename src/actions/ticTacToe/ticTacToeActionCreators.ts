export const MAKE_MOVE_PLAYER = 'MAKE_MOVE_PLAYER'
export const LOCK_BOARD = 'LOCK_BOARD'
export const MAKE_MOVE_AI = 'MAKE_MOVE_AI'
export const RESTART_GAME = 'RESTART_GAME'
export const SET_MARKS = 'SET_MARKS'
export const SWITCH_FIRST_STEP_TO_AI = 'SWITCH_FIRST_STEP_TO_AI'
export const CHECK_WINNER = 'CHECK_WINNER'

export type TicTacToeMarkerType = 'X' | '0'
export type TicTacToeWinnerType = TicTacToeMarkerType | 'Draw'
export type TicTacToeStepType = 'player' | 'ai'

type MakeMovePlayerType = { type: typeof MAKE_MOVE_PLAYER, id: number }
type LockBoardType = { type: typeof LOCK_BOARD }
type MakeMoveAIType = { type: typeof MAKE_MOVE_AI }
type RestartGameType = { type: typeof RESTART_GAME }
type SetMarksType = { type: typeof SET_MARKS, mark: TicTacToeMarkerType }
type SwitchFirstStepToAIType = { type: typeof SWITCH_FIRST_STEP_TO_AI }
type CheckWinnerType = { type: typeof CHECK_WINNER }

export type ActionCreatorsTypes = MakeMovePlayerType | LockBoardType | MakeMoveAIType | RestartGameType | SetMarksType | SwitchFirstStepToAIType | CheckWinnerType

export const makeMovePlayer = (id: number): MakeMovePlayerType => ({ type: MAKE_MOVE_PLAYER, id })
export const lockBoard = (): LockBoardType => ({ type: LOCK_BOARD })
export const makeMoveAI = (): MakeMoveAIType => ({ type: MAKE_MOVE_AI })
export const restartGame = (): RestartGameType => ({ type: RESTART_GAME })
export const setMarks = (mark: TicTacToeMarkerType): SetMarksType => ({ type: SET_MARKS, mark })
export const switchFirstStepToAI = (): SwitchFirstStepToAIType => ({ type: SWITCH_FIRST_STEP_TO_AI })
export const checkWinner = (): CheckWinnerType => ({ type: CHECK_WINNER })