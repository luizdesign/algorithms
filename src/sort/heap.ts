export default class HeapSort {
  static sort(list: number[]) {
    const listLength = list.length;
    let i = Math.floor(listLength / 2 - 1);
    let k = listLength - 1;

    while (i >= 0) {
      heapify(list, listLength, i);
      i --;
    }

    while (k >= 0) {
      [list[0], list[k]] = [list[k], list[0]];
      heapify(list, k, 0);
      k --;
    }

    return list;
  }
}

const heapify = (
  list,
  limit,
  i
) => {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (left < limit && list[left] > list[largest]) {
    largest = left;
  }

  if (right < limit && list[right] > list[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [list[i], list[largest]] = [list[largest], list[i]];
    heapify(list, limit, largest);
  }

  return list;
}
