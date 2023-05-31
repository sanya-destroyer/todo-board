import {createAction, props} from "@ngrx/store";
import {IChangeComment, IComment, ICreateComment} from "../../shared/models/comment.model";

//************
//GET COMMENTS
export const getComments = createAction(
  '[Comments] Get Comments'
)

export const getCommentsSuccess = createAction(
  '[Comments] Get Comments Success',
  props<{ comments: IComment[] }>()
)

export const getCommentsFailure = createAction(
  '[Comments] Get Comments Failure',
  props<{ message: string }>()
)

//************
//ADD COMMENT

export const addComment = createAction(
  '[Comments] Add Comment',
  props<ICreateComment>()
)

export const addCommentSuccess = createAction(
  '[Comments] Add Comment Success',
  props<{ comment: IComment }>()
)

export const addCommentFailure = createAction(
  '[Comments] Add Comment Failure',
  props<{ message: string }>()
)

//************
// DELETE COMMENT

export const deleteComment = createAction(
  '[Comments] Delete Comment',
  props<{ id: string }>()
)

export const deleteCommentSuccess = createAction(
  '[Comments] Delete Comment Success',
  props<{ id: string }>()
)

export const deleteCommentFailure = createAction(
  '[Comments] Delete Comment Failure',
  props<{ message: string }>()
)

//************
// EDIT COMMENT

export const editComment = createAction(
  '[Comments] Edit Comment',
  props<IChangeComment>()
)

export const editCommentSuccess = createAction(
  '[Comments] Edit Comment Success',
  props<IChangeComment>()
)

export const editCommentFailure = createAction(
  '[Comments] Edit Comment Failure',
  props<{ message: string }>()
)

//************
// CLEAR

export const clearCommentsState = createAction(
  '[Comments] Clear Comments State'
)
