export default class Sample {
  static create(limit: number): number[] {
    const sample: number[] = [];

    for (let i = 0; i < limit; i ++) {
      sample.push(Math.floor(Math.random() * limit));
    }

    return sample;
  }
}
