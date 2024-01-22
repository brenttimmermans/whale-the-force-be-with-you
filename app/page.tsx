import { Card, Grid } from '@mui/material'
import Image from 'next/image'
import { getAllCharacters } from './lib/data'
import { Character } from './types'

export default async function Home() {
  const characters = await getAllCharacters()

  return (
    <main>
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
    <Card>
      <Image
        src={character.image}
        alt={`Image of ${character.name}`}
        width={200}
        height={300}
        style={{ objectFit: 'cover' }}
      />
      <div>{character.name}</div>
    </Card>
  )
}
