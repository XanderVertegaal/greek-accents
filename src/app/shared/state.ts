import { ActionReducerMap } from "@ngrx/store";
import { dataReducer, DataState as DataState } from "./data.reducer";
import { scoreReducer, ScoreState } from "./score.reducer";
export interface StoreState {
    data: DataState,
    score: ScoreState
}

export const StoreMap: ActionReducerMap<StoreState> = {
    data: dataReducer,
    score: scoreReducer
}