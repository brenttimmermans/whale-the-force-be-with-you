'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../../lib/redux/store'

export default function MyTeamBar() {
  const myTeamCharacters = useSelector(
    (state: RootState) => state.myTeam.characters,
  )

  return (
    <BottomContainer>
      <div>
        {myTeamCharacters.map(character => (
          <div key={character.id}>{character.name}</div>
        ))}
      </div>
      <Link href="/my-team">My Team</Link>
    </BottomContainer>
  )
}

const BottomContainer = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`
