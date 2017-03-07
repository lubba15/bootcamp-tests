function countAllPaarl(numberPlate){
  var array = [];
  var number = numberPlate.split(', ');
    for(var i=0;i<number.length;i++){
       if(number[i].startsWith('CJ')){
        console.log(array++)
  }
    }
  return array;
}
countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123');
