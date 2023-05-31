import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {deleteBoard, editBoard} from "../../../../store/boards/board.actions";
import {selectListsByBoard} from "../../../../store/lists/lists.selectors";
import {selectTasksByBoard} from "../../../../store/tasks/tasks.selectors";
import {IBoard} from "../../../../shared/models/board.model";
import {IList} from "../../../../shared/models/list.model";
import {ITask} from "../../../../shared/models/task.model";
import {BoardService} from "../../services/board.service";
import {IAppStore} from "../../../../store/app.store";
import {select, Store} from "@ngrx/store";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {

  @Input() board?: IBoard;
  lists$?: Observable<IList[]>
  tasks$?: Observable<ITask[]>

  constructor(
    private boardService: BoardService,
    private store: Store<IAppStore>
  ) {
  }

  get createdAt() {
    const date = new Date(this.board?.createdAt ?? '');
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString();
  }

  ngOnInit(): void {
    this.lists$ = this.store.pipe(select(selectListsByBoard(this.board!._id)));
    this.tasks$ = this.store.pipe(select(selectTasksByBoard(this.board!._id)));
  }

  getListTask(listId: string) {
    return this.tasks$!
      .pipe(
        map((tasks) => tasks.filter((task) => task.listId === listId).length)
      )
  }

  changeBoardName(name: string) {
    this.store.dispatch(editBoard({_id: this.board!._id, name: name.trim()}));
  }

  deleteBoard() {
    this.store.dispatch(deleteBoard({_id: this.board!._id}))
  }
}
