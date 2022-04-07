import { createAction, props } from "@ngrx/store";

export const setSelectedIndexWord = createAction(
    '[Corpus] Set selected word',
    props<{ indexWord: [number, string] }>()
  );