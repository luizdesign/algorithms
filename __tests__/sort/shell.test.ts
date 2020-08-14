import Algorithms from '../../src/sort';

describe('# Shell Sort Algorithm', () => {
  it('Sort list', () => {
    const list = [10,5,11,2,0,5,3,15,26,10478,1,202];

    expect(Algorithms.shell.sort(list))
      .toEqual(
        [0,1,2,3,5,5,10,11,15,26,202,10478]
      );
  });
});
