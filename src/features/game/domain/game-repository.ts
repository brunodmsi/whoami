import { Id } from '../../../core/id'
import { Observable } from 'rxjs'
import { Player } from '../../../core/player'
import { Game } from '../../../core/game'

export interface GameRepository {
  join(id: Id, player: Player): Observable<void>
  find(id: Id): Observable<Game | undefined>
  start(id: Id): Observable<void>
  create(): Observable<Id>
}
