import { DateTime } from "luxon";
// https://github.com/moment/luxon/blob/master/docs/formatting.md
// ref luxon formatting: https://moment.github.io/luxon/#/formatting

console.log(DateTime.local()); // local time

console.log(DateTime.now()); // Zone America/Los_Angeles

console.log(DateTime.utc()); // Zone: UTC

console.log(DateTime.now().toLocaleString(DateTime.TIME_SIMPLE));

console.log(DateTime.utc().toLocaleString(DateTime.TIME_SIMPLE));

const locals = ["en-US", "fr"];

locals.forEach((local) => {
  const relative = DateTime.now().toRelativeCalendar({
    base: DateTime.now(),
    unit: "days",
    local: "en-UK",
  });

  console.log(local, relative);
});

const dt = DateTime.fromObject(
  { year: 2024, month: 9, day: 16, hour: 11, minute: 30 },
  { zone: "America/New_York" }
);

const standard = DateTime.fromObject(
  { year: 2024, month: 9, day: 16, hour: 11, minute: 30 },
  { zone: "Asia/Shanghai" }
);

console.log('NewYork', dt.toISO());
console.log('Shanghai', standard.toISO());

// setLocale will translate the result
console.log(DateTime.now().setLocale("zh").plus({ days: 1 }).toRelative());   // 1天后

const currNewYorkTime = DateTime.now().setZone('America/New_York');
console.log('current new york time' , currNewYorkTime.toLocaleString())
const localTime = currNewYorkTime.setZone('America/Los_Angeles').setLocale('zh').toFormat('LLL dd');
console.log('local time',localTime); // 2025 1月 09
