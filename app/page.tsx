import { Card, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { getAllCharacters } from './lib/data'
import { Character } from './types'

export default async function Home() {
  const { data: characters } = await getAllCharacters()

  return (
    <main>
      <div style={{ position: 'fixed', bottom: 0, right: 0 }}>
        <Link href="/my-team">My Team</Link>
      </div>
      <Grid container spacing={3}>
        {characters.map(character => (
          <Grid item sm key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <Link href={`/${character.id}`}>
      <Card>
        <Image
          src={character.image}
          alt={`Image of ${character.name}`}
          width={200}
          height={300}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <div>{character.name}</div>
      </Card>
    </Link>
  )
}
