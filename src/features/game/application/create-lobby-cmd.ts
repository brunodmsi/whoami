import { GameRepository } from '../domain/game-repository'
import { Observable } from 'rxjs'
import { Id } from '../../../core/id'
import { Command } from '../../../core/use-case/command'

export class CreateLobbyCmd extends Command<void, Id> {
  constructor(private readonly gameRepository: GameRepository) {
    super()
  }

  internalExecute(): Observable<Id> {
    return this.gameRepository.create()
  }
}
