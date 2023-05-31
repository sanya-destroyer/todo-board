import {ControlsBarService} from "../../services/controls-bar.service";
import {selectListsByBoard} from "../../store/lists/lists.selectors";
import {selectBoardName} from "../../store/boards/board.selectors";
import {Component, OnDestroy, OnInit} from '@angular/core';
import {IList} from "../../shared/models/list.model";
import {ListService} from "./services/list.service";
import {TaskService} from "./services/task.service";
import {IAppStore} from "../../store/app.store";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
})
export class BoardPageComponent implements OnInit, OnDestroy {

  title$?: Observable<string | undefined>;
  lists$?: Observable<IList[]>
  id?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public listService: ListService,
    private taskService: TaskService,
    private store: Store<IAppStore>,
    public controlsBarService: ControlsBarService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value: any) => {
      const {id} = value;
      this.id = id;
      this.lists$ = this.store.pipe(select(selectListsByBoard(id)));

      this.title$ = this.store.pipe(select(selectBoardName(id)));

    })
  }

  ngOnDestroy() {

  }
}
