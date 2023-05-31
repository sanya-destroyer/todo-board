import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';

import {IBoard, ICreateBoard} from '../../../shared/models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boards$ = new BehaviorSubject<IBoard[]>([]);

  constructor(
    private http: HttpClient,
  ) {
  }

  public init(): Observable<IBoard[]> {
    return this.http.get<IBoard[]>('boards')
  }

  public createBoard(board: ICreateBoard) {
    return this.http.post<IBoard>('boards', board);
  }

  public deleteBoard({_id}: { _id: string }) {
    return this.http.delete(`boards/${_id}`);
  }

  public updateBoardName({_id, name}: { _id: string, name: string }) {
    return this.http.put<IBoard>(`boards/${_id}`, {name});
  }

  public clear() {
    this.boards$.next([]);
  }
}
