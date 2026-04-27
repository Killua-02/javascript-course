

export default function isWeekend(date){
  const dayOfWeek=date.format('dddd');
  return dayOfWeek==='Sunday' || dayOfWeek==='Saturday';
}