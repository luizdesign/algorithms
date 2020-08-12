export default class SelectionSort {
  static sort(list: number[]) {
    let listLength = list.length;

    for (let i = 0; i < listLength; i++) {
        let minValueIndex = i;
        for (let j = i + 1; j < listLength; j++) {
            if (list[minValueIndex] > list[j]) {
                minValueIndex = j;
            }
        }
        if (minValueIndex !== i) {
            let tmp = list[i];
            list[i] = list[minValueIndex];
            list[minValueIndex] = tmp;
        }
    }

    return list;
  }
}
