'use client';

import Image from '@/app/components/Image/Image';
import config from '@/app/config';
import { ensureArray } from '@/app/lib/ensureArray';
import { isEvil } from '@/app/lib/isEvil';
import {
  addCharacterToMyTeam,
  removeCharacterFromMyTeam,
} from '@/app/lib/redux/myTeam/myTeamSlice';
import { isAlreadyInTeamSelector } from '@/app/lib/redux/myTeam/selectors';
import { RootState } from '@/app/lib/redux/store';
import { Character } from '@/app/types';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  character: Character;
  previous: number | null;
  next: number | null;
}

export default function DetailPage({ character, previous, next }: Props) {
  const dispatch = useDispatch();
  const currentMyTeamCharacters = useSelector(
    (state: RootState) => state.myTeam.characters,
  );
  const isAlreadyInTeam = useSelector((state: RootState) =>
    isAlreadyInTeamSelector(state, character.id),
  );

  const handleAddToMyTeamClick = () =>
    dispatch(addCharacterToMyTeam(character));
  const handleRemoveFromMyTeamClick = () =>
    dispatch(removeCharacterFromMyTeam(character.id));

  const hasPreviousLink = Boolean(previous);
  const hasNextLink = Boolean(next);

  const masters = ensureArray(character.masters);

  const isEvilCharacter = isEvil(character);
  const hasMaxCharactersInTeam =
    currentMyTeamCharacters.length === config.maxCharactersInTeam;

  const cantAddToTeam = isEvilCharacter || hasMaxCharactersInTeam;

  return (
    <Card
      sx={{
        padding: '20px 25px',
        color: 'var(--color-text-primary)',
        backgroundColor: 'var(--color-background-card)',
      }}
    >
      <Grid container spacing={1} mb={2}>
        <Grid item xs={12} sm={2}>
          <Link
            href={`/${previous}`}
            className={hasPreviousLink ? '' : 'disabled'}
            aria-disabled={hasPreviousLink}
            tabIndex={hasPreviousLink ? -1 : undefined}
          >
            <Typography>&lt; Previous</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={8} sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '1.8rem' }}>
            {character.name}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2} sx={{ textAlign: 'right' }}>
          <Link
            href={`/${next}`}
            className={hasNextLink ? '' : 'disabled'}
            aria-disabled={hasNextLink}
            tabIndex={hasNextLink ? -1 : undefined}
          >
            <Typography>Next &gt;</Typography>
          </Link>
        </Grid>
      </Grid>

      <Container sx={{ maxWidth: 600 }}>
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid item xs={12} sm={6}>
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={400}
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack sx={{ justifyContent: 'space-between' }}>
              <Box mb={1}>
                <Typography variant="h3" sx={{ fontSize: '1.4rem' }}>
                  Info
                </Typography>
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
                {masters.length !== 0 && (
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
                    disabled={cantAddToTeam}
                    onClick={handleAddToMyTeamClick}
                  >
                    Add to my team
                  </Button>
                )}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
