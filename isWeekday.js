function isWeekday(weekDay){
  var isDay = !weekDay.startsWith('S');
  //console.log(isDay);
  return isDay;
}
isWeekday('Monday');
isWeekday('Sunday');
