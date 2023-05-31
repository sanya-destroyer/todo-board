import {Pipe, PipeTransform} from '@angular/core';
import {IFilterItem} from "../types/filter.types";

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform<T extends IFilterItem>(value: T[] | null = [], filterWord: string = ''): T[] {
    if (value == null) return [];

    if (filterWord) {
      return value.filter((value) => value.name.trim().toLowerCase().startsWith(filterWord.toLowerCase().trim()))
    }

    return value;
  }
}
