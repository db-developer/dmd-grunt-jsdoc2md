/**
 *  © 2024, slashlib.org.
 */
const expect = require( "expect.js" );
const lib    = require( "../../lib/index" );

describe( "02.00.lib.spec.js - Testing module 'lib/index.js'", () => {

  describe( "Testing exports of module 'lib'", () => {

    it( "Module should export a function", () => {
      expect( lib ).not.to.be( undefined );
      expect( lib ).to.be.a( "function" );
    });

    it( "Calling module function should return an object", () => {
      const result = lib();
      expect( result ).to.be.an( "object" );
    });

    it( "Returned object should expose 'partial' property", () => {
      const result = lib();
      expect( result.partial ).not.to.be( undefined );
      expect( result.partial ).to.be.a( "string" );
    });

    it( "Returned object should expose 'helper' property", () => {
      const result = lib();
      expect( result.helper ).not.to.be( undefined );
      expect( result.helper ).to.be.a( "string" );
    });

    it( "Partial path should point to Handlebars partials", () => {
      const result = lib();
      expect( result.partial ).to.contain( "/partials/" );
      expect( result.partial ).to.contain( "*.hbs" );
    });

    it( "Helper path should point to helper modules", () => {
      const result = lib();
      expect( result.helper ).to.contain( "/helpers/" );
      expect( result.helper ).to.contain( "*.js" );
    });

  });
});
