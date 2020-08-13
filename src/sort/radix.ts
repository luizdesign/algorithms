export default class RadixSort {
  static sort(list: number[]) {
    const max = getMax(list);

    for (let i = 0; i < max; i++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < list.length; j++) {
          buckets[getPosition(list[ j ], i)].push(list[ j ]);
        }

        list = [].concat(...buckets);
    }
    return list;
  }
}

const getMax = (arr: number[]) => {
  let max = 0;

  for (let num of arr) {
    if (max < num.toString().length) {
      max = num.toString().length;
    }
  }

  return max;
}

const getPosition = (num: number, place: number) => {
  return Math.floor(
    Math.abs(num) / Math.pow(10,place)
  ) % 10;
}
