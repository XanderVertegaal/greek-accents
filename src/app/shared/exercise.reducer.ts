import { createReducer, on } from '@ngrx/store';
import { Article, NominalForm } from 'src/assets/types';
import * as ArticleExerciseActions from '../article/article-exercise/actions/article-exercise.actions';

export interface ExerciseState {
  selectedArticle: Article | undefined;
  selectedNominalForm: NominalForm | undefined;
  answerStatus: boolean | undefined;
}

const initialExerciseState: ExerciseState = {
  selectedArticle: undefined,
  selectedNominalForm: undefined,
  answerStatus: undefined
};

export const exerciseReducer = createReducer(
  initialExerciseState,
  on(ArticleExerciseActions.answerIsCorrect, state => ({
      ...state,
      answerStatus: true
    })),
  on(ArticleExerciseActions.answerIsIncorrect, state => ({
      ...state,
      answerStatus: false
    })),
  on(ArticleExerciseActions.answerReset, state => ({
      ...state,
      answerStatus: undefined
    })),
  on(ArticleExerciseActions.setSelectedArticle, (state, action) => ({
      ...state,
      selectedArticle: action.article
    })),
  on(ArticleExerciseActions.setSelectedNominalForm, (state, action) => ({
      ...state,
      selectedNominalForm: action.nominalForm
    }))
);
