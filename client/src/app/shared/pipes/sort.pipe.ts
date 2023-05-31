import {Pipe, PipeTransform} from '@angular/core';
import {SortBy, SortItem, SortTypes} from "../types/sort.types";


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  sortFunction(firstName: string, secondName: string) {

  }


  transform<T extends SortItem>(value: T[] | null, sortBy: SortBy = 'name', sortType: string = SortTypes.ASC): T[] {
    if (value == null) return [];

    switch (sortType) {
      case SortTypes.ASC:
        return value.sort((firstObj, secondObj) => firstObj[sortBy].trim().toLowerCase() > secondObj[sortBy].trim().toLowerCase() ? 1 : -1);
      case SortTypes.DESC:
        return value.sort((firstObj, secondObj) => firstObj[sortBy].trim().toLowerCase() > secondObj[sortBy].trim().toLowerCase() ? -1 : 1);
      default:
        return value
    }
  }

}
