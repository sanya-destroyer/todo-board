export interface IComment {
  _id: string;
  userId: string;
  boardId: string;
  taskId: string;
  content: string;
}

export interface ICommentState {
  isLoading: boolean;
  comments: IComment[];
  error: string;
}

export interface ICreateComment {
  boardId: string;
  taskId: string;
  content: string;
}

export interface IChangeComment {
  id: string;
  content: string;
}
