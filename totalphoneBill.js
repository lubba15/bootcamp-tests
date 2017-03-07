function totalPhoneBill(bill){

  var CallsAndSms=bill.split(', ');
   var arry=[];
  var Call=0;
  var Sms=0;

  for(var i=0;i<CallsAndSms.length;i++){
   if(CallsAndSms[i].startsWith('c')){

    Call++;

  }
    else
      if(CallsAndSms[i].startsWith('s')){


      Sms++;
    }
  }
   var totalPhoneBill=(0.65*Sms)+(2.75*Call);
  return 'R'+totalPhoneBill.toFixed(2);
}
