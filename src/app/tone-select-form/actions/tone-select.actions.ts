import { createAction, props } from "@ngrx/store";

export const setCorrectCounter = createAction(
  '[Tone selection form] Set correct counter',
  props<{ correctCounter: number }>()
);

export const setIncorrectCounter = createAction(
    '[Tone selection form] Set incorrect counter',
    props<{ incorrectCounter: number; }>()
);

export const setTotalCounter = createAction(
    '[Tone selection form] Set total counter',
    props<{ totalCounter: number; }>()
);

export const incrementCorrectCounter = createAction(
    '[Tone selection form] Increment correct counter'
);

export const incrementIncorrectCounter = createAction(
    '[Tone selection form] Increment incorrect counter'
);

export const incrementTotalCounter = createAction(
    '[Tone selection form] Increment total counter'
);