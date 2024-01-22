import { getCharacter } from '@/app/lib/data'

interface Props {
  params: { id: number }
}

export default async function DetailPage({ params }: Props) {
  const { id } = params
  const character = await getCharacter(id)

  return (
    <main>
      <h1>{character.name}</h1>
    </main>
  )
}
