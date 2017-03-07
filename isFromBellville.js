function isFromBellville(taxi){
  var regNumber = taxi.startsWith('CY');
  console.log(regNumber);
  return regNumber;
}
isFromBellville('GP 4532');
