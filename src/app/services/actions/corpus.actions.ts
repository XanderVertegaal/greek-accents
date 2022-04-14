import { createAction, props } from '@ngrx/store';
import { Text } from 'src/assets/types';

export const setSelectedText = createAction(
  '[Corpus] Set selected text',
  props<{ text: Text }>()
);