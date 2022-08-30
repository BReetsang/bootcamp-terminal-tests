import assert from "assert";
import transportFee from "../transportFee.js";

describe('transport fee Function' , function() {
    
    it("It returns R20, for morning shift" , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it("It returns R10, for afternoon shift" , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it("It returns free, for night shift" , function(){
        assert.equal(transportFee('nightshift'), 'free');
    });
   
});