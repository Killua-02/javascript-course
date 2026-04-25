import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

console.log('hello world');

const today=dayjs();
console.log(today.add(5,'day').format('MMMM D'));
console.log(today.add(1,'month').format('MMMM D'));
console.log(today.subtract(1,'month').format('MMMM D'));
console.log(today.format('dddd'));


function isWeekend(date){
  const dayOfWeek=dayjs(date).day();
  return dayOfWeek===0 || dayOfWeek===6;
}

console.log(isWeekend('2026-04-25'));