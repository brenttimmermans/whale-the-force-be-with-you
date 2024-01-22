'use client'

import styled from '@emotion/styled'
import { Avatar, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../../lib/redux/store'

export default function MyTeamBar() {
  const myTeamCharacters = useSelector(
    (state: RootState) => state.myTeam.characters,
  )

  return (
    <BottomContainer>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Typography variant="h6">My Team:</Typography>
        {myTeamCharacters.map(character => (
          <Link key={character.id} href={`/${character.id}`}>
            <Stack alignItems="center">
              <Avatar
                alt={character.name}
                src={character.image}
                imgProps={{ sx: { objectPosition: 'top' } }}
                sx={{ marginBottom: 1 }}
              />
              <Typography>{character.name}</Typography>
            </Stack>
          </Link>
        ))}
      </Stack>
      <Link href="/my-team" passHref>
        <Button variant="contained">Go to my Team</Button>
      </Link>
    </BottomContainer>
  )
}

const BottomContainer = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 10px 20px;

  background-color: hsla(0deg, 0%, 15%, 0.8);

  display: flex;
  justify-content: space-between;
  align-items: center;
`
