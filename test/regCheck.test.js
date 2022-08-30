import assert from "assert";
import regCheck from "../regCheck.js";

describe('GP, L, EC, MP registration plates  Function' , function() {
    
    it("It returns true if a registration is from  and ends with GP" , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });

    it("It returns true if a registration is from and ends with L" , function(){
        assert.equal(regCheck('5566 L', 'L'), true); 
    });

    it("It returns true if a registration is from and ends with EC" , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it("It returns true if a registration is from and ends with MP" , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it("It returns false for any other registration" , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });    

});
