import { Id } from '../../../core/id'
import { GameRepository } from '../domain/game-repository'
import { Observable } from 'rxjs'
import { Player } from '../../../core/player'
import { Command } from '../../../core/use-case/command'

interface Params {
  id: Id
  player: Player
}

export class JoinLobbyCmd extends Command<Params> {
  constructor(private readonly gameRepository: GameRepository) {
    super()
  }

  internalExecute({ id, player }: Params): Observable<void> {
    return this.gameRepository.join(id, player)
  }
}
