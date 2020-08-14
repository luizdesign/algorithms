/**
 * Heap Sort Algorithm
 */
export default class HeapSort {
  /**
   * Static Sort method
   * @param {Array} list - Array of numbers to sort
   */
  static sort(list: number[]) {
    const listLength = list.length;
    let leftPivot = Math.floor(listLength / 2 - 1);
    let rightPivot = listLength - 1;

    while (leftPivot >= 0) {
      heapify(list, listLength, leftPivot);
      leftPivot --;
    }

    while (rightPivot >= 0) {
      [list[0], list[rightPivot]] = [list[rightPivot], list[0]];
      heapify(list, rightPivot, 0);
      rightPivot --;
    }

    return list;
  }
}

/**
 * Create a Binary tree representation
 * @param {Array} list - Array of numbers
 * @param {Number} limit - Array length
 * @param {Number} pivot - Pivot index
 */
const heapify = (
  list: number[],
  limit: number,
  pivot: number,
) => {
  let largest = pivot;
  let left = pivot * 2 + 1;
  let right = left + 1;

  if (left < limit && list[left] > list[largest]) {
    largest = left;
  }

  if (right < limit && list[right] > list[largest]) {
    largest = right;
  }

  if (largest !== pivot) {
    [list[pivot], list[largest]] = [list[largest], list[pivot]];
    heapify(list, limit, largest);
  }

  return list;
}
