import sortAlgorithms from '../../src/sort';
import Log from '../log';
import Sample from '../sample';

type PerfResult = {
  algorithmType: string;
  elapsedTime: number;
};

const numberList: number[] = Sample.create(50000);
const results: PerfResult[] = [];
let sortedList: number[] = [];


const loggerRdix = new Log(false);
loggerRdix.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.radix.sort(JSON.parse(JSON.stringify(numberList)));
results.push({
  algorithmType: 'radixsort',
  elapsedTime: loggerRdix.finish(sortedList),
});


const loggerInsertion = new Log(false);
loggerInsertion.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.insertion.sort(JSON.parse(JSON.stringify(numberList)));
results.push({
  algorithmType: 'insertion',
  elapsedTime: loggerInsertion.finish(sortedList),
});


const loggerQuickSort = new Log(false);
loggerQuickSort.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.quick.sort(JSON.parse(JSON.stringify(numberList)));
results.push({
  algorithmType: 'quicksort',
  elapsedTime: loggerQuickSort.finish(sortedList),
});


const loggerMerge = new Log(false);
loggerMerge.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.merge.sort(JSON.parse(JSON.stringify(numberList)));
results.push({
  algorithmType: 'mergesort',
  elapsedTime: loggerMerge.finish(sortedList),
});


const loggerShell = new Log(false);
loggerShell.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.shell.sort(JSON.parse(JSON.stringify(numberList)));
results.push({
  algorithmType: 'shellsort',
  elapsedTime: loggerShell.finish(sortedList),
});


const loggerSelection = new Log(false);
loggerSelection.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.selection.sort(JSON.parse(JSON.stringify(numberList)));
results.push({
  algorithmType: 'selection',
  elapsedTime: loggerSelection.finish(sortedList),
});


const loggerBubble = new Log(false);
loggerBubble.start(numberList, 'Ordering the list');
sortedList = sortAlgorithms.bubble.sort(JSON.parse(JSON.stringify(numberList)));
results.push({
  algorithmType: 'bubble',
  elapsedTime: loggerBubble.finish(sortedList),
});


const perfList = results.sort((a, b) => a.elapsedTime - b.elapsedTime);
console.table(perfList);
