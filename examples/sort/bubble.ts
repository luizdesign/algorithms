import sortAlgorithms from '../../src/sort';
import Log from '../log';
import Sample from '../sample';

const numberList: number[] = Sample.create(100000);
const logger = new Log();

logger.start(numberList, 'Ordering the list with the Bubble Algorithm');

const sortedList = sortAlgorithms.bubble.sort(numberList);

logger.finish(sortedList);
