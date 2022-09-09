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
      this.log(`Entry list with "${list}" items`);
      this.log(message);
      this.log(`Start process at ${now.toISOString()}`);
    }
  }

  finish(outputList: number[]) {
    const now = new Date();
    const elapsed = now.getTime() - this.starttime;

    if (this.showLogs) {
      this.log(`Output list: ${outputList}`);
      this.log(`Finish process at ${now.toISOString()}`);
      this.log(`Elapsed time: ${elapsed}`);
    }

    return elapsed;
  }

  log(message: string) {
    process.stdout.write(`${message}\n`);
  }
}
