'use client'

import { RootState } from '@/app/lib/redux/store'
import { Character } from '@/app/types'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addCharacterToMyTeam } from '../lib/redux/myTeam/myTeamSlice'

interface Props {
  character: Character
  previous?: number
  next?: number
}

export default function DetailPage({ character, previous, next }: Props) {
  const dispatch = useDispatch()
  const team = useSelector((state: RootState) => state.myTeam)

  const handleAddToMyTeamClick = () => dispatch(addCharacterToMyTeam(character))

  return (
    <main>
      <Link href="/">Back home</Link>
      {previous && <Link href={`/${previous}`}>Previous</Link>}
      {next && <Link href={`/${next}`}>Next</Link>}
      <h1>{character.name}</h1>
      <Button onClick={handleAddToMyTeamClick}>Add to my team</Button>
      <div>{JSON.stringify(team)}</div>
    </main>
  )
}
