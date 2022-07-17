import { createAction, props } from '@ngrx/store';
import { Article, NominalForm, NominalTarget } from 'src/assets/types';

export const answerIsCorrect = createAction(
  '[Article exercise] Answer is correct',
);

export const answerIsIncorrect = createAction(
  '[Article exercise] Answer is incorrect',
);

export const answerReset = createAction(
  '[Article exercise] Answer reset',
);

export const setSelectedArticle = createAction(
  '[Article exercise] Set selected article',
  props<{ article: Article }>()
);

export const setSelectedNominalForm = createAction(
  '[Article exercise] Set selected nominal form',
  props<{
    nominalForm: NominalForm;
    nominalTarget: NominalTarget;
  }>()
);
