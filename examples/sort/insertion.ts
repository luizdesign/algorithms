import sortAlgorithms from '../../src/sort';

const numberList: number[] = [10,5,3,20,6];

process.stdout.write(`Entry list: ${numberList}\n`);

const sortedList = sortAlgorithms.insertion.sort(numberList);

process.stdout.write(`Output list: ${sortedList}\n`);
