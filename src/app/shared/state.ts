import { ActionReducerMap } from '@ngrx/store';
import { trainerReducer, TrainerDataState as TrainerDataState } from './trainer.reducer';
import { scoreReducer, ScoreState } from './score.reducer';
import { exerciseReducer, ExerciseState } from './exercise.reducer';
export interface StoreState {
    trainer: TrainerDataState;
    score: ScoreState;
    exercise: ExerciseState;
}

export const storeMap: ActionReducerMap<StoreState> = {
    trainer: trainerReducer,
    score: scoreReducer,
    exercise: exerciseReducer
};
