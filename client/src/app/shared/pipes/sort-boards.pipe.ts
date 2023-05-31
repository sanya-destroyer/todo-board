import {SortBy, SortType} from "../types/sort.types";
import {Pipe, PipeTransform} from '@angular/core';
import {IBoard} from "../models/board.model";
import {map, Observable} from "rxjs";

@Pipe({
  name: 'sortBoards'
})
export class SortBoardsPipe implements PipeTransform {

  transform(boards: Observable<IBoard[]>, sortBy: SortBy, sortType: SortType): Observable<IBoard[]> {
    switch (sortType) {
      case "ASC":
        return boards.pipe(
          map((boards) => boards.sort((firstBoard, secondBoard) =>
            firstBoard[sortBy] > secondBoard[sortBy] ? 1 : -1
          ))
        )

      case "DESC":
        return boards.pipe(
          map((boards) => boards.sort((firstBoard, secondBoard) =>
            firstBoard[sortBy] > secondBoard[sortBy] ? -1 : 1
          ))
        )

      default:
        return boards
    }
  }

}
