import { createReducer, on } from '@ngrx/store';
import * as TrainerActions from '../trainer/actions/trainer.actions';
import * as ArticleActions from '../article/actions/article.actions';

export interface ScoreState {
    correctCounter: number;
    incorrectCounter: number;
    totalCounter: number;
}

const initialScoreState: ScoreState = {
    correctCounter: 0,
    incorrectCounter: 0,
    totalCounter: 0
};

export const scoreReducer = createReducer(
    initialScoreState,
    on(TrainerActions.setCorrectCounter, ArticleActions.setCorrectCounter, (state, action) => ({
            ...state,
            correctCounter: action.correctCounter
        })),
    on(TrainerActions.setIncorrectCounter, ArticleActions.setIncorrectCounter, (state, action) => ({
            ...state,
            incorrectCounter: action.incorrectCounter
        })),
    on(TrainerActions.setTotalCounter, ArticleActions.setTotalCounter, (state, action) => ({
            ...state,
            totalCounter: action.totalCounter
        })),
    on(TrainerActions.incrementCorrectCounter, ArticleActions.incrementCorrectCounter, (state) => ({
            ...state,
            correctCounter: state.correctCounter + 1
        })),
    on(TrainerActions.incrementIncorrectCounter, ArticleActions.incrementIncorrectCounter, (state) => ({
            ...state,
            incorrectCounter: state.incorrectCounter + 1
        })),
    on(TrainerActions.incrementTotalCounter, ArticleActions.incrementTotalCounter, (state) => ({
            ...state,
            totalCounter: state.totalCounter + 1
        })),
    on(TrainerActions.resetAllCounters, ArticleActions.resetAllCounters, (state) => ({
            ...state,
            correctCounter: 0,
            incorrectCounter: 0,
            totalCounter: 0
        }))
);
