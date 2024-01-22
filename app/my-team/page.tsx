'use client'

import Image from '@/app/components/Image/Image'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from '@mui/material'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { removeCharacterFromMyTeam } from '../lib/redux/myTeam/myTeamSlice'
import { RootState } from '../lib/redux/store'
import styles from './page.module.css'

export default function MyTeam() {
  const myTeamCharacters = useSelector(
    (state: RootState) => state.myTeam.characters,
  )

  const dispatch = useDispatch()

  const handleRemoveFromMyTeamClick = (id: number) =>
    dispatch(removeCharacterFromMyTeam(id))

  const missingCharacters = 5 - myTeamCharacters.length

  return (
    <>
      <section className={styles.grid}>
        {myTeamCharacters.map(character => (
          <Card key={character.id}>
            <CardHeader
              title={character.name}
              titleTypographyProps={{ noWrap: true }}
              sx={{
                '& .MuiCardHeader-content': {
                  overflow: 'hidden',
                },
              }}
            />
            <CardMedia title={character.name}>
              <Image
                src={character.image}
                alt={character.name}
                width={400}
                height={600}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  width: '100%',
                  maxHeight: 400,
                }}
              />
            </CardMedia>
            <CardActions>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleRemoveFromMyTeamClick(character.id)}
              >
                X
              </Button>
            </CardActions>
          </Card>
        ))}
        {Array.from({ length: missingCharacters }).map((_, index) => (
          <Card key={index}>
            <CardHeader title="Missing character" />
            <CardContent>
              <Link href="/" passHref>
                <Button>Add another character</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  )
}
