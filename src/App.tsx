import React, { FC, useState } from 'react'
import './App.css'
import Intro from './components/intro'
import SwitchGame from './components/switchGame'
import MemoryGame from './components/memoryGame'
import TicTacToeGame from './components/ticTacToe'
import DurakGame from './components/durakGame'
import NotFound from './components/notFound'
import { Route, Switch, useLocation } from 'react-router-dom'

const App: FC = () => {
  const location = useLocation()
  const [isGamesSwitcherOpen, setIsGamesSwitcherOpen] = useState<boolean>(false)

  const combineComponent = (Component: React.FC) => {
    return (
      <>
        <Component />
        <SwitchGame
          isGamesSwitcherOpen={isGamesSwitcherOpen}
          setIsGamesSwitcherOpen={setIsGamesSwitcherOpen}
        />
      </>
    )
  }

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path='/' component={Intro} />
      <Route exact path='/memoryGame' render={() => combineComponent(MemoryGame)} />
      <Route exact path='/ticTacToeGame' render={() => combineComponent(TicTacToeGame)} />
      <Route exact path='/durakGame' render={() => combineComponent(DurakGame)} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
