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

module.exports.equals = function equals ( context1, context2, options ) {
  return context1 === context2;
}

module.exports.sort = function sort( context, options ) {
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
