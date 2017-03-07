function countRegNumber(registration){
  var regSplit = registration.split(",");
  var regCount = regSplit.length;
  console.log(regCount);
  return regCount;
}
countRegNumber('CA 182736,CY 523519,CJ 812328');
