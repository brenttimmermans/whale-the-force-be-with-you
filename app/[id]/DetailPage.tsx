'use client'

import { RootState } from '@/app/lib/redux/store'
import { Character } from '@/app/types'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCharacterToMyTeam,
  removeCharacterFromMyTeam,
} from '../lib/redux/myTeam/myTeamSlice'
import { isAlreadyInTeamSelector } from '../lib/redux/myTeam/selectors'

interface Props {
  character: Character
  previous?: number
  next?: number
}

export default function DetailPage({ character, previous, next }: Props) {
  const dispatch = useDispatch()
  const isAlreadyInTeam = useSelector((state: RootState) =>
    isAlreadyInTeamSelector(state, character.id),
  )

  const handleAddToMyTeamClick = () => dispatch(addCharacterToMyTeam(character))
  const handleRemoveFromMyTeamClick = () =>
    dispatch(removeCharacterFromMyTeam(character.id))

  return (
    <>
      <Link href="/">Back home</Link>
      {previous && <Link href={`/${previous}`}>Previous</Link>}
      {next && <Link href={`/${next}`}>Next</Link>}
      <h1>{character.name}</h1>

      {isAlreadyInTeam ? (
        <Button variant="contained" onClick={handleRemoveFromMyTeamClick}>
          Remove from my team
        </Button>
      ) : (
        <Button variant="contained" onClick={handleAddToMyTeamClick}>
          Add to my team
        </Button>
      )}
    </>
  )
}
