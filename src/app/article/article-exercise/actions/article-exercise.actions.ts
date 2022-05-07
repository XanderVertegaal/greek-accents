import { createAction, props } from "@ngrx/store";
import { Article, NominalForm } from "src/assets/types";

export const answerIsCorrect = createAction(
  "[Article exercise] Answer is correct",
);

export const answerIsIncorrect = createAction(
  "[Article exercise] Answer is incorrect",
);

export const answerReset = createAction(
  "[Article exercise] Answer reset",
);

export const setSelectedWord = createAction(
  "[Article exercise] Set selected word",
  props<{ word: Article | NominalForm; }>()
);