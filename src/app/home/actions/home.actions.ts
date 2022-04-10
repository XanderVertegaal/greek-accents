import { createAction, props } from "@ngrx/store";
import { TonePattern } from "src/assets/models/types";

export const setSelectedIndexWord = createAction(
    '[Home] Set selected word',
    props<{ indexWord: [number, string] }>()
);
  
export const setCorrectTonePattern = createAction(
  '[Home] Set correct tone pattern',
  props<{ tonePattern: TonePattern; }>()
);