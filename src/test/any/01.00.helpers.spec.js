/**
 *  © 2024, slashlib.org.
 */
const expect  = require( "expect.js" );
const helpers = require( "../../helpers/helpers" );

describe( "01.00.helpers.spec.js - Testing module 'lib/helpers/helpers.js'", () => {

  describe( "Testing exports of module 'helpers/helpers'", () => {
    it( "Function 'equals' should exist", () => {
        expect( helpers.equals ).not.to.be( undefined );
        expect( helpers.equals ).to.be.a( "function" );
    });

    it( "Function 'sort' should exist", () => {
        expect( helpers.sort ).not.to.be( undefined );
        expect( helpers.sort ).to.be.a( "function" );
    });
  });

  describe( "Testing function 'equals' of module 'helpers/helpers'", () => {

    it( "Should return true for strictly equal values", () => {
        const result = helpers.equals( 1, 1 );
        expect( result ).to.be( true );
    });

    it( "Should return false for non-equal values", () => {
        const result = helpers.equals( 1, 2 );
        expect( result ).to.be( false );
    });

    it( "Should use strict equality (===)", () => {
        const result = helpers.equals( 1, "1" );
        expect( result ).to.be( false );
    });

    it( "Should return true for same object reference", () => {
        const obj = {};
        const result = helpers.equals( obj, obj );
        expect( result ).to.be( true );
    });

    it( "Should return false for different object instances", () => {
        const result = helpers.equals( {}, {} );
        expect( result ).to.be( false );
    });
  });

  describe( "Testing function 'sort' of module 'helpers/helpers'", () => {

    it( "Should return context unchanged if no sort property is given", () => {
        const context = [ 3, 1, 2 ];
        const options = {
          hash: {},
          fn: ( value ) => value
        };

        const result = helpers.sort( context, options );
        expect( result ).to.be( context );
    });

    it( "Should sort array by given property", () => {
        const context = [
          { name: "c" },
          { name: "a" },
          { name: "b" }
        ];

        const options = {
          hash: { by: "name" },
          fn: ( value ) => value
        };

        const result = helpers.sort( context, options );
        expect( result.map( v => v.name ) ).to.eql( [ "a", "b", "c" ] );
    });

    it( "Should not mutate the original context array", () => {
        const context = [
          { id: 2 },
          { id: 1 }
        ];

        const options = {
          hash: { by: "id" },
          fn: ( value ) => value
        };

        helpers.sort( context, options );
        expect( context.map( v => v.id ) ).to.eql( [ 2, 1 ] );
    });

    it( "Should handle missing properties gracefully", () => {
        const context = [
          { id: 1 },
          {}
        ];

        const options = {
          hash: { by: "id" },
          fn: ( value ) => value
        };

        const result = helpers.sort( context, options );
        expect( result.length ).to.be( 2 );
    });

    it( "Should catch errors during sort, log them, and continue sorting", () => {
        const throwingObject = {};
        Object.defineProperty( throwingObject, "boom", {
          get() {
            throw new Error( "boom" );
          }
        });

        const context = [
          throwingObject,
          { boom: 1 }
        ];

        const options = {
          hash: { by: "boom" },
          fn: ( value ) => value
        };

        const originalLog = console.log;
        let loggedError   = null;

        console.log = function ( error ) {
          loggedError = error;
        };

        const result = helpers.sort( context, options );

        console.log = originalLog;

        expect( loggedError ).to.be.an( Error );
        expect( result ).to.be.an( "array" );
        expect( result.length ).to.be( 2 );
    });
  });
});
