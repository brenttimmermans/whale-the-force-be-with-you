'use client'

import Image from '@/app/components/Image/Image'
import config from '@/app/config'
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

  const currentNumberOfCharacters = myTeamCharacters.length
  const missingCharacters =
    config.maxCharactersInTeam - currentNumberOfCharacters

  return (
    <>
      <section className={styles.grid}>
        {myTeamCharacters.map(character => (
          <Card
            key={character.id}
            sx={{
              color: 'white',
              backgroundColor: 'hsla(0deg, 0%, 15%, 0.8)',
            }}
          >
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
            <CardActions sx={{ justifyContent: 'center' }}>
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
          <Card
            key={index}
            sx={{
              color: 'white',
              backgroundColor: 'hsla(0deg, 0%, 15%, 0.8)',
            }}
          >
            <CardHeader
              title={`Character #${currentNumberOfCharacters + index + 1}`}
            />
            <CardContent>
              <Link href="/" passHref>
                <Button variant="contained">Add character</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  )
}
