export default class MergeSort {
  static sort(list: number[]): number[] {
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

const merge = (
  leftList: number[],
  rightList: number[]
) => {
  const result = [];
  const leftListLength = leftList.length;
  const rightListLength = rightList.length;

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftListLength && rightIndex < rightListLength) {
      if (leftList[leftIndex] < rightList[rightIndex]) {
          result.push(leftList[leftIndex]);
          leftIndex ++;
      } else {
          result.push(rightList[rightIndex]);
          rightIndex ++;
      }
  }
  return result
    .concat(
      leftList.slice(leftIndex)
    )
    .concat(
      rightList.slice(rightIndex)
    );
};
