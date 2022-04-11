import { createReducer, on } from '@ngrx/store';
import { TonePattern } from 'src/assets/models/types';
import { setCorrectTonePattern, setSelectedIndexWord } from '../trainer/actions/trainer.actions';
import { setAccentedText, setSelectedAuthor, setSelectedPassage, setSelectedWork} from '../services/actions/corpus.actions';

export interface DataState {
  accentedText: string[];
  selectedIndexWord: [number, string] | null;
  seen: number[];
  correctTonePattern: TonePattern | null;
  selectedAuthor: string;
  selectedWork: string;
  selectedPassage: string;
}

const initialDataState: DataState = {
  accentedText: [],
  selectedIndexWord: null,
  seen: [],
  correctTonePattern: null,
  selectedAuthor: '',
  selectedWork: '',
  selectedPassage: ''
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
  }),
  on(setCorrectTonePattern, (state, action) => {
    return {
      ...state,
      correctTonePattern: action.tonePattern,
    };
  }),
  on(setSelectedAuthor, (state, action) => {
    return {
      ...state,
      selectedAuthor: action.author,
    };
  }),
  on(setSelectedWork, (state, action) => {
    return {
      ...state,
      selectedWork: action.work,
    };
  }),
  on(setSelectedPassage, (state, action) => {
    return {
      ...state,
      selectedPassage: action.passage,
    };
  })
);
