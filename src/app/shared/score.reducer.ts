import { createReducer, on } from "@ngrx/store";
import * as ToneSelectActions from "../tone-select-form/actions/tone-select.actions";

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
    on(ToneSelectActions.setCorrectCounter, (state, action) => {
        return {
            ...state,
            correctCounter: action.correctCounter
        };
    }),
    on(ToneSelectActions.setIncorrectCounter, (state, action) => {
        return {
            ...state,
            incorrectCounter: action.incorrectCounter
        };
    }),
    on(ToneSelectActions.setTotalCounter, (state, action) => {
        return {
            ...state,
            totalCounter: action.totalCounter
        };
    }),
    on(ToneSelectActions.incrementCorrectCounter, (state) => {
        return {
            ...state,
            correctCounter: state.correctCounter + 1
        };
    }),
    on(ToneSelectActions.incrementIncorrectCounter, (state) => {
        return {
            ...state,
            incorrectCounter: state.incorrectCounter + 1
        };
    }),
    on(ToneSelectActions.incrementTotalCounter, (state) => {
        return {
            ...state,
            totalCounter: state.totalCounter + 1
        };
    })
)