import { Observable } from 'rxjs'
import { GameRepository } from '../domain/game-repository'
import { Id } from '../../../core/id'
import { map } from 'rxjs/operators'
import { Query } from '../../../core/use-case/query'

type Params = { id: Id }

export class HasGameStartedQry extends Query<boolean, Params> {
  constructor(private readonly gameRepository: GameRepository) {
    super()
  }

  internalExecute({ id }: Params): Observable<boolean> {
    return this.gameRepository.find(id).pipe(map(x => x?.start !== undefined ?? false))
  }
}
