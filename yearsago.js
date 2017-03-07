function yearsAgo(Year){
  var today = new Date();
  var currentYear = today.getFullYear();
//  console.log(d.getFullYear);
  var calc = currentYear-Year;
  return calc;
}
yearsAgo('2013');
