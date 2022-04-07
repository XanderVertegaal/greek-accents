import { ActionReducerMap } from "@ngrx/store";
import { dataReducer, dataState } from "./data.reducer";
export interface StoreState {
    data: dataState
}

export const StoreMap: ActionReducerMap<StoreState> = {
    data: dataReducer
}