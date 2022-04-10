import { createAction, props } from '@ngrx/store';

export const setAccentedText = createAction(
  '[Corpus] Set accented text',
  props<{ text: string[] }>()
);

export const setSelectedAuthor = createAction(
  '[Corpus] Set selected author',
  props<{ author: string; }>()
);

export const setSelectedWork = createAction(
  '[Corpus] Set selected work',
  props<{ work: string; }>()
);

export const setSelectedPassage = createAction(
  '[Corpus] Set selected passage',
  props<{ passage: string; }>()
);