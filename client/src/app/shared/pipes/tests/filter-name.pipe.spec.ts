import {FilterNamePipe} from "../filter-name.pipe";
import {IFilterItem} from "../../types/filter.types";

describe('Filter name pipe', () => {
  const pipe = new FilterNamePipe();

  const valuesToFilter: IFilterItem[] = [
    {
      name: "Some name"
    },
    {
      name: "some name"
    },
    {
      name: "54321 name"
    },
    {
      name: " some name"
    },
    {
      name: ""
    },
    {
      name: " "
    },
    {
      name: " .some name"
    },
  ]

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  })

  it('should remain value same', () => {
    expect(pipe.transform(valuesToFilter, '')).toEqual(valuesToFilter);
  })

  it('shouldn\'t have any values', () => {
    expect(pipe.transform(valuesToFilter, 'hello')).toEqual([]);
  })

  it('should filter values with "Some" on start', () => {
    expect(pipe.transform(valuesToFilter, 'some')).toEqual([valuesToFilter[0], valuesToFilter[1], valuesToFilter[3]])
  })

  it('should filter values with "Some" on start', () => {
    expect(pipe.transform(valuesToFilter, 'Some')).toEqual([valuesToFilter[0], valuesToFilter[1], valuesToFilter[3]])
  })

  it('should filter values with "Some" on start', () => {
    expect(pipe.transform(valuesToFilter, '     some          ')).toEqual([valuesToFilter[0], valuesToFilter[1], valuesToFilter[3]])
  })

  it('should return empty array', () => {
    expect(pipe.transform(null, '')).toEqual([]);
    expect(pipe.transform(undefined, '')).toEqual([]);
  })
})

