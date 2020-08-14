import sortAlgorithms from '../../src/sort';
import Log from '../log';
import Sample from '../sample';

const numberList: number[] = Sample.create(1000000);
const logger = new Log();

logger.start(numberList, 'Ordering the list with the Heap Algorithm');

const sortedList = sortAlgorithms.heap.sort(numberList);

logger.finish(sortedList);
