export default class SheelSort {
  static sort(list: number[]) {
    let listLength = list.length;

    for (let gap = Math.floor(listLength/2); gap > 0; gap = Math.floor(gap/2))	{
      for (let i = gap; i < listLength; i += 1)  {
        const temp = list[i];

        let j;
        for (j = i; j >= gap && list[j-gap] > temp; j-=gap)  {
          list[j] = list[j-gap];
        }

        list[j] = temp;
      }
    }

    return list;
  }
}
