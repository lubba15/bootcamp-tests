describe('function countRegNumber', function(){

    it(' should returns the number of registration numbers in the string also work for the string', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
    });
    it(' should returns the number of registration numbers in the string also work for the string', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,FS 985621'),4);
    });
   });
