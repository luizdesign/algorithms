export default class Log {
  starttime: number = 0;

   start(
    list: number[],
    message: string,
  ) {
    let now = new Date();
    this.starttime = now.getTime();

    process.stdout.write(`Entry list: ${list}\n`);
    process.stdout.write(`${message}\n`);
    process.stdout.write(`Start process at ${now.toISOString()}\n`);
  }

  finish(outputList: number[]) {
    let now = new Date();
    process.stdout.write(`Output list: ${outputList}\n`);
    process.stdout.write(`Finish process at ${now.toISOString()}\n`);
    process.stdout.write(`Elapsed time: ${now.getTime() - this.starttime}\n`);
  }
}
