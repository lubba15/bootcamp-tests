

   describe('function countAllFromTown', function(){

       it(' should return number registration numbers in the string that is for that town', function(){
           assert.equal(countAllFromTown("CL 124 ,CL 345", "CL"),2);
});
           it(' should return number registration numbers in the string that is for that town', function(){
               assert.equal(countAllFromTown("CL 124 ,CL 345,CY 756", "CY"),1);


       });
      });
