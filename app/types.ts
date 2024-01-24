type Gender = 'male' | 'female';
type Species = string;

export interface Character {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: Gender;
  homeworld?: string | string[];
  image: string;
  born: number;
  died: number;
  species: Species;
  affiliations: string[];
  masters: string | string[];
}
