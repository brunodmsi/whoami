import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Game } from './game'
import { Lobby } from './lobby'
import { Container } from '../../../container'
import { dependencyTree } from '../../../dependency-tree'

export const App: React.FC = () => {
  return (
    <Container.Provider value={dependencyTree}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Lobby />
          </Route>
          <Route path="/games/:id">
            <Game />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container.Provider>
  )
}
