import {SortBoardsPipe} from "../sort-boards.pipe";

interface IMockBoard {
  name: string;
  description: string;
}

describe('Sort pipe for boards', () => {
  const pipe = new SortBoardsPipe();

  it('should create instance', () => {
    expect(pipe).toBeTruthy();
  })
})
