import Image from '@/app/components/Image/Image'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { getAllCharacters } from './lib/data'
import styles from './page.module.css'
import { Character } from './types'

export default async function Home() {
  const { data: characters } = await getAllCharacters()

  return (
    <section className={styles.grid}>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  )
}

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div>
      <Link href={`/${character.id}`}>
        <Card>
          <CardHeader title={character.name} subheader={character.species} />
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
                maxHeight: 300,
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography color="text.secondary">
              {character.homeworld} · {character.gender}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn more</Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  )
}
