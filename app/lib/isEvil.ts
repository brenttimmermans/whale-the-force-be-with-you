import { ensureArray } from '@/app/lib/ensureArray'
import { Character } from '@/app/types'

export function isEvil(
  character: Pick<Character, 'name' | 'affiliations' | 'masters'>,
) {
  const nameIsEvil =
    character.name.includes('Darth') || character.name.includes('Sith')
  const affiliationAreEvil = character.affiliations.some(
    affiliation =>
      affiliation.includes('Sith') || affiliation.includes('Darth'),
  )

  const masters = ensureArray(character.masters ?? [])
  const masterAreEvil = masters.some(master => master.includes('Darth'))

  return nameIsEvil || affiliationAreEvil || masterAreEvil
}
