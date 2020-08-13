export default class QuickSort {
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
        index = partition(list, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            QuickSort.sort(list, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
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
 * Swap the position of 2 values in a list
 * @param {Array<Number>} list - list of numbers that will be swap value positions
 * @param {Number} leftIndex - left index to swap to the right index
 * @param {Number} rightIndex - right index to swap to the left index
 */
const partition = (
  items: number[],
  left: number,
  right: number,
) => {
  var pivot   = items[Math.floor((right + left) / 2)], //middle element
      i       = left, //left pointer
      j       = right; //right pointer
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j); //sawpping two elements
          i++;
          j--;
      }
  }
  return i;
}
