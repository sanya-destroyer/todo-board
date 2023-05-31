import {IList} from "./list.model";

export interface IBoard {
  _id: string;
  userId: string;
  name: string;
  description: string;
  lists: IList[];
  createdAt: string;
}

export interface IBoardState {
  isLoading: boolean;
  boards: IBoard[];
  error: string;
}


export interface ICreateBoard {
  name: string;
  description: string;
}
