/**
 * Quick Sort Algorithm
 */
export default class QuickSort {
  /**
   * Static Sort method
   * @param {Array} list - Array of numbers to sort
   */
  static sort(
    list: number[],
    left?: number,
    right?: number,
  ) {
    let index;

    if (left === undefined) {
      left = 0;
    }

    if (right === undefined) {
      right = list.length;
    }

    if (list.length > 1) {
      index = partition(list, left, right);

      if (left < index - 1) {
        QuickSort.sort(list, left, index - 1);
      }
      if (index < right) {
        QuickSort.sort(list, index, right);
      }
    }

    return list;
  }
}

/**
 * Swap the position of 2 values in a list
 * @param {Array<Number>} list - list of numbers that will be swap value positions
 * @param {Number} leftIndex - left index to swap to the right index
 * @param {Number} rightIndex - right index to swap to the left index
 */
const swap = (
  list: number[],
  leftIndex: number,
  rightIndex: number,
) => {
  const tmp = list[leftIndex];
  list[leftIndex] = list[rightIndex];
  list[rightIndex] = tmp;
}

/**
 * Find the correct position in a list to swap
 * @param {Array<Number>} list - list of numbers that will be swap value positions
 * @param {Number} leftIndex - left index to swap to the right index
 * @param {Number} rightIndex - right index to swap to the left index
 */
const partition = (
  items: number[],
  left: number,
  right: number,
) => {
  const pivot = items[Math.floor((right + left) / 2)];
  let letfIndex = left;
  let rightIndex = right;

  while (letfIndex <= rightIndex) {
    while (items[letfIndex] < pivot) {
      letfIndex++;
    }
    while (items[rightIndex] > pivot) {
      rightIndex --;
    }
    if (letfIndex <= rightIndex) {
      swap(items, letfIndex, rightIndex);
      letfIndex ++;
      rightIndex --;
    }
  }

  return letfIndex;
}
