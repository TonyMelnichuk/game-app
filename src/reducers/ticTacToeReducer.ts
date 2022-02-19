import {
  SET_MARKS,
  SWITCH_FIRST_STEP_TO_AI,
  MAKE_MOVE_PLAYER,
  LOCK_BOARD,
  MAKE_MOVE_AI,
  RESTART_GAME,
  ActionCreatorsTypes,
  TicTacToeWinnerType,
  TicTacToeMarkerType,
  TicTacToeStepType,
  CHECK_WINNER
} from '../actions/ticTacToe/ticTacToeActionCreators'

export type TicTacToeCellType = {
  id: number
  marker: TicTacToeMarkerType | null
}

type InitialStateType = {
  cells: TicTacToeCellType[]
  step: TicTacToeStepType | null
  playerMark: TicTacToeMarkerType
  AIMark: TicTacToeMarkerType
  isBoardLocked: boolean
  possibleMoves: number[][]
  winner: TicTacToeWinnerType | null
}

export const initialState = {
  cells: [...Array(9)].map((_, index) => ({ id: index, marker: null })),
  step: 'player' as 'player',
  playerMark: 'X' as 'X',
  AIMark: '0' as '0',
  isBoardLocked: false,
  possibleMoves: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  winner: null,
}

const checkWinner = (state: InitialStateType): InitialStateType => {
  const {
    cells,
    possibleMoves,
    playerMark,
    AIMark
  } = state

  if (cells.every(cell => cell.marker)) return {
    ...state,
    winner: 'Draw',
    isBoardLocked: true,
    step: null
  }

  let winner;
  possibleMoves.forEach(elem => {
    if (cells[elem[0]].marker === playerMark && cells[elem[1]].marker === playerMark && cells[elem[2]].marker === playerMark) {
      winner = playerMark
    }
    else if (cells[elem[0]].marker === AIMark && cells[elem[1]].marker === AIMark && cells[elem[2]].marker === AIMark) {
      winner = AIMark
    }
  })

  return {
    ...state,
    winner: winner ? winner : null,
    isBoardLocked: winner ? true : false,
    step: winner ? null : state.step === 'player' ? 'ai' : 'player'
  }
}


const setMarks = (state: InitialStateType, mark: TicTacToeMarkerType): InitialStateType => {
  return {
    ...state,
    playerMark: mark,
    AIMark: mark === 'X' ? '0' : 'X',
  }
}

const switchFirstStepToAI = (state: InitialStateType): InitialStateType => {
  return {
    ...state,
    step: 'ai'
  }
}

const lockBoard = (state: InitialStateType): InitialStateType => {
  return {
    ...state,
    isBoardLocked: true
  }
}

const makeMovePlayer = (state: InitialStateType, cardId: number): InitialStateType => {
  const cells = putMarkPlayer(state, cardId);

  return {
    ...state,
    cells,
    isBoardLocked: true
  }
}

const putMarkPlayer = (state: InitialStateType, cellId: number): TicTacToeCellType[] => {
  return (
    state.cells.map(({ id, marker }) => ({
      id,
      marker: id === cellId ? state.playerMark : marker
    }))
  )
}

const makeMoveAI = (state: InitialStateType): InitialStateType => {
  const cells = putMarkAI(state);

  return {
    ...state,
    cells,
    isBoardLocked: true
  }
}

const putMarkAI = (state: InitialStateType): TicTacToeCellType[] => {
  const { cells } = state
  let cellsWithUpdatedAIMark = {} as TicTacToeCellType[];
  let isMarkSet = false;

  const checkWhereToPutAIMark = (
    matrixRowIndex: number,
    firstCell: number,
    secondCell: number,
    emptyCell: number,
    mark: TicTacToeMarkerType
  ): boolean => {
    return cells[state.possibleMoves[matrixRowIndex][firstCell]].marker === mark
      && cells[state.possibleMoves[matrixRowIndex][secondCell]].marker === mark
      && !cells[state.possibleMoves[matrixRowIndex][emptyCell]].marker
  }

  const setMarkAI = (matrixRowIndex: number, emptyCell: number): TicTacToeCellType[] => {
    isMarkSet = true
    return cells.map(({ id, marker }, i) => {
      return {
        id,
        marker: i === state.possibleMoves[matrixRowIndex][emptyCell] ? state.AIMark : marker
      }
    })
  }

  const checkPossibleAIMovesAndSetMark = (mark: TicTacToeMarkerType) => {
    for (let i = 0; i < state.possibleMoves.length; i++) {
      if (checkWhereToPutAIMark(i, 0, 1, 2, mark)) {
        cellsWithUpdatedAIMark = setMarkAI(i, 2)
        break;
      }
      else if (checkWhereToPutAIMark(i, 1, 2, 0, mark)) {
        cellsWithUpdatedAIMark = setMarkAI(i, 0)
        break;
      }
      else if (checkWhereToPutAIMark(i, 0, 2, 1, mark)) {
        cellsWithUpdatedAIMark = setMarkAI(i, 1)
        break;
      }
    }
  }

  // This function checks two cells (one by one) and if these cells have an AI`s mark (one by one), it sets the AI`s mark in the third cell in order to win.
  checkPossibleAIMovesAndSetMark(state.AIMark)

  // If mark doesn`t set, it runs 'checkPossibleAIMovesAndSetMark' function again with the 'playerMark' value. But this time the function checks whether two cells (one by one) have a player`s mark. And if this function returns true, it puts an AI`s mark in the third cell in order to not let the player win.
  if (!isMarkSet) checkPossibleAIMovesAndSetMark(state.playerMark)

  // If the mark still doesn`t set, it runs the function that puts an AI`s mark in a random cell.
  if (!isMarkSet) cellsWithUpdatedAIMark = putMarkInRandomCell(cells, state.AIMark)

  return cellsWithUpdatedAIMark
}

function putMarkInRandomCell(
  cells: TicTacToeCellType[], 
  AIMark: TicTacToeMarkerType
): TicTacToeCellType[] {
  const getRandomCell = Math.floor(Math.random() * cells.length)

  if (cells[getRandomCell].marker) return putMarkInRandomCell(cells, AIMark)
  else return cells.map(({ marker, ...rest }, index) => ({
    ...rest,
    marker: index === getRandomCell ? AIMark : marker
  }))
}

const restartGame = (state: InitialStateType): InitialStateType => {
  return {
    ...state,
    cells: state.cells.map(({ marker, ...rest }) => ({
      ...rest,
      marker: null
    })),
    step: 'player',
    isBoardLocked: false,
    winner: null,
  }
}

export const ticTacToeReducer = (
  state: InitialStateType = initialState, 
  action: ActionCreatorsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_MARKS:
      return setMarks(state, action.mark)
    case SWITCH_FIRST_STEP_TO_AI:
      return switchFirstStepToAI(state)
    case LOCK_BOARD:
      return lockBoard(state)
    case MAKE_MOVE_PLAYER:
      return makeMovePlayer(state, action.id)
    case MAKE_MOVE_AI:
      return makeMoveAI(state)
    case CHECK_WINNER:
      return checkWinner(state)
    case RESTART_GAME:
      return restartGame(state)
    default:
      return state
  }
}