import { createReducer, on } from '@ngrx/store';
import { Text, TonePattern } from 'src/assets/types';
import * as TrainerActions from '../trainer/actions/trainer.actions';
import * as CorpusActions from '../services/actions/corpus.actions';
import * as TextListActions from '../text-list/actions/text-list.actions';

export interface DataState {
  selectedIndexWord: [number, string] | null;
  seen: number[];
  correctTonePattern: TonePattern | null;
  selectedText: Text | null;
}

const initialDataState: DataState = {
  selectedIndexWord: null,
  seen: [],
  correctTonePattern: null,
  selectedText: null
};

export const dataReducer = createReducer(
  initialDataState,
  on(CorpusActions.setSelectedText, TextListActions.setSelectedText, (state, action) => {
    return {
      ...state,
      selectedText: action.text
    }
  }),
  on(TrainerActions.setSelectedIndexWord, (state, action) => {
    return {
      ...state,
      selectedIndexWord: action.indexWord,
    };
  }),
  on(TrainerActions.setCorrectTonePattern, (state, action) => {
    return {
      ...state,
      correctTonePattern: action.tonePattern,
    };
  })
);
