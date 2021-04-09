import { GameRepository } from '../domain/game-repository'
import { Id } from '../../../core/id'
import { from, Observable, of } from 'rxjs'
import { Player } from '../../../core/player'
import { RxFire } from './rx-fire'
import { first, switchMap } from 'rxjs/operators'
import { Game } from '../../../core/game'

export class GameFirestoreRepository implements GameRepository {
  constructor(private readonly firebase: firebase.app.App, private readonly rxFire: RxFire) {}

  private gamesRef = this.firebase.firestore().collection('games')

  join(id: Id, player: Player): Observable<void> {
    return this.rxFire.fromDocRef(this.gamesRef.doc(id)).pipe(
      first(),
      switchMap(document => {
        const data = document.data()
        document.ref.set({ players: [...(data?.players ?? []), player] }, { merge: true })
        return of(undefined)
      })
    )
  }

  start(id: Id): Observable<void> {
    return this.rxFire.fromDocRef(this.gamesRef.doc(id)).pipe(
      first(),
      switchMap(document => from(document.ref.set({ start: new Date() }, { merge: true })))
    )
  }

  find(id: string): Observable<Game | undefined> {
    return this.rxFire.fromDocRef(this.gamesRef.doc(id)).pipe(switchMap(x => of(x.data() as Game)))
  }

  create(): Observable<Id> {
    return this.rxFire.fromDocRef(this.gamesRef.doc()).pipe(
      first(),
      switchMap(document => {
        return of(document.id)
      })
    )
  }
}
