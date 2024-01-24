import { Character } from '@/app/types';

const CHARACTER_API_URL = 'https://akabab.github.io/starwars-api/api/';

interface CharactersResponse {
  data: Character[];
}

export async function getAllCharacters(): Promise<CharactersResponse> {
  const url = new URL('all.json', CHARACTER_API_URL).toString();
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return { data };
}

interface CharacterResponse {
  data: Character;
  previous: number | null;
  next: number | null;
}

export async function getCharacter(id: number): Promise<CharacterResponse> {
  const url = new URL(`id/${id}.json`, CHARACTER_API_URL).toString();
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const previous: number | null = id === 1 ? null : id - 1;

  const nextResponse = await fetch(
    new URL(`id/${id + 1}.json`, CHARACTER_API_URL).toString(),
    {
      method: 'HEAD',
    },
  );
  const next = nextResponse.ok ? id + 1 : null;

  const data = await res.json();

  return { data, previous, next };
}
