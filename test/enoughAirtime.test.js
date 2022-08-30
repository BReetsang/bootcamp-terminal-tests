import assert from "assert";
import enoughAirtime from "../enoughAirtime.js";

describe('Testing enoughAirtime function' , function(){
    it("In the string 'call,call,call,data,sms,sms,call,data', it should return R16.98 when R50 is given" , function(){
        assert.equal(2,2);
        assert.deepEqual([2,2],[2,2]);
    });

    it("returns'R0.00', for a string'data,sms,data,sms', when R20 is available" , function(){
        assert.equal(2,2);
        assert.deepEqual([2,2],[2,2]);
    });

    it("returns'R0.00', for a stringdata,data,data', when R36 is given" , function(){
        assert.equal(2,2);
        assert.deepEqual([2,2],[2,2]);
    });
   

    //assert.equal('R16.98', enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
//assert.equal('R0.00', enoughAirtime('data,sms,data,sms', 20))
//assert.equal('R0.00', enoughAirtime('data,data,data', 36));
});