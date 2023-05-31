import {ICommentState} from "../../shared/models/comment.model";
import {createReducer, on} from "@ngrx/store";
import * as CommentActions from './comment.actions';

const initialState: ICommentState = {
  isLoading: false,
  comments: [],
  error: ''
}

export const reducers = createReducer(
  initialState,
  on(CommentActions.getCommentsSuccess, (state, action) => ({...state, comments: action.comments})),
  on(CommentActions.addCommentSuccess, (state, action) => ({
    ...state,
    comments: [...state.comments, action.comment]
  })),
  on(CommentActions.deleteCommentSuccess, (state, action) => ({
    ...state,
    comments: state.comments.filter((comment) => comment._id !== action.id)
  })),
  on(CommentActions.editCommentSuccess, (state, action) => ({
    ...state,
    comments: state.comments.map((comment) => comment._id === action.id ? {
      ...comment,
      content: action.content
    } : {...comment})
  })),
  on(CommentActions.clearCommentsState, () => initialState)
)
