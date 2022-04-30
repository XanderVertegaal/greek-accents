import { ActionReducerMap } from "@ngrx/store";
import { trainerReducer, TrainerDataState as TrainerDataState } from "./trainer.reducer";
import { scoreReducer, ScoreState } from "./score.reducer";
export interface StoreState {
    trainer: TrainerDataState,
    score: ScoreState
}

export const StoreMap: ActionReducerMap<StoreState> = {
    trainer: trainerReducer,
    score: scoreReducer
}