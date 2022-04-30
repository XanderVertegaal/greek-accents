import { createAction, props } from '@ngrx/store';
import { TonePattern } from 'src/assets/types';

export const setSelectedIndexWord = createAction(
  '[Trainer] Set selected word',
  props<{ indexWord: [number, string] }>()
);

export const setCorrectTonePattern = createAction(
  '[Trainer] Set correct tone pattern',
  props<{ tonePattern: TonePattern }>()
);

export const setCorrectCounter = createAction(
  '[Trainer] Set correct counter',
  props<{ correctCounter: number }>()
);

export const setIncorrectCounter = createAction(
    '[Trainer] Set incorrect counter',
    props<{ incorrectCounter: number; }>()
);

export const setTotalCounter = createAction(
    '[Trainer] Set total counter',
    props<{ totalCounter: number; }>()
);

export const incrementCorrectCounter = createAction(
    '[Trainer] Increment correct counter'
);

export const incrementIncorrectCounter = createAction(
    '[Trainer] Increment incorrect counter'
);

export const incrementTotalCounter = createAction(
    '[Trainer] Increment total counter'
);