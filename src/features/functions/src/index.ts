import * as functions from 'firebase-functions'
import { Assigner } from './assigner'
import { Game } from '../../../core/game'

export const onGameStart = functions.firestore.document('games/{gameId}').onUpdate(change => {
  const data = change.after.data() as Game | undefined
  const previousData = change.before.data() as Game | undefined

  if (
    data?.start === undefined ||
    previousData?.start !== undefined ||
    (data?.players?.length ?? 0) < 2
  ) {
    return null
  }

  const assigner = new Assigner({
    provide(): number {
      return Math.random()
    }
  })

  return change.after.ref.set(
    {
      assignees: assigner.assign(data.players)
    },
    { merge: true }
  )
})
