import args from 'shell-arguments';
import sortAlgorithms from '../../src/sort';
import Log from '../log';
import Sample from '../sample';

const sampleSize = args.sampleSize || 100_000;

const numberList: number[] = Sample.create(sampleSize);
const logger = new Log();

logger.start(numberList, 'Ordering the list with the Selection Algorithm');

const sortedList = sortAlgorithms.selection.sort(numberList);

logger.finish(sortedList);
