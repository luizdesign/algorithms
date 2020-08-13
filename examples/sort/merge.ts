import sortAlgorithms from '../../src/sort';
import Log from '../log';
import Sample from '../sample';

const numberList: number[] = Sample.create(1000000);
const logger = new Log();

logger.start(numberList, 'Ordering the list with the Quick Sort Algorithm');

const sortedList = sortAlgorithms.merge.sort(numberList);

logger.finish(sortedList);
