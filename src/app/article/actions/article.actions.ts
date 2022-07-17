import { createAction, props } from '@ngrx/store';

export const setCorrectCounter = createAction(
  '[Article] Set correct counter',
  props<{ correctCounter: number }>()
);

export const setIncorrectCounter = createAction(
    '[Article] Set incorrect counter',
    props<{ incorrectCounter: number }>()
);

export const setTotalCounter = createAction(
    '[Article] Set total counter',
    props<{ totalCounter: number }>()
);

export const incrementCorrectCounter = createAction(
    '[Article] Increment correct counter'
);

export const incrementIncorrectCounter = createAction(
    '[Article] Increment incorrect counter'
);

export const incrementTotalCounter = createAction(
    '[Article] Increment total counter'
);

export const resetAllCounters = createAction(
    '[Article] Reset all counters'
);
