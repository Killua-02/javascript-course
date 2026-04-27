import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import isSatSun from "./import.js";

console.log('hello world');

const today=dayjs();
console.log(today.add(5,'day').format('MMMM D'));
console.log(today.add(1,'month').format('MMMM D'));
console.log(today.subtract(1,'month').format('MMMM D'));
console.log(today.format('dddd'));




let date=dayjs();
console.log(isSatSun(date));
console.log(isSatSun(date.subtract(1,'day')));