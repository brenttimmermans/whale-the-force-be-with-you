import { Character } from '@/app/types';
import myTeamReducer, {
  addCharacterToMyTeam,
  removeCharacterFromMyTeam,
} from './myTeamSlice';

describe(myTeamReducer, () => {
  it('should return the initial state', () => {
    expect(myTeamReducer(undefined, {} as any)).toEqual({
      characters: [],
    });
  });

  it('should add a character to the team', () => {
    const character = _createCharacter();

    expect(myTeamReducer(undefined, addCharacterToMyTeam(character))).toEqual({
      characters: [character],
    });
  });

  it('should remove a character from the team', () => {
    const character = _createCharacter();
    const previousState = {
      characters: [character],
    };

    expect(
      myTeamReducer(previousState, removeCharacterFromMyTeam(character.id)),
    ).toEqual({
      characters: [],
    });
  });
});

function _createCharacter(
  options: Partial<Character> = {},
): Pick<Character, 'id' | 'name' | 'image'> {
  return {
    id: 1,
    name: 'Luke Skywalker',
    image: 'https://foo.bar',
    ...options,
  };
}
