import {createAction, props} from "@ngrx/store";
import {IList} from "../../shared/models/list.model";

//************
// GET LISTS

export const getLists = createAction(
  '[Lists] Get Lists',
  props<{ boardId?: string }>()
)

export const getListsSuccess = createAction(
  '[Lists] Get Lists Success',
  props<{ lists: IList[] }>()
)

export const getListsFailure = createAction(
  '[Lists] Get Lists Failure',
  props<{ message: string }>()
)

//************
//DELETE LIST

export const deleteListsByBoard = createAction(
  '[Lists] Delete Lists',
  props<{ _id: string }>()
)

//************
//CHANGE LIST COLOR

export const changeListColor = createAction(
  '[Lists] Change List Color',
  props<{ color: string, _id: string }>()
)

export const changeListColorSuccess = createAction(
  '[Lists] Change List Color Success',
  props<{ color: string, _id: string }>()
)

export const changeListColorFailure = createAction(
  '[Lists] Change List Color Failure',
  props<{ message: string }>()
)

//************
//CLEAR STATE

export const clearListsState = createAction(
  '[Lists] Clear Lists state'
)
