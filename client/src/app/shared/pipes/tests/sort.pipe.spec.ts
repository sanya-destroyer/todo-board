import {SortItem, SortTypes} from "../../types/sort.types";
import {SortPipe} from "../sort.pipe";

describe('Sort pipe for tasks', () => {

  const pipe = new SortPipe();

  const valuesToSort: SortItem[] = [
    {
      name: "5",
      createdAt: "2022-10-24T11:20:38.285+00:00"
    },
    {
      name: "aaa",
      createdAt: "2022-10-27T12:51:55.975+00:00"
    },
    {
      name: "Aaaaa",
      createdAt: "2022-10-27T12:51:35.975+00:00"
    },
    {
      name: "b",
      createdAt: "2022-10-27T12:15:01.231+00:00"
    },
    {
      name: "c",
      createdAt: "2022-10-27T12:52:00.699+00:00"
    },
  ]

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should remain array same', () => {
    expect(pipe.transform(valuesToSort, 'name', SortTypes.ASC).length).toEqual(valuesToSort.length);
    expect(pipe.transform(valuesToSort, 'name', SortTypes.DESC).length).toEqual(valuesToSort.length);
    expect(pipe.transform(valuesToSort, 'createdAt', SortTypes.ASC).length).toEqual(valuesToSort.length);
    expect(pipe.transform(valuesToSort, 'createdAt', SortTypes.DESC).length).toEqual(valuesToSort.length);
  })
})
