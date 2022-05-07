import { createReducer, on } from '@ngrx/store';
import { Article, NominalForm } from 'src/assets/types';
import * as ArticleExerciseActions from '../article/article-exercise/actions/article-exercise.actions';

export interface ExerciseState {
  selectedWord: Article | NominalForm | undefined;
  answerStatus: boolean | undefined;
}

const initialExerciseState: ExerciseState = {
  selectedWord: undefined,
  answerStatus: undefined
};

export const exerciseReducer = createReducer(
  initialExerciseState,
  on(ArticleExerciseActions.answerIsCorrect, state => {
    return {
      ...state,
      answerStatus: true
    };
  }),
  on(ArticleExerciseActions.answerIsIncorrect, state => {
    return {
      ...state,
      answerStatus: false
    };
  }),
  on(ArticleExerciseActions.answerReset, state => {
    return {
      ...state,
      answerStatus: undefined
    };
  }),
  on(ArticleExerciseActions.setSelectedWord, (state, action) => {
    return {
      ...state,
      selectedWord: action.word
    };
  })
);