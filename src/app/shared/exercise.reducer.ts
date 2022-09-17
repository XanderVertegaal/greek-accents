import { createReducer, on } from '@ngrx/store';
import { Article, NominalForm } from 'src/assets/types';
import * as ArticleExerciseActions from '../article/article-exercise/actions/article-exercise.actions';

type SelectedForm = Article | NominalForm | undefined;

export interface ExerciseState {
  selectedForm: SelectedForm;
  answerIsCorrect: boolean | undefined;
}

const initialExerciseState: ExerciseState = {
  selectedForm: undefined,
  answerIsCorrect: undefined
};

export const exerciseReducer = createReducer(
  initialExerciseState,
  on(ArticleExerciseActions.answerIsCorrect, state => ({
      ...state,
      answerIsCorrect: true
    })),
  on(ArticleExerciseActions.answerIsIncorrect, state => ({
      ...state,
      answerIsCorrect: false
    })),
  on(ArticleExerciseActions.answerReset, state => ({
      ...state,
      answerIsCorrect: undefined
    })),
  on(ArticleExerciseActions.setSelectedArticle, (state, action) => ({
      ...state,
      selectedForm: action.article
    })),
  on(ArticleExerciseActions.setSelectedNominalForm, (state, action) => ({
      ...state,
      selectedForm: action.nominalForm
    }))
);
