import { DateTime } from "luxon";
// https://github.com/moment/luxon/blob/master/docs/formatting.md
// ref luxon formatting: https://moment.github.io/luxon/#/formatting

const time = DateTime.fromObject(
  { year: 2025, month: 1, day: 1, hour: 1, minute: 30 },
  { zone: 'America/New_York' },
);

const millis = time.toMillis();
console.log("millis", millis)


const time2 = DateTime.fromMillis(millis, { zone: 'America/Los_Angeles' });

console.log({time, time2})