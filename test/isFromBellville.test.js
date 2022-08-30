import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe(' Bellville Registration numbers function' , function() {
    
    it("should return true when registration is from Bellville and starts with CY" , function(){
        assert.equal(isFromBellville("CY 123"), true);
        
    });

    it("should return false for any other registration" , function(){
        assert.equal(isFromBellville("CN 345"), false);
    });        

});