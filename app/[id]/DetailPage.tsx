'use client'

import { RootState } from '@/app/lib/redux/store'
import { Character } from '@/app/types'
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import Image from '../components/Image/Image'
import config from '../config'
import {
  addCharacterToMyTeam,
  removeCharacterFromMyTeam,
} from '../lib/redux/myTeam/myTeamSlice'
import { isAlreadyInTeamSelector } from '../lib/redux/myTeam/selectors'

interface Props {
  character: Character
  previous: number | null
  next: number | null
}

export default function DetailPage({ character, previous, next }: Props) {
  const dispatch = useDispatch()
  const currentMyTeamCharacters = useSelector(
    (state: RootState) => state.myTeam.characters,
  )
  const isAlreadyInTeam = useSelector((state: RootState) =>
    isAlreadyInTeamSelector(state, character.id),
  )

  const masters = [].concat(character.masters ?? [])

  const nameIsEvil =
    character.name.includes('Darth') || character.name.includes('Sith')
  const affiliationAreEvil = character.affiliations.some(
    affiliation =>
      affiliation.includes('Sith') || affiliation.includes('Darth'),
  )
  const masterAreEvil = masters.some(master => master.includes('Darth'))
  const cantAddToTeam = nameIsEvil || affiliationAreEvil || masterAreEvil

  const hasMaxCharactersInTeam =
    currentMyTeamCharacters.length === config.maxCharactersInTeam

  const handleAddToMyTeamClick = () => dispatch(addCharacterToMyTeam(character))
  const handleRemoveFromMyTeamClick = () =>
    dispatch(removeCharacterFromMyTeam(character.id))

  const hasPreviousLink = Boolean(previous)
  const hasNextLink = Boolean(next)

  return (
    <Card
      sx={{
        padding: '20px 25px',
        color: 'white',
        backgroundColor: 'hsla(0deg, 0%, 15%, 0.8)',
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 2,
        }}
      >
        <Link
          href={`/${previous}`}
          className={hasPreviousLink ? '' : 'disabled'}
          aria-disabled={hasPreviousLink}
          tabIndex={hasPreviousLink ? -1 : undefined}
        >
          <Typography>&lt; Previous</Typography>
        </Link>

        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          {character.name}
        </Typography>

        <Link
          href={`/${next}`}
          className={hasNextLink ? '' : 'disabled'}
          aria-disabled={hasNextLink}
          tabIndex={hasNextLink ? -1 : undefined}
        >
          <Typography>Next &gt;</Typography>
        </Link>
      </Stack>

      <Container sx={{ maxWidth: 600 }}>
        <Stack direction="row" spacing={3}>
          <Image
            src={character.image}
            alt={character.name}
            width={200}
            height={400}
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h3">Info</Typography>
              <Typography>
                <strong>Species:</strong> {character.species}
              </Typography>
              <Typography>
                <strong>Height:</strong> {character.height}m
              </Typography>
              <Typography>
                <strong>Mass:</strong> {character.mass}kg
              </Typography>
              <Typography>
                <strong>Affiliations:</strong>{' '}
                {character.affiliations.join(', ')}
              </Typography>
              {masters && (
                <Typography>
                  <strong>Masters:</strong> {masters.join(', ')}
                </Typography>
              )}
            </Box>
            <Box>
              {isAlreadyInTeam ? (
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleRemoveFromMyTeamClick}
                >
                  Remove from my team
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disabled={cantAddToTeam || hasMaxCharactersInTeam}
                  onClick={handleAddToMyTeamClick}
                >
                  Add to my team
                </Button>
              )}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Card>
  )
}
