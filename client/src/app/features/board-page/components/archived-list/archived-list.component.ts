import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ControlsBarService} from "../../../../services/controls-bar.service";
import {selectArchivedTasks} from "../../../../store/tasks/tasks.selectors";
import {ITask} from "../../../../shared/models/task.model";
import {IAppStore} from "../../../../store/app.store";
import {select, Store} from "@ngrx/store";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-archived-list',
  templateUrl: './archived-list.component.html',
  styleUrls: ['./archived-list.component.scss', '../../styles/list.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchivedListComponent implements OnInit {

  @Input() boardId?: string;
  tasks$?: Observable<ITask[]>

  constructor(
    public controlsBarService: ControlsBarService,
    private store: Store<IAppStore>
  ) {
  }

  get tasksLength() {
    return this.tasks$?.pipe(
      map((tasks) => tasks.length)
    )
  }

  ngOnInit(): void {
    this.tasks$ = this.store.pipe(select(selectArchivedTasks(this?.boardId || '')));
  }
}
