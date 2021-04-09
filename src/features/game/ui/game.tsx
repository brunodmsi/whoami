import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Container } from '../../../container'
import { tap } from 'rxjs/operators'
import { Page } from '../../../core/components/page'
import { LobbyState } from './lobby-state'

export const Game: React.FC = () => {
  const {
    state: { playerName }
  } = useLocation<LobbyState>()
  const { id } = useParams()
  const { getPlayerAssigneesQry } = useContext(Container)
  const [players, setPlayers] = useState<Record<string, string>>({})

  useEffect(() => {
    const subscription = getPlayerAssigneesQry
      .execute({ id: id!, name: playerName })
      .pipe(
        tap(x => {
          setPlayers(x)
        })
      )
      .subscribe()

    return () => subscription.unsubscribe()
  }, [id, playerName, getPlayerAssigneesQry])

  return (
    <Page>
      <h2>Jogando!</h2>
      {Object.entries(players).map(([player, celebrity]) => (
        <p key={player}>
          {player} → {celebrity}
        </p>
      ))}
    </Page>
  )
}
