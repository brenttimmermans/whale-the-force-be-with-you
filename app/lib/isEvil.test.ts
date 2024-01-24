import { Character } from '@/app/types'
import { isEvil } from './isEvil'

describe(isEvil, () => {
  it('should return false if character is not evil', () => {
    const character = _createCharacter()

    expect(isEvil(character)).toBe(false)
  })

  it('should return true if character has "Darth" in name', () => {
    const character = _createCharacter({ name: 'Darth Vader' })

    expect(isEvil(character)).toBe(true)
  })

  it('should return true if character has "Sith" in name', () => {
    const character = _createCharacter({ name: 'Sith Skywalker' })

    expect(isEvil(character)).toBe(true)
  })

  it('should return true if character has an affiliation with "Sith"', () => {
    const character = _createCharacter({
      affiliations: ['Sith Anakin', 'Boba Fett'],
    })

    expect(isEvil(character)).toBe(true)
  })

  it('should return true if character has an affiliation with "Darth"', () => {
    const character = _createCharacter({
      affiliations: ['Darth Vader'],
    })

    expect(isEvil(character)).toBe(true)
  })

  it('should return true if character has a master with "Darth" - array', () => {
    const character = _createCharacter({
      masters: ['Darth Vader', 'Obi-Wan Kenobi'],
    })

    expect(isEvil(character)).toBe(true)
  })

  it('should return true if character has a master with "Darth" - string', () => {
    const character = _createCharacter({
      masters: 'Darth Vader',
    })

    expect(isEvil(character)).toBe(true)
  })
})

function _createCharacter(
  options: Partial<Character> = {},
): Pick<Character, 'name' | 'affiliations' | 'masters'> {
  return {
    name: 'Luke Skywalker',
    affiliations: [],
    masters: [],
    ...options,
  }
}
