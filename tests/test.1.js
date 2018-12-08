const assert = require('assert');
const rh = require('../index.js');

const good = t=>{console.log("\x1b[32m", t, "\x1b[0m")};
const bad = t=>{console.log("\x1b[31m", t, "\x1b[0m")};

console.group("rh()");
    console.group("rh() is okay");
    try{
        const color = rh();
        assert.ok(color);
        good("Passed");
    }catch(e){
        bad("ERROR "+e.message);
    }finally{
        console.log("Done");
    }
    console.groupEnd("rh() is okay");
console.groupEnd("rh()");