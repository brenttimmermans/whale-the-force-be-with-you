import Image from '@/app/components/Image/Image'
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material'
import { grey, yellow } from '@mui/material/colors'
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
  const homeworld = [].concat(character.homeworld ?? 'Unknown').join(' & ')
  const gender = character.gender.toUpperCase()

  return (
    <div>
      <Link href={`/${character.id}`}>
        <Card
          sx={{
            color: 'white',
            backgroundColor: 'hsla(0deg, 0%, 15%, 0.8)',
          }}
        >
          <CardHeader
            title={character.name}
            subheader={character.species}
            subheaderTypographyProps={{ color: yellow[200] }}
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
                maxHeight: 300,
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography color="text.secondary" sx={{ color: grey[300] }}>
              {homeworld.toUpperCase()} · {gender}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
