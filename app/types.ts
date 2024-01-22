type Gender = 'male' | 'female'
type Species = string

export interface Character {
  id: number
  name: string
  height: number
  mass: number
  gender: Gender
  homeworld: string
  // wiki: 'http://starwars.wikia.com/wiki/Luke_Skywalker'
  image: string
  born: number
  died: number
  species: Species
  affiliations: string[]
  masters: string[]
}
