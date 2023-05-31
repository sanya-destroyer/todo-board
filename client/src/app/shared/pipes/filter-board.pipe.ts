import {filterTasksByFilter} from "../../store/tasks/tasks.selectors";
import {FilterBy, FilterTypes} from "../types/sort.types";
import {Pipe, PipeTransform} from '@angular/core';
import {IAppStore} from "../../store/app.store";
import {map, mergeMap, Observable, of} from "rxjs";
import {IBoard} from "../models/board.model";
import {select, Store} from "@ngrx/store";

@Pipe({
  name: 'filterBoard'
})
export class FilterBoardPipe implements PipeTransform {

  constructor(
    private store: Store<IAppStore>
  ) {
  }

  getFilteredTasksBoardIds = (filterWord: string): Observable<string[]> => {
    return this.store.pipe(select(filterTasksByFilter(filterWord)));
  }

  transform(boards: Observable<IBoard[]> | null, filter: string, filterBy: FilterBy): Observable<IBoard[]> {

    if (boards == null) return of([]);

    switch (filterBy) {
      case FilterTypes.tasks:

        return boards.pipe(
          mergeMap((boards) =>
            this.getFilteredTasksBoardIds(filter)
              .pipe(
                map((taskIds) => boards.filter((board) => taskIds.includes(board._id))),
              )
          )
        )

      case FilterTypes.description:
        return boards.pipe(
          map((boards) =>
            boards.filter((board) => board.description.trim().toLowerCase().startsWith(filter.trim().toLowerCase()))
          )
        )
      case FilterTypes.name:
        return boards.pipe(
          map((boards) =>
            boards.filter((board) => board.name.trim().toLowerCase().startsWith(filter.trim().toLowerCase()))
          )
        )
      default:
        return boards
    }

  }
}
