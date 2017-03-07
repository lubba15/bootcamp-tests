describe('function isWeekday', function(){

    it(' takes a string parameter - to find out if the parameter passed in is a day of the week', function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);

    });
   });
