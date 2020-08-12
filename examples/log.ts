export default class Log {
  starttime: number;
  showLogs: boolean;

  constructor(showLogs = true) {
    this.starttime = 0;
    this.showLogs = showLogs;
  }

   start(
    list: number[],
    message: string,
  ) {
    const now = new Date();
    this.starttime = now.getTime();

    if (this.showLogs) {
      process.stdout.write(`Entry list: ${list}\n`);
      process.stdout.write(`${message}\n`);
      process.stdout.write(`Start process at ${now.toISOString()}\n`);
    }
  }

  finish(outputList: number[]) {
    const now = new Date();
    const elapsed = now.getTime() - this.starttime;

    if (this.showLogs) {
      process.stdout.write(`Output list: ${outputList}\n`);
      process.stdout.write(`Finish process at ${now.toISOString()}\n`);
      process.stdout.write(`Elapsed time: ${elapsed}\n`);
    }

    return elapsed;
  }
}
