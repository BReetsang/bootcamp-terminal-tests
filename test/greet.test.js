import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Tumi correctly', function(){
        assert.equal('Hello, Tumi', greet('Tumi'));
    });
    it('should greet Rone correctly', function(){        
        assert.equal('Hello, Rone', greet('Rone'));
    });
});
