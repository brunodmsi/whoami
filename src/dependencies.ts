import { JoinLobbyCmd } from './features/game/application/join-lobby-cmd'
import { GetPlayersQry } from './features/game/application/get-players-qry'
import { GetPlayerAssigneesQry } from './features/game/application/get-player-assignees-qry'
import { StartGameCmd } from './features/game/application/start-game-cmd'
import { HasGameStartedQry } from './features/game/application/has-game-started-qry'
import { CreateLobbyCmd } from './features/game/application/create-lobby-cmd'
import { Runner } from "./core/use-case/runner";

export interface Dependencies {
  joinLobbyCmd: JoinLobbyCmd
  getPlayersQry: GetPlayersQry
  getPlayerAssigneesQry: GetPlayerAssigneesQry
  startGameCmd: StartGameCmd
  hasGameStartedQry: HasGameStartedQry
  createLobbyCmd: CreateLobbyCmd
  runner: Runner
}
