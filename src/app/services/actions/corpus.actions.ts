import { createAction, props } from '@ngrx/store';

export const setAccentedText = createAction(
  '[Corpus] Set accented text',
  props<{ text: string[] }>()
);
