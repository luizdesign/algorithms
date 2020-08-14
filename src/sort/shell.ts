/**
 * Shell Sort Algorithm
 */
export default class ShellSort {
  /**
   * Static Sort method
   * @param {Array} list - Array of numbers to sort
   */
  static sort(list: number[]) {
    const listLength = list.length;

    for (let gap = Math.floor(listLength / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let index = gap; index < listLength; index ++) {
        const temp = list[index];

        let auxIndex;
        for (auxIndex = index; auxIndex >= gap && list[auxIndex-gap] > temp; auxIndex -= gap) {
          list[auxIndex] = list[auxIndex-gap];
        }

        list[auxIndex] = temp;
      }
    }

    return list;
  }
}
