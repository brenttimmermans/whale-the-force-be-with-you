import { Character } from '@/app/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type MyTeamCharacter = Pick<Character, 'id' | 'name' | 'image'>;

interface MyTeamState {
  characters: MyTeamCharacter[];
}

const initialState: MyTeamState = {
  characters: [],
};

const myTeamSlick = createSlice({
  name: 'my-team',
  initialState,
  reducers: {
    addCharacterToMyTeam: (state, action: PayloadAction<MyTeamCharacter>) => {
      state.characters.push(action.payload);
    },
    removeCharacterFromMyTeam: (state, action: PayloadAction<number>) => {
      state.characters = state.characters.filter(
        character => character.id !== action.payload,
      );
    },
  },
});

export const { addCharacterToMyTeam, removeCharacterFromMyTeam } =
  myTeamSlick.actions;
export default myTeamSlick.reducer;
