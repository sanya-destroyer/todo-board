export enum DeleteBy {
    boardId = 'boardId',
    taskId = 'taskId'
}

export interface DeleteByTaskId {
    type: DeleteBy.taskId;
    id: string
}

export interface DeleteByBoardId {
    type: DeleteBy.boardId;
    id: string;
}

export type DeleteComments = DeleteByBoardId | DeleteByTaskId
