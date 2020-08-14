/**
 * Bubble Sort Algorithm
 */
export default class BubbleSort {
  /**
   * Static Sort method
   * @param {Array} list - Array of numbers to sort
   */
  static sort(list: number[]) {
    let listLength = list.length;

    for (let i = 0; i < listLength; i++) {
      for (let j = 0; j < listLength; j++) {
        if (list[j] > list[j + 1]) {
          let tmp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = tmp;
        }
      }
    }

    return list;
  }
}
