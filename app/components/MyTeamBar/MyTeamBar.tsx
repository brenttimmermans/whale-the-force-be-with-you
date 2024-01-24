'use client';

import { RootState } from '@/app/lib/redux/store';
import styled from '@emotion/styled';
import {
  Avatar,
  AvatarGroup,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function MyTeamBar() {
  const myTeamCharacters = useSelector(
    (state: RootState) => state.myTeam.characters,
  );

  return (
    <BottomContainer>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Grid container columnSpacing={2}>
          <Grid item xs sx={{ alignItems: 'center' }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'center', minHeight: 55 }}
            >
              <Typography variant="h6">My Team:</Typography>
              <AvatarGroup>
                {myTeamCharacters.map(character => (
                  <Avatar
                    key={character.id}
                    alt={character.name}
                    src={character.image}
                    imgProps={{ sx: { objectPosition: 'top' } }}
                    sx={{ marginBottom: 1, backgroundColor: '#FFF' }}
                  />
                ))}
              </AvatarGroup>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Link href="/my-team" passHref>
              <Button variant="contained">Go to my Team</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </BottomContainer>
  );
}

const BottomContainer = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 70px;

  padding: 10px 20px;

  background-color: hsla(0deg, 0%, 15%, 0.8);
`;
