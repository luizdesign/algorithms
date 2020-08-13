import sortAlgorithms from '../../src/sort';
import Log from '../log';
import Sample from '../sample';

type PerfResult = {
  algorithmType: string;
  elapsedTime: number;
};

const numberList: number[] = Sample.create(100000);
const results: PerfResult[] = [];
let sortedList: number[] = [];



const loggerInsertion = new Log(false);
loggerInsertion.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.insertion.sort(numberList);
results.push({
  algorithmType: 'insertion',
  elapsedTime: loggerInsertion.finish(sortedList),
});


const loggerQuickSort = new Log(false);
loggerQuickSort.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.quick.sort(numberList);
results.push({
  algorithmType: 'quicksort',
  elapsedTime: loggerQuickSort.finish(sortedList),
});


const loggerSelection = new Log(false);
loggerSelection.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.selection.sort(numberList);
results.push({
  algorithmType: 'selection',
  elapsedTime: loggerSelection.finish(sortedList),
});


const loggerBubble = new Log(false);
loggerBubble.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.bubble.sort(numberList);
results.push({
  algorithmType: 'bubble',
  elapsedTime: loggerBubble.finish(sortedList),
});


const perfList = results.sort((a, b) => a.elapsedTime - b.elapsedTime);
console.table(perfList);
