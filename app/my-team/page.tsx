'use client'

import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { removeCharacterFromMyTeam } from '../lib/redux/myTeam/myTeamSlice'
import { RootState } from '../lib/redux/store'

export default function MyTeam() {
  const myTeamCharacters = useSelector(
    (state: RootState) => state.myTeam.characters,
  )

  const dispatch = useDispatch()

  const handleRemoveFromMyTeamClick = (id: number) =>
    dispatch(removeCharacterFromMyTeam(id))

  return (
    <>
      <h1>My Team</h1>
      {myTeamCharacters.map(character => (
        <div key={character.id}>
          {character.name}
          <Button onClick={() => handleRemoveFromMyTeamClick(character.id)}>
            Remove from my team
          </Button>
        </div>
      ))}
    </>
  )
}
