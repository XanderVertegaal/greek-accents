import { createReducer, on } from '@ngrx/store';
import { setSelectedIndexWord } from '../home/actions/home.actions';
import { setAccentedText} from '../services/actions/corpus.actions';

export interface dataState {
  accentedText: string[];
  selectedIndexWord: [number, string] | null;
  seen: number[];
}

const initialDataState: dataState = {
  accentedText: [],
  selectedIndexWord: null,
  seen: []
};

export const dataReducer = createReducer(
  initialDataState,
  on(setAccentedText, (state, action) => {
    return {
      ...state,
      accentedText: action.text
    }
  }),
  on(setSelectedIndexWord, (state, action) => {
    return {
      ...state,
      selectedIndexWord: action.indexWord,
    };
  })
);
