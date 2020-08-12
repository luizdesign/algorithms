import sortAlgorithms from '../../src/sort';
import Log from '../log';
import Sample from '../sample';

type PerfResult = {
  algorithmType: string;
  elapsedTime: number;
};

const numberList: number[] = Sample.create(100000);
const logger = new Log(false);
const results: PerfResult[] = [];

logger.start(numberList, 'Ordering the list');
let sortedList: number[] = sortAlgorithms.bubble.sort(numberList);
results.push({
  algorithmType: 'bubble',
  elapsedTime: logger.finish(sortedList),
});


logger.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.insertion.sort(numberList);
results.push({
  algorithmType: 'insertion',
  elapsedTime: logger.finish(sortedList),
});


logger.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.selection.sort(numberList);
results.push({
  algorithmType: 'selection',
  elapsedTime: logger.finish(sortedList),
});


const perfList = results.sort((a, b) => a.elapsedTime - b.elapsedTime);
console.table(perfList);
