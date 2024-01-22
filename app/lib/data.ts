import { Character } from '@/app/types'

const CHARACTER_API_URL = 'https://akabab.github.io/starwars-api/api/'

export async function getAllCharacters(): Promise<Character[]> {
  const url = new URL('all.json', CHARACTER_API_URL).toString()
  const res = await fetch(url)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
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
