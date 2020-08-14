/**
 * Insertion Sort Algorithm
 */
export default class InsertionSort {
  /**
   * Static Sort method
   * @param {Array} list - Array of numbers to sort
   */
  static sort(list: number[]) {
    const listLength = list.length;

    for (let index = 1; index < listLength; index++) {
      const currentItem = list[index];
      let auxIndex = index - 1;

      while (auxIndex >= 0 && list[auxIndex] > currentItem) {
        list[auxIndex + 1] = list[auxIndex];
        auxIndex = auxIndex - 1;
      }

      list[auxIndex + 1] = currentItem;
    }

    return list;
  }
}
