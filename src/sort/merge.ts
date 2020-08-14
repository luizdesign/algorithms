/**
 * Merge Sort Algorithm
 */
export default class MergeSort {
  /**
   * Static Sort method
   * @param {Array} list - Array of numbers to sort
   */
  static sort(list: number[]) {
    const listLength = list.length;

    if (listLength < 2) {
      return list;
    }

    const pivot = Math.floor(listLength / 2);
    const leftList = list.slice(0, pivot);
    const rightList = list.slice(pivot);

    return merge(
      MergeSort.sort(leftList),
      MergeSort.sort(rightList)
    );
  }
}

/**
 * Merge lists
 * @param leftList
 * @param rightList
 */
const merge = (
  leftList: number[],
  rightList: number[]
) => {
  const newList = [];
  const leftListLength = leftList.length;
  const rightListLength = rightList.length;

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftListLength && rightIndex < rightListLength) {
    if (leftList[leftIndex] < rightList[rightIndex]) {
      newList.push(leftList[leftIndex]);
      leftIndex ++;
    } else {
      newList.push(rightList[rightIndex]);
      rightIndex ++;
    }
  }

  return newList
    .concat(
      leftList.slice(leftIndex)
    )
    .concat(
      rightList.slice(rightIndex)
    );
};
