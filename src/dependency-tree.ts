import { Dependencies } from './dependencies'
import { GameFirestoreRepository } from './features/game/infrastructure/game-firestore-repository'
import * as rxFire from 'rxfire/firestore'
import { app } from './features/game/infrastructure/firestore'
import { JoinLobbyCmd } from './features/game/application/join-lobby-cmd'
import { GetPlayersQry } from './features/game/application/get-players-qry'
import { GetPlayerAssigneesQry } from './features/game/application/get-player-assignees-qry'
import { StartGameCmd } from './features/game/application/start-game-cmd'
import { HasGameStartedQry } from './features/game/application/has-game-started-qry'
import { CreateLobbyCmd } from './features/game/application/create-lobby-cmd'
import { Runner } from './core/use-case/runner'
import { ExecutorLink } from './core/use-case/links/executor-link'
import { LoggerLink } from './core/use-case/links/logger-link'
import { ConsoleLogger } from './core/logger/console-logger'
import { CacheLink } from './core/use-case/links/cache-link'

const gameFirestoreRepository = new GameFirestoreRepository(app, rxFire)

export const dependencyTree: Dependencies = {
  joinLobbyCmd: new JoinLobbyCmd(gameFirestoreRepository),
  getPlayersQry: new GetPlayersQry(gameFirestoreRepository),
  getPlayerAssigneesQry: new GetPlayerAssigneesQry(gameFirestoreRepository),
  startGameCmd: new StartGameCmd(gameFirestoreRepository),
  hasGameStartedQry: new HasGameStartedQry(gameFirestoreRepository),
  createLobbyCmd: new CreateLobbyCmd(gameFirestoreRepository),
  runner: new Runner(new ExecutorLink(), new LoggerLink(new ConsoleLogger(window)), new CacheLink())
}
