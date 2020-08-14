/**
 * Radix Sort Algorithm
 */
export default class RadixSort {
  /**
   * Static Sort method
   * @param {Array} list - Array of numbers to sort
   */
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

/**
 * Return the biggest key length
 * @param {Array} list - Array of numbers
 */
const getMax = (list: number[]) => {
  let max = 0;

  for (let num of list) {
    if (max < num.toString().length) {
      max = num.toString().length;
    }
  }

  return max;
}

/**
 * Get the position
 * @param {Number} num - bucket index
 * @param {Number} place - list index
 */
const getPosition = (num: number, place: number) => {
  return Math.floor(
    Math.abs(num) / Math.pow(10,place)
  ) % 10;
};
