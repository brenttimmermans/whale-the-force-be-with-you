import { getCharacter } from '@/app/lib/data'
import DetailPage from './DetailPage'

interface Props {
  params: { id: string }
}

export default async function DetailPageContainer({ params }: Props) {
  const id = parseInt(params.id, 10)
  const { data: character, previous, next } = await getCharacter(id)

  return <DetailPage character={character} previous={previous} next={next} />
}
