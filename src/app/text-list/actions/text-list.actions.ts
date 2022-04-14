import { createAction, props } from "@ngrx/store";
import { Text } from "src/assets/types";

export const setSelectedText = createAction(
    '[TextList] Set Selected Text',
    props<{ text: Text }>()
)