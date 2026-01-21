/**
 *  © 2024, slashlib.org.
 *
 *  Initial tests - to be run in advance to any other test.
 *
 */ // use nodes default assertions
const assert = require( "node:assert" );

describe( "00.01.initial.spec.js", () => {
  describe( "Testing for prerequisites.", () => {
    it( "Check for availability of assertion library 'expect.js'", () => {
        assert.doesNotThrow(() => {
            const test = require( "expect.js" );
        }, undefined, "Missing assertion framework 'expect.js'" );
    });
    it( "Check for availability of bundeling library 'rollup'", () => {
        assert.doesNotThrow(() => {
            const test = require( "rollup" );
        }, undefined, "Missing bundeling framework 'rollup'" );
    });
  });
});
