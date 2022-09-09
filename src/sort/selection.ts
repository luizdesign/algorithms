type SmallerItem = {
  item: number;
  index: number;
}

/**
 * Selection Sort Algorithm
 */
export default class SelectionSort {
  /**
   * Get the smaller item from the array
   * @param {Array} list - Array of numbers to find the first
   * @returns
   */
  static getSmaller(list: number[], listSize: number): SmallerItem {
    let smallerItem = list[0];
    let smallerItemIndex = 0;

    for (let i = 0; i < listSize; i += 1) {
      const item = list[i];
      if (item < smallerItem) {
        smallerItem = item;
        smallerItemIndex = i;
      }
    }

    return {
      item: smallerItem,
      index: smallerItemIndex,
    };
  }

  /**
   * Static Sort method
   * @param {Array} list - Array of numbers to sort
   */
  static sort(list: number[]): number[] {
    let listSize = list.length;
    const orderedList: number[] = [];

    for (let i = 0; i < listSize; i += 1) {
      const smallerItem = this.getSmaller(list, listSize);
      orderedList.push(smallerItem.item);
      list.splice(smallerItem.index, 1);
    }

    return orderedList;
  }
}
