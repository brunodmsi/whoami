import { Player } from '../../../core/player'
import { Observable } from 'rxjs'
import { GameRepository } from '../domain/game-repository'
import { Id } from '../../../core/id'
import { map } from 'rxjs/operators'
import { Query } from "../../../core/use-case/query";

type Params = { id: Id }

export class GetPlayersQry extends Query<Player[], Params> {
  constructor(private readonly gameRepository: GameRepository) {
    super()
  }

  internalExecute({ id }: Params): Observable<Player[]> {
    return this.gameRepository.find(id).pipe(map(x => x?.players ?? []))
  }
}
