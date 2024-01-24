import { RootState } from '@/app/lib/redux/store';

export const isAlreadyInTeamSelector = (state: RootState, id: number) => {
  return state.myTeam.characters.some(character => character.id === id);
};
