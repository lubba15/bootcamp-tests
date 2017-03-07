describe('function fromWhere', function(){

    it('should the reg number startswith CY return Bellville', function(){
        assert.equal(fromWhere('CY'),'Bellville');
          });
    it('should if reg number  CJ return Paarl', function(){
        assert.equal(fromWhere('CJ'),'Paarl');
    });
    it(' should return Cape Town if reg number start with CA ', function(){
        assert.equal(fromWhere('CA'),'Cape Town');
    });
        });
