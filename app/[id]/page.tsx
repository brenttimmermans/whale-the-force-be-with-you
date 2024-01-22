import { getCharacter } from '@/app/lib/data'
import Link from 'next/link'

interface Props {
  params: { id: number }
}

export default async function DetailPage({ params }: Props) {
  const { id } = params
  const character = await getCharacter(id)

  return (
    <main>
      <Link href="/">Back home</Link>
      <h1>{character.name}</h1>
    </main>
  )
}
