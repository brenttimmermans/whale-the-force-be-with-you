import { getCharacter } from '@/app/lib/data'
import Link from 'next/link'

interface Props {
  params: { id: string }
}

export default async function DetailPage({ params }: Props) {
  const id = parseInt(params.id, 10)
  const { data: character, previous, next } = await getCharacter(id)

  return (
    <main>
      <Link href="/">Back home</Link>
      {previous && <Link href={`/${previous}`}>Previous</Link>}
      {next && <Link href={`/${next}`}>Next</Link>}
      <h1>{character.name}</h1>
    </main>
  )
}
