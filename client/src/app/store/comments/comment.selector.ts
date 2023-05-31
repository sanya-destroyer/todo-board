import {IAppStore} from "../app.store";
import {createSelector} from "@ngrx/store";


const selectFeature = (state: IAppStore) => state.comments;

export const selectCommentsByTaskId = (taskId: string) =>
  createSelector(selectFeature, (state) => state.comments.filter((comment) => comment.taskId === taskId))
