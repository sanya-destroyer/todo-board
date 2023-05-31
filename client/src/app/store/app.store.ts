import {ActionReducerMap} from "@ngrx/store";

import {IBoardState} from "../shared/models/board.model";
import {IListState} from "../shared/models/list.model";
import {ITaskState} from "../shared/models/task.model";
import {ICommentState} from "../shared/models/comment.model";

import {BoardEffects} from './boards/board.effects';
import {ListsEffects} from "./lists/lists.effects";
import {TasksEffects} from "./tasks/tasks.effects";
import {CommentEffects} from "./comments/comment.effects";

import {reducers as boardReducer} from "./boards/board.reducer";
import {reducers as listsReducer} from './lists/lists.reducer';
import {reducers as tasksReducer} from './tasks/tasks.reducer';
import {reducers as commentsReducer} from './comments/comment.reducer';

export interface IAppStore {
  boards: IBoardState;
  lists: IListState;
  tasks: ITaskState;
  comments: ICommentState
}

export const appEffects = [
  BoardEffects,
  ListsEffects,
  TasksEffects,
  CommentEffects
];

export const appReducers: ActionReducerMap<IAppStore> = {
  boards: boardReducer,
  lists: listsReducer,
  tasks: tasksReducer,
  comments: commentsReducer,
}


