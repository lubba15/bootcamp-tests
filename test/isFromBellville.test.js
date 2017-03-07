describe('function isfromBellville ', function(){

    it('should  returns true if a registration number is for Bellville', function(){
        assert.equal(isFromBellville('CY 4532'),true);
    });
    it('should  returns false if a registration number is for Bellville', function(){
        assert.equal(isFromBellville('CJ 4532'),false);
   });
});
