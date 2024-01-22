import { Character } from '@/app/types'

const CHARACTER_API_URL = 'https://akabab.github.io/starwars-api/api/'

interface CharactersResponse {
  data: Character[]
}

export async function getAllCharacters(): Promise<CharactersResponse> {
  const url = new URL('all.json', CHARACTER_API_URL).toString()
  const res = await fetch(url)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return { data }
}

  return res.json()
}

export async function getCharacter(id: number): Promise<Character> {
  const url = new URL(`id/${id}.json`, CHARACTER_API_URL).toString()
  const res = await fetch(url)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
