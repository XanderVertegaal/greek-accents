import { createAction, props } from "@ngrx/store";
import { TonePattern } from "src/assets/types";

export const setSelectedIndexWord = createAction(
    '[Trainer] Set selected word',
    props<{ indexWord: [number, string] }>()
);
  
export const setCorrectTonePattern = createAction(
  '[Trainer] Set correct tone pattern',
  props<{ tonePattern: TonePattern; }>()
);