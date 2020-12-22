/*
 *  helpers.js: dmd-grunt-jsdoc2md
 *
 *  © 2020, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

const _STRINGS = {
  EQUALS:   "equals",
  SORT:     "sort"
};

function equals ( context1, context2, options ) {
  return context1 === context2;
}

function sort( context, options ) {
  if ( options.hash.by ) {
       const  property = options.hash.by;
       const sorted    = [ ...context ].sort(( first, second ) => {
                try {
                  let result = undefined;
                  if ( first[ property ] < second[ property]) { result = -1; }
                  else if ( first[ property ] > second[ property]) { result = 1; }
                  else result = 0;
                  return result;
                }
                catch( error ) { console.log( error ); return 0; }
              });
       return options.fn( sorted );
  }
  else return options.fn( context );
}

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.EQUALS, {
       value:    equals,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.SORT, {
       value:    sort,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
