export default class InsertionSort {
  static sort(list: number[]) {
    const listLength = list.length;

    for (let i = 1; i < listLength; i++) {
        const currentItem = list[i];
        let auxIndex = i - 1;

        while (auxIndex >= 0 && list[auxIndex] > currentItem) {
            list[auxIndex + 1] = list[auxIndex];
            auxIndex = auxIndex - 1;
        }

        list[auxIndex + 1] = currentItem;
    }

    return list;
  }
}
