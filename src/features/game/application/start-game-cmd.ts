import { Id } from '../../../core/id'
import { GameRepository } from '../domain/game-repository'
import { Observable } from 'rxjs'
import { Command } from '../../../core/use-case/command'

interface Params {
  id: Id
}

export class StartGameCmd extends Command<Params> {
  constructor(private readonly gameRepository: GameRepository) {
    super()
  }

  internalExecute({ id }: Params): Observable<void> {
    return this.gameRepository.start(id)
  }
}
